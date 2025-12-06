"use client"

import { cn } from "@/lib/utils"

interface ResolutionSelectorProps {
  resolutions: string[]
  selected: string
  onSelect: (resolution: string) => void
}

export function ResolutionSelector({ resolutions, selected, onSelect }: ResolutionSelectorProps) {
  return (
    <div className="mb-4 sm:mb-6">
      <label className="block text-xs sm:text-sm font-medium text-muted-foreground mb-2 sm:mb-3">Pilih Resolusi</label>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {resolutions.map((resolution) => (
          <button
            key={resolution}
            onClick={() => onSelect(resolution)}
            className={cn(
              "px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all",
              selected === resolution
                ? "gradient-btn text-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            )}
          >
            {resolution}
          </button>
        ))}
      </div>
    </div>
  )
}
