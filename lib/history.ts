export interface HistoryItem {
  id: string
  title: string
  platform: "tiktok" | "facebook"
  thumbnail: string
  resolution: string
  downloadedAt: string
}

const HISTORY_KEY = "video_download_history"
const MAX_HISTORY = 10

export function getHistory(): HistoryItem[] {
  if (typeof window === "undefined") return []

  try {
    const stored = localStorage.getItem(HISTORY_KEY)
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function saveToHistory(item: HistoryItem): void {
  if (typeof window === "undefined") return

  try {
    const history = getHistory()
    const updated = [item, ...history.filter((h) => h.id !== item.id)].slice(0, MAX_HISTORY)
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event("storage"))
  } catch {
    // Silently fail if localStorage is not available
  }
}

export function clearHistory(): void {
  if (typeof window === "undefined") return

  try {
    localStorage.removeItem(HISTORY_KEY)
    window.dispatchEvent(new Event("storage"))
  } catch {
    // Silently fail if localStorage is not available
  }
}
