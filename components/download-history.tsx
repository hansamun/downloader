"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { History, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PlatformIcon } from "./platform-icon"
import { getHistory, clearHistory, type HistoryItem } from "@/lib/history"

export function DownloadHistory() {
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setHistory(getHistory())
  }, [])

  const handleClear = () => {
    clearHistory()
    setHistory([])
  }

  if (!mounted || history.length === 0) {
    return null
  }

  return (
    <section className="py-8 sm:py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <History className="w-4 h-4 sm:w-5 sm:h-5 text-[#00D4FF]" />
            <h2 className="text-lg sm:text-xl font-semibold text-foreground">Riwayat Unduhan</h2>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="text-muted-foreground hover:text-destructive text-xs sm:text-sm"
          >
            <Trash2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
            Hapus Semua
          </Button>
        </div>

        <div className="space-y-2 sm:space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl bg-card border border-border hover:border-[#00D4FF]/30 transition-colors"
            >
              <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0">
                <Image src={item.thumbnail || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
                  <PlatformIcon platform={item.platform} className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs text-muted-foreground uppercase">{item.platform}</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-foreground line-clamp-1">{item.title}</p>
                <div className="flex items-center gap-1.5 sm:gap-2 mt-1 text-[10px] sm:text-xs text-muted-foreground">
                  <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  <span>{new Date(item.downloadedAt).toLocaleDateString("id-ID")}</span>
                  <span className="px-1.5 sm:px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                    {item.resolution}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
