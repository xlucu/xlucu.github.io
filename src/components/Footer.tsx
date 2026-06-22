import { FacebookLogo, InstagramLogo, TiktokLogo, Heart } from "@phosphor-icons/react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 text-background py-20 overflow-hidden">
      <div className="absolute inset-0 field-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary via-secondary to-accent shadow-lg"></div>
      
      <div className="absolute top-10 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-10">
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                <svg viewBox="0 0 24 24" fill="none" className="w-12 h-12 text-white">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-5xl font-black bg-gradient-to-r from-white via-background to-white bg-clip-text text-transparent">
              أكاديمية المواهب
            </h3>
            <p className="text-2xl opacity-95 font-bold">اصنع من موهبتك بطل ملعب</p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-blue-500 border-2 border-white/20 hover:border-blue-400 shadow-xl"
              aria-label="فيسبوك"
            >
              <FacebookLogo size={36} weight="fill" className="group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 border-2 border-white/20 hover:border-pink-400 shadow-xl"
              aria-label="انستغرام"
            >
              <InstagramLogo size={36} weight="fill" className="group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-20 h-20 glass-effect rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 hover:bg-black border-2 border-white/20 hover:border-white shadow-xl"
              aria-label="تيك توك"
            >
              <TiktokLogo size={36} weight="fill" className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="border-t border-background/20 pt-10 mt-10 space-y-4">
            <p className="text-lg opacity-80 flex items-center justify-center gap-2">
              صُنع مع <Heart size={20} weight="fill" className="text-red-400 animate-pulse" /> في سوريا
            </p>
            <p className="text-base opacity-70">
              © 2024 أكاديمية المواهب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
