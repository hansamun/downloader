export interface VideoInfo {
  platform: "tiktok" | "facebook"
  title: string
  duration: string
  thumbnail: string
  available_resolutions: string[]
  video_links: Record<string, string>
  audio_link: string
}

export interface ParseRequest {
  url: string
}

export interface ParseResponse extends VideoInfo {}

export interface ParseError {
  error: string
}
