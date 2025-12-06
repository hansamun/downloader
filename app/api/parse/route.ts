import { type NextRequest, NextResponse } from "next/server"
import { detectPlatform } from "@/lib/platforms"
import type { VideoInfo, ParseError } from "@/lib/types"

export async function POST(request: NextRequest): Promise<NextResponse<VideoInfo | ParseError>> {
  try {
    const { url } = await request.json()

    if (!url || typeof url !== "string") {
      return NextResponse.json({ error: "URL diperlukan" }, { status: 400 })
    }

    const platform = detectPlatform(url)

    if (!platform) {
      return NextResponse.json({ error: "Platform tidak didukung. Gunakan URL TikTok." }, { status: 400 })
    }

    const videoInfo = await fetchTikTokVideo(url)

    return NextResponse.json(videoInfo)
  } catch (error) {
    console.error("Parse error:", error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Gagal memproses video" },
      { status: 500 },
    )
  }
}

async function fetchTikTokVideo(url: string): Promise<VideoInfo> {
  // Using tikwm API for TikTok
  const apiUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(url)}`

  const response = await fetch(apiUrl, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    },
  })

  if (!response.ok) {
    throw new Error("Gagal mengambil info video TikTok")
  }

  const data = await response.json()

  if (data.code !== 0 || !data.data) {
    throw new Error(data.msg || "Gagal memproses video TikTok")
  }

  const video = data.data
  const duration = formatDuration(video.duration || 0)

  return {
    platform: "tiktok",
    title: video.title || "Video TikTok",
    duration,
    thumbnail: video.cover || video.origin_cover || "/tiktok-thumbnail.png",
    available_resolutions: ["360p", "480p", "720p", "1080p"],
    video_links: {
      "360p": video.play || video.wmplay,
      "480p": video.play || video.wmplay,
      "720p": video.hdplay || video.play,
      "1080p": video.hdplay || video.play,
    },
    audio_link: video.music || "",
  }
}

function formatDuration(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}
