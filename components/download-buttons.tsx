"use client"

import { Download, Music } from "lucide-react"
import { Button } from "@/components/ui/button"

interface DownloadButtonsProps {
  videoLinks: Record<string, string>
  audioLink: string
  selectedResolution: string
  onDownload: (type: "video" | "audio") => void
}

export function DownloadButtons({ videoLinks, audioLink, selectedResolution, onDownload }: DownloadButtonsProps) {
  const handleVideoDownload = () => {
    onDownload("video")
    const link = videoLinks[selectedResolution]
    if (link) {
      window.open(link, "_blank")
    }
  }

  const handleAudioDownload = () => {
    onDownload("audio")
    if (audioLink) {
      window.open(audioLink, "_blank")
    }
  }

  return (
    <div className="flex flex-col gap-2 sm:gap-3">
      <Button
        onClick={handleVideoDownload}
        className="w-full gradient-btn text-foreground font-semibold py-5 sm:py-6 rounded-xl hover:opacity-90 transition-all text-sm sm:text-base"
      >
        <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Unduh MP4 ({selectedResolution})
      </Button>
      <Button
        onClick={handleAudioDownload}
        variant="outline"
        className="w-full bg-secondary border-border text-secondary-foreground font-semibold py-5 sm:py-6 rounded-xl hover:bg-secondary/80 transition-all text-sm sm:text-base"
      >
        <Music className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
        Unduh MP3
      </Button>
    </div>
  )
}
