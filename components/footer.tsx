export function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs sm:text-sm text-muted-foreground">Dibuat untuk pecinta video</p>
        <p className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-muted-foreground">
          {new Date().getFullYear()} Video Downloader. Hanya untuk penggunaan pribadi.
        </p>
      </div>
    </footer>
  )
}
