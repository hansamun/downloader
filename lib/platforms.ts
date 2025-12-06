export function detectPlatform(url: string): "tiktok" | "facebook" | null {
  const normalizedUrl = url.toLowerCase()

  if (
    normalizedUrl.includes("tiktok.com") ||
    normalizedUrl.includes("vm.tiktok.com") ||
    normalizedUrl.includes("vt.tiktok.com")
  ) {
    return "tiktok"
  }

  if (
    normalizedUrl.includes("facebook.com") ||
    normalizedUrl.includes("fb.com") ||
    normalizedUrl.includes("fb.watch")
  ) {
    return "facebook"
  }

  return null
}

export function extractTikTokId(url: string): string | null {
  const patterns = [
    /tiktok\.com\/@[\w.-]+\/video\/(\d+)/i,
    /tiktok\.com\/t\/(\w+)/i,
    /vm\.tiktok\.com\/(\w+)/i,
    /vt\.tiktok\.com\/(\w+)/i,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}

export function extractFacebookVideoId(url: string): string | null {
  const patterns = [
    /facebook\.com\/.*\/videos\/(\d+)/i,
    /facebook\.com\/watch\/?\?v=(\d+)/i,
    /fb\.watch\/(\w+)/i,
    /facebook\.com\/reel\/(\d+)/i,
  ]

  for (const pattern of patterns) {
    const match = url.match(pattern)
    if (match) return match[1]
  }

  return null
}
