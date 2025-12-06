"use client"

import { useState } from "react"
import Image from "next/image"
import { Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ResolutionSelector } from "./resolution-selector"
import { DownloadButtons } from "./download-buttons"
import { PlatformIcon } from "./platform-icon"
import type { VideoInfo } from "@/lib/types"
import { saveToHistory } from "@/lib/history"

interface VideoPreviewProps {
  videoInfo: VideoInfo
  onReset: () => void
}

export function VideoPreview({ videoInfo, onReset }: VideoPreviewProps) {
  const [selectedResolution, setSelectedResolution] = useState(
    videoInfo.available_resolutions[videoInfo.available_resolutions.length - 1],
  )

  const handleDownload = (type: "video" | "audio") => {
    saveToHistory({
      id: Date.now().toString(),
      title: videoInfo.title,
      platform: videoInfo.platform,
      thumbnail: videoInfo.thumbnail,
      resolution: type === "video" ? selectedResolution : "MP3",
      downloadedAt: new Date().toISOString(),
    })
  }

  return (
    <div className="mt-6 sm:mt-8 rounded-xl sm:rounded-2xl bg-card border border-border overflow-hidden neon-glow animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="relative">
        <Button
          variant="ghost"
          size="icon"
          onClick={onReset}
          className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10 bg-background/80 backdrop-blur-sm hover:bg-background w-8 h-8 sm:w-10 sm:h-10"
        >
          <X className="w-4 h-4" />
        </Button>

        <div className="relative aspect-video w-full bg-muted">
          <Image src={videoInfo.thumbnail || "/placeholder.svg"} alt={videoInfo.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="flex items-start gap-3 mb-4">
          <PlatformIcon platform={videoInfo.platform} />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground line-clamp-2 mb-1 text-sm sm:text-base">{videoInfo.title}</h3>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>{videoInfo.duration}</span>
            </div>
          </div>
        </div>

        <ResolutionSelector
          resolutions={videoInfo.available_resolutions}
          selected={selectedResolution}
          onSelect={setSelectedResolution}
        />

        <DownloadButtons
          videoLinks={videoInfo.video_links}
          audioLink={videoInfo.audio_link}
          selectedResolution={selectedResolution}
          onDownload={handleDownload}
        />
      </div>
    </div>
  )
}
