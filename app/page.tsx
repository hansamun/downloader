import { HeroSection } from "@/components/hero-section"
import { VideoDownloader } from "@/components/video-downloader"
import { DownloadHistory } from "@/components/download-history"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00D4FF]/10 via-transparent to-transparent pointer-events-none" />
      <div className="relative z-10">
        <HeroSection />
        <VideoDownloader />
        <DownloadHistory />
        <Footer />
      </div>
    </main>
  )
}
