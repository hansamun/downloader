"use client"

import { useState } from "react"
import { UrlInput } from "./url-input"
import { VideoPreview } from "./video-preview"
import { LoadingSpinner } from "./loading-spinner"
import type { VideoInfo } from "@/lib/types"

export function VideoDownloader() {
  const [videoInfo, setVideoInfo] = useState<VideoInfo | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleParse = async (url: string) => {
    setIsLoading(true)
    setError(null)
    setVideoInfo(null)

    try {
      const response = await fetch("/api/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to parse video")
      }

      setVideoInfo(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setVideoInfo(null)
    setError(null)
  }

  return (
    <section className="py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <UrlInput onSubmit={handleParse} isLoading={isLoading} />

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-destructive/10 border border-destructive/20 text-center">
            <p className="text-destructive">{error}</p>
          </div>
        )}

        {isLoading && <LoadingSpinner />}

        {videoInfo && !isLoading && <VideoPreview videoInfo={videoInfo} onReset={handleReset} />}
      </div>
    </section>
  )
}
