export function LoadingSpinner() {
  return (
    <div className="mt-6 sm:mt-8 flex flex-col items-center justify-center py-8 sm:py-12">
      <div className="relative">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-muted animate-pulse" />
        <div className="absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-transparent border-t-[#00D4FF] border-r-[#6A00FF] animate-spin" />
      </div>
      <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground animate-pulse">Memproses video...</p>
    </div>
  )
}
