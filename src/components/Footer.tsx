import { FacebookLogo, InstagramLogo, TiktokLogo } from "@phosphor-icons/react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background py-16 overflow-hidden">
      <div className="absolute inset-0 field-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl">
                <svg viewBox="0 0 24 24" fill="none" className="w-9 h-9 text-white">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-black">أكاديمية المواهب</h3>
            <p className="text-xl opacity-90 font-semibold">اصنع من موهبتك بطل ملعب</p>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-primary border-2 border-white/20 hover:border-primary"
              aria-label="فيسبوك"
            >
              <FacebookLogo size={32} weight="fill" className="group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-accent border-2 border-white/20 hover:border-accent"
              aria-label="انستغرام"
            >
              <InstagramLogo size={32} weight="fill" className="group-hover:scale-110 transition-transform" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-primary border-2 border-white/20 hover:border-primary"
              aria-label="تيك توك"
            >
              <TiktokLogo size={32} weight="fill" className="group-hover:scale-110 transition-transform" />
            </a>
          </div>

          <div className="border-t border-background/20 pt-8 mt-8">
            <p className="text-sm opacity-75">
              © 2024 أكاديمية المواهب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
