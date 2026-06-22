import { FacebookLogo, InstagramLogo, TiktokLogo, Heart } from "@phosphor-icons/react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-foreground/98 via-foreground/95 to-transparent text-background py-32 overflow-hidden mt-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-foreground/50 to-foreground"></div>
        <div className="absolute inset-0 field-pattern opacity-8"></div>
      </div>
      
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent shadow-[0_0_30px_rgba(132,71,221,0.6)]"></div>
      
      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-primary/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-20 left-[10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[140px] animate-pulse" style={{ animationDuration: '10s', animationDelay: '2s' }}></div>
      <div className="absolute top-[50%] left-[50%] w-[600px] h-[600px] bg-secondary/12 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '4s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center gap-5 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-[0_20px_60px_rgba(132,71,221,0.5)] ring-4 ring-white/30 hover:scale-110 transition-all duration-500">
                <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14 text-white">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.3"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                </svg>
              </div>
            </div>
            <h3 className="text-6xl font-black bg-gradient-to-r from-white via-background to-white bg-clip-text text-transparent">
              أكاديمية المواهب
            </h3>
            <p className="text-3xl opacity-95 font-black">اصنع من موهبتك بطل ملعب</p>
          </div>

          <div className="flex justify-center gap-8">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-24 h-24 glass-effect rounded-[1.5rem] flex items-center justify-center hover:scale-125 transition-all duration-500 hover:bg-blue-500 border-3 border-white/30 hover:border-blue-400 shadow-2xl"
              aria-label="فيسبوك"
            >
              <FacebookLogo size={42} weight="fill" className="group-hover:scale-110 transition-transform duration-500" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-24 h-24 glass-effect rounded-[1.5rem] flex items-center justify-center hover:scale-125 transition-all duration-500 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 border-3 border-white/30 hover:border-pink-400 shadow-2xl"
              aria-label="انستغرام"
            >
              <InstagramLogo size={42} weight="fill" className="group-hover:scale-110 transition-transform duration-500" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-24 h-24 glass-effect rounded-[1.5rem] flex items-center justify-center hover:scale-125 transition-all duration-500 hover:bg-black border-3 border-white/30 hover:border-white shadow-2xl"
              aria-label="تيك توك"
            >
              <TiktokLogo size={42} weight="fill" className="group-hover:scale-110 transition-transform duration-500" />
            </a>
          </div>

          <div className="border-t border-background/30 pt-12 mt-12 space-y-5">
            <p className="text-xl opacity-85 flex items-center justify-center gap-3 font-bold">
              صُنع مع <Heart size={24} weight="fill" className="text-red-400 animate-pulse" /> في سوريا
            </p>
            <p className="text-lg opacity-75 font-bold">
              © 2024 أكاديمية المواهب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
