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
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_6px_20px_rgba(0,0,0,0.4)]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="ballGradient" cx="35%" cy="35%">
                      <stop offset="0%" style={{stopColor: '#4ade80', stopOpacity: 1}} />
                      <stop offset="40%" style={{stopColor: '#22c55e', stopOpacity: 1}} />
                      <stop offset="70%" style={{stopColor: '#16a34a', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#15803d', stopOpacity: 1}} />
                    </radialGradient>
                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#fcd34d', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#15803d', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#16a34a', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#22c55e', stopOpacity: 1}} />
                    </linearGradient>
                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                      <feOffset dx="0" dy="2" result="offsetblur"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.5"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <circle cx="200" cy="200" r="140" fill="url(#ballGradient)" stroke="#15803d" strokeWidth="8" filter="url(#shadow)"/>
                  
                  <path d="M 200,100 L 230,160 L 295,170 L 240,215 L 255,280 L 200,245 L 145,280 L 160,215 L 105,170 L 170,160 Z" 
                        fill="url(#starGradient)" 
                        stroke="#b45309" 
                        strokeWidth="4"
                        filter="url(#shadow)"/>
                  
                  <path d="M 290,120 Q 330,145 360,180 Q 385,210 395,250" 
                        stroke="url(#wingGradient)" 
                        strokeWidth="22" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#shadow)"/>
                  <path d="M 295,135 Q 335,160 365,195 Q 390,225 398,265" 
                        stroke="#fbbf24" 
                        strokeWidth="12" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                  <path d="M 300,150 Q 340,175 370,210 Q 393,238 399,278" 
                        stroke="rgba(255,255,255,0.7)" 
                        strokeWidth="6" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                  
                  <path d="M 290,145 Q 330,170 360,205 Q 385,235 395,275" 
                        stroke="url(#wingGradient)" 
                        strokeWidth="18" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        filter="url(#shadow)"/>
                  <path d="M 295,158 Q 335,183 365,218 Q 390,248 398,288" 
                        stroke="#fbbf24" 
                        strokeWidth="10" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                  <path d="M 300,170 Q 340,195 370,230 Q 393,258 399,298" 
                        stroke="rgba(255,255,255,0.6)" 
                        strokeWidth="5" 
                        fill="none" 
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                  
                  <path d="M 110,185 L 135,155 M 150,230 L 125,215 M 290,185 L 265,155 M 250,230 L 275,215" 
                        stroke="#15803d" 
                        strokeWidth="5" 
                        strokeLinecap="round"/>
                  
                  <ellipse cx="165" cy="175" rx="8" ry="10" fill="rgba(255,255,255,0.4)" transform="rotate(-20 165 175)"/>
                  <ellipse cx="180" cy="165" rx="5" ry="6" fill="rgba(255,255,255,0.3)" transform="rotate(-20 180 165)"/>
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
