import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect shadow-lg border-b border-white/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
              <Avatar className="w-16 h-16 border-2 border-white shadow-2xl ring-4 ring-primary/20 relative">
                <AvatarImage 
                  src="https://api.dicebear.com/7.x/identicon/svg?seed=TalentAcademy&backgroundColor=8b5cf6,ec4899&scale=90" 
                  alt="أكاديمية المواهب"
                />
                <AvatarFallback className="bg-gradient-to-br from-primary via-secondary to-accent text-white font-black text-2xl">
                  أم
                </AvatarFallback>
              </Avatar>
            </div>
            
            <div>
              <h1 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent leading-none">
                أكاديمية المواهب
              </h1>
              <p className="text-sm text-muted-foreground font-bold mt-1">اصنع من موهبتك بطل ملعب</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground font-bold hover:text-primary transition-all hover:scale-110 relative group/link"
            >
              الرئيسية
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('categories')}
              className="text-foreground font-bold hover:text-primary transition-all hover:scale-110 relative group/link"
            >
              الفئات
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('offers')}
              className="text-foreground font-bold hover:text-primary transition-all hover:scale-110 relative group/link"
            >
              خدماتنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-foreground font-bold hover:text-primary transition-all hover:scale-110 relative group/link"
            >
              المعرض
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('stars')}
              className="text-foreground font-bold hover:text-primary transition-all hover:scale-110 relative group/link"
            >
              نجومنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground font-bold hover:text-primary transition-all hover:scale-110 relative group/link"
            >
              تواصل معنا
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover/link:w-full transition-all duration-300"></span>
            </button>
            <Button 
              onClick={openWhatsApp}
              className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 font-black text-lg px-8 py-6 rounded-2xl shadow-xl hover:scale-110 transition-all duration-300"
            >
              <WhatsappLogo size={24} weight="fill" className="ml-2" />
              احجز الآن
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-foreground hover:text-primary transition-all hover:scale-110 rounded-xl hover:bg-primary/10"
          >
            {mobileMenuOpen ? <X size={32} weight="bold" /> : <List size={32} weight="bold" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-t border-white/20">
          <div className="container mx-auto px-4 py-6 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-right py-4 px-6 text-foreground font-bold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('categories')}
              className="block w-full text-right py-4 px-6 text-foreground font-bold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all"
            >
              الفئات
            </button>
            <button 
              onClick={() => scrollToSection('offers')}
              className="block w-full text-right py-4 px-6 text-foreground font-bold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-right py-4 px-6 text-foreground font-bold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all"
            >
              المعرض
            </button>
            <button 
              onClick={() => scrollToSection('stars')}
              className="block w-full text-right py-4 px-6 text-foreground font-bold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all"
            >
              نجومنا
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right py-4 px-6 text-foreground font-bold hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 rounded-xl transition-all"
            >
              تواصل معنا
            </button>
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 font-black text-xl py-7 rounded-2xl shadow-xl mt-4"
            >
              <WhatsappLogo size={28} weight="fill" className="ml-2" />
              احجز الآن
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
