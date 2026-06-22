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
          <div className="flex items-center gap-5 cursor-pointer group/logo admin-trigger">
            <div className="relative z-[101] admin-trigger">
              <div className="w-20 h-20 flex items-center justify-center">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] transition-all duration-700 ease-out group-hover/logo:scale-110 group-hover/logo:rotate-[8deg] group-hover/logo:drop-shadow-[0_12px_40px_rgba(34,197,94,0.8)]" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient id="shieldGradient" cx="50%" cy="40%">
                      <stop offset="0%" style={{stopColor: '#4ade80', stopOpacity: 1}} />
                      <stop offset="60%" style={{stopColor: '#22c55e', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#15803d', stopOpacity: 1}} />
                    </radialGradient>
                    <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient id="innerShield" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.3}} />
                      <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.05}} />
                    </linearGradient>
                    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                      <feOffset dx="0" dy="0" result="offsetblur"/>
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="1.2"/>
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                    <filter id="innerShadow">
                      <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
                      <feOffset dx="0" dy="2"/>
                      <feComposite in2="SourceAlpha" operator="arithmetic" k2="-1" k3="1" result="shadowDiff"/>
                      <feFlood floodColor="#000000" floodOpacity="0.3"/>
                      <feComposite in2="shadowDiff" operator="in"/>
                      <feComposite in2="SourceGraphic" operator="over"/>
                    </filter>
                  </defs>
                  
                  <path d="M 200,60 L 340,110 L 340,200 Q 340,280 280,330 Q 240,360 200,380 Q 160,360 120,330 Q 60,280 60,200 L 60,110 Z" 
                        fill="url(#shieldGradient)" 
                        stroke="#15803d" 
                        strokeWidth="6" 
                        filter="url(#glow)"
                        className="transition-all duration-700 group-hover/logo:stroke-[8] group-hover/logo:opacity-100"/>
                  
                  <path d="M 200,80 L 320,120 L 320,200 Q 320,270 265,315 Q 230,340 200,358 Q 170,340 135,315 Q 80,270 80,200 L 80,120 Z" 
                        fill="url(#innerShield)" 
                        stroke="rgba(255,255,255,0.3)" 
                        strokeWidth="2"/>
                  
                  <circle cx="200" cy="220" r="80" 
                          fill="white" 
                          stroke="#16a34a" 
                          strokeWidth="5"
                          filter="url(#innerShadow)"
                          className="transition-all duration-700 group-hover/logo:stroke-[8] group-hover/logo:r-[85]"/>
                  
                  <path d="M 140,220 L 140,210 Q 140,160 200,140 Q 260,160 260,210 L 260,220 M 155,240 Q 155,280 200,295 Q 245,280 245,240" 
                        stroke="#16a34a" 
                        strokeWidth="4" 
                        fill="none" 
                        strokeLinecap="round"/>
                  <path d="M 175,210 L 175,195 Q 175,175 200,165 Q 225,175 225,195 L 225,210" 
                        stroke="#16a34a" 
                        strokeWidth="3" 
                        fill="none" 
                        strokeLinecap="round"/>
                  <circle cx="175" cy="225" r="4" fill="#16a34a"/>
                  <circle cx="200" cy="230" r="4" fill="#16a34a"/>
                  <circle cx="225" cy="225" r="4" fill="#16a34a"/>
                  
                  <path d="M 150,75 L 170,115 L 200,100 L 230,115 L 250,75 L 230,90 L 200,75 L 170,90 Z" 
                        fill="url(#crownGradient)" 
                        stroke="#b45309" 
                        strokeWidth="3"
                        filter="url(#glow)"
                        className="transition-all duration-700 group-hover/logo:-translate-y-2 origin-center"
                        style={{transformBox: 'fill-box'}}/>
                  
                  <circle cx="150" cy="75" r="8" fill="#fbbf24" stroke="#b45309" strokeWidth="2" 
                          className="transition-all duration-700 group-hover/logo:-translate-y-2 group-hover/logo:r-[10]"
                          style={{transformBox: 'fill-box'}}/>
                  <circle cx="200" cy="70" r="10" fill="#fbbf24" stroke="#b45309" strokeWidth="2" 
                          className="transition-all duration-700 group-hover/logo:-translate-y-3 group-hover/logo:r-[12]"
                          style={{transformBox: 'fill-box'}}/>
                  <circle cx="250" cy="75" r="8" fill="#fbbf24" stroke="#b45309" strokeWidth="2" 
                          className="transition-all duration-700 group-hover/logo:-translate-y-2 group-hover/logo:r-[10]"
                          style={{transformBox: 'fill-box'}}/>
                  
                  <path d="M 200,65 L 202,60 L 200,55 L 198,60 Z" fill="#fff" opacity="0.8"
                        className="transition-all duration-700 group-hover/logo:-translate-y-4 group-hover/logo:opacity-100 group-hover/logo:scale-125"
                        style={{transformBox: 'fill-box'}}/>
                  
                  <ellipse cx="180" cy="200" rx="6" ry="8" fill="rgba(255,255,255,0.5)" transform="rotate(-20 180 200)"
                           className="transition-all duration-700 group-hover/logo:opacity-80 group-hover/logo:rx-[8] group-hover/logo:ry-[10]"/>
                  <ellipse cx="160" cy="180" rx="4" ry="5" fill="rgba(255,255,255,0.4)" transform="rotate(-20 160 180)"
                           className="transition-all duration-700 group-hover/logo:opacity-70 group-hover/logo:rx-[6] group-hover/logo:ry-[7]"/>
                </svg>
              </div>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] leading-none transition-all duration-700 group-hover/logo:scale-105 group-hover/logo:drop-shadow-[0_4px_12px_rgba(255,255,255,0.4)]">
                أكاديمية المواهب
              </h1>
              <p className="text-base text-white/90 font-black mt-1.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.2)] transition-all duration-700 group-hover/logo:text-white">اصنع من موهبتك بطل ملعب</p>
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
