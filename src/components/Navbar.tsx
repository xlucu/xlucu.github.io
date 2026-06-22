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
    <nav className="fixed top-0 left-0 right-0 z-[100] glass-effect shadow-[0_10px_40px_rgba(0,0,0,0.1)] border-b border-white/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-28">
          <div className="flex items-center gap-5 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="relative z-[101]">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg viewBox="0 0 1200 800" className="w-full h-full drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]" xmlns="http://www.w3.org/2000/svg">
                  <ellipse cx="600" cy="500" rx="350" ry="350" fill="url(#grad1)" stroke="#0d5e4a" strokeWidth="15"/>
                  <polygon points="600,250 650,400 800,420 700,520 730,670 600,590 470,670 500,520 400,420 550,400" fill="url(#grad2)" stroke="#0d5e4a" strokeWidth="8"/>
                  <path d="M 850,280 Q 950,350 1000,450 Q 1050,550 1100,650" stroke="url(#grad3)" strokeWidth="40" fill="none" strokeLinecap="round"/>
                  <path d="M 870,300 Q 970,370 1020,470 Q 1070,570 1120,670" stroke="#ffd700" strokeWidth="20" fill="none" strokeLinecap="round"/>
                  <path d="M 890,330 Q 990,400 1040,500 Q 1090,600 1130,690" stroke="#fff" strokeWidth="10" fill="none" strokeLinecap="round"/>
                  <defs>
                    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#2d8a6e', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#1a6b52', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#0d5e4a', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#ffd700', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#ffed4e', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#ffd700', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0d5e4a', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#1a6b52', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#2d8a6e', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] leading-none">
                أكاديمية المواهب
              </h1>
              <p className="text-base text-white/90 font-black mt-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)]">اصنع من موهبتك بطل ملعب</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white font-black text-lg hover:text-white/90 transition-all hover:scale-110 relative group/link drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              الرئيسية
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            <button 
              onClick={() => scrollToSection('categories')}
              className="text-white font-black text-lg hover:text-white/90 transition-all hover:scale-110 relative group/link drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              الفئات
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            <button 
              onClick={() => scrollToSection('offers')}
              className="text-white font-black text-lg hover:text-white/90 transition-all hover:scale-110 relative group/link drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              خدماتنا
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white font-black text-lg hover:text-white/90 transition-all hover:scale-110 relative group/link drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              المعرض
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="text-white font-black text-lg hover:text-white/90 transition-all hover:scale-110 relative group/link drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              آراء الأهالي
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white font-black text-lg hover:text-white/90 transition-all hover:scale-110 relative group/link drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
            >
              تواصل معنا
              <span className="absolute -bottom-2 left-0 w-0 h-1 bg-white rounded-full group-hover/link:w-full transition-all duration-500 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></span>
            </button>
            <Button 
              onClick={openWhatsApp}
              className="bg-white hover:bg-white/95 text-primary font-black text-xl px-10 py-7 rounded-[1.5rem] shadow-[0_10px_40px_rgba(255,255,255,0.4)] hover:shadow-[0_15px_50px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-500 relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <WhatsappLogo size={28} weight="fill" className="ml-3 relative z-10" />
              <span className="relative z-10">احجز الآن</span>
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-3 text-white hover:text-white/90 transition-all hover:scale-110 rounded-xl hover:bg-white/10"
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
              className="block w-full text-right py-4 px-6 text-white font-bold hover:bg-white/10 rounded-xl transition-all"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection('categories')}
              className="block w-full text-right py-4 px-6 text-white font-bold hover:bg-white/10 rounded-xl transition-all"
            >
              الفئات
            </button>
            <button 
              onClick={() => scrollToSection('offers')}
              className="block w-full text-right py-4 px-6 text-white font-bold hover:bg-white/10 rounded-xl transition-all"
            >
              خدماتنا
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="block w-full text-right py-4 px-6 text-white font-bold hover:bg-white/10 rounded-xl transition-all"
            >
              المعرض
            </button>
            <button 
              onClick={() => scrollToSection('testimonials')}
              className="block w-full text-right py-4 px-6 text-white font-bold hover:bg-white/10 rounded-xl transition-all"
            >
              آراء الأهالي
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-right py-4 px-6 text-white font-bold hover:bg-white/10 rounded-xl transition-all"
            >
              تواصل معنا
            </button>
            <Button 
              onClick={openWhatsApp}
              className="w-full bg-white hover:bg-white/95 text-primary font-black text-xl py-7 rounded-2xl shadow-xl mt-4"
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
