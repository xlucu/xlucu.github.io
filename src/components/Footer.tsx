import { FacebookLogo, InstagramLogo, TiktokLogo } from "@phosphor-icons/react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-black">أكاديمية المواهب</h3>
            <p className="text-lg opacity-90">اصنع من موهبتك بطل ملعب</p>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform hover:bg-accent"
              aria-label="فيسبوك"
            >
              <FacebookLogo size={28} weight="fill" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform hover:bg-accent"
              aria-label="انستغرام"
            >
              <InstagramLogo size={28} weight="fill" />
            </a>

            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform hover:bg-accent"
              aria-label="تيك توك"
            >
              <TiktokLogo size={28} weight="fill" />
            </a>
          </div>

          <div className="border-t border-background/20 pt-6">
            <p className="text-sm opacity-75">
              © 2024 أكاديمية المواهب. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
