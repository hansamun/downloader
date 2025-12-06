import { Download, Zap, Shield } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-12 sm:pt-16 pb-6 sm:pb-8 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/50 border border-border mb-4 sm:mb-6">
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D4FF]" />
          <span className="text-xs sm:text-sm text-muted-foreground">Unduh Video Cepat dan Gratis</span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-4 neon-text text-balance">
          <span className="bg-gradient-to-r from-[#00D4FF] to-[#6A00FF] bg-clip-text text-transparent">
            TikTok Downloader
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-2 text-pretty">
          Unduh video dari TikTok secara instan. Pilih resolusi dan format yang kamu inginkan - MP4 atau MP3.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center justify-center gap-2">
            <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D4FF]" />
            <span>Berbagai Resolusi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#6A00FF]" />
            <span>Tanpa Registrasi</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#00D4FF]" />
            <span>Super Cepat</span>
          </div>
        </div>
      </div>
    </section>
  )
}
