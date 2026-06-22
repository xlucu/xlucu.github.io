import { useState } from "react"
import { Button } from "@/components/ui/button"
import { List, X, WhatsappLogo } from "@phosphor-icons/react"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMobileMenuOpen(false)
    }
  }

  const openWhatsApp = () => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent("مرحباً، أريد الاستفسار عن أكاديمية المواهب")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg ring-2 ring-primary/20">
                <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                </svg>
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-accent rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div>
              <h1 className="text-xl md:text-2xl font-black text-foreground leading-none">أكاديمية المواهب</h1>
              <p className="text-xs text-muted-foreground font-semibold mt-0.5">اصنع من موهبتك بطل ملعب</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground font-bold hover:text-primary transition-colors"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('categories')}
              className="text-foreground font-bold hover:text-primary transition-colors"
            >
              الفئات
            </button>
            <button 
              onClick={() => scrollToSection('offers')}
              className="text-foreground font-bold hover:text-primary transition-colors"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('stars')}
              className="text-foreground font-bold hover:text-primary transition-colors"
            >
              نجومنا
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground font-bold hover:text-primary transition-colors"
            >
              تواصل معنا
            </button>
            <Button 
              onClick={openWhatsApp}
              className="bg-primary hover:bg-primary/90 font-bold"
            >
              <WhatsappLogo size={20} weight="fill" className="ml-2" />
              احجز الآن
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-right py-3 px-4 text-foreground font-bold hover:bg-muted rounded-lg transition-colors"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('categories')}
              className="block w-full text-right py-3 px-4 text-foreground font-bold hover:bg-muted rounded-lg transition-colors"
            >
              الفئات
            </button>
            <button 
              onClick={() => scrollToSection('offers')}
              className="block w-full text-right py-3 px-4 text-foreground font-bold hover:bg-muted rounded-lg transition-colors"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('stars')}
              className="block w-full text-right py-3 px-4 text-foreground font-bold hover:bg-muted rounded-lg transition-colors"
            >
              نجومنا
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right py-3 px-4 text-foreground font-bold hover:bg-muted rounded-lg transition-colors"
            >
              تواصل معنا
            </button>
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-primary hover:bg-primary/90 font-bold text-lg py-6"
            >
              <WhatsappLogo size={24} weight="fill" className="ml-2" />
              احجز الآن
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
