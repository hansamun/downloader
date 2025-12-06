"use client"

import type React from "react"

import { useState } from "react"
import { Link2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface UrlInputProps {
  onSubmit: (url: string) => void
  isLoading: boolean
}

export function UrlInput({ onSubmit, isLoading }: UrlInputProps) {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onSubmit(url.trim())
    }
  }

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 p-2 rounded-2xl bg-card border border-border neon-glow">
        <div className="flex items-center gap-2 px-3 sm:pl-4 flex-1">
          <Link2 className="w-5 h-5 text-muted-foreground shrink-0" />
          <Input
            type="url"
            placeholder="Tempel link video TikTok..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-foreground placeholder:text-muted-foreground text-sm sm:text-base"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          disabled={!url.trim() || isLoading}
          className="w-full sm:w-auto gradient-btn text-foreground font-semibold px-4 sm:px-6 py-2.5 sm:py-2 rounded-xl hover:opacity-90 transition-all disabled:opacity-50"
        >
          {isLoading ? (
            <span className="flex items-center justify-center gap-2">
              <span className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
              Memproses...
            </span>
          ) : (
            <span className="flex items-center justify-center gap-2">
              Unduh
              <ArrowRight className="w-4 h-4" />
            </span>
          )}
        </Button>
      </div>
      <p className="mt-3 text-center text-xs text-muted-foreground">Mendukung link video TikTok</p>
    </form>
  )
}
