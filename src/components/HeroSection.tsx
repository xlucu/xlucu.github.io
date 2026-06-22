import { Button } from "@/components/ui/button"
import { WhatsappLogo } from "@phosphor-icons/react"

export default function HeroSection() {
  const openWhatsApp = () => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent("مرحباً، أريد التسجيل في أكاديمية المواهب لكرة القدم")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70 pt-20">
      <div className="absolute inset-0 field-pattern opacity-50"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <p className="text-sm font-bold text-white/90">🏆 الأكاديمية الرائدة في التدريب الكروي</p>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
            اصنع من موهبتك
            <span className="block text-accent mt-2">بطل ملعب</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-semibold text-white/95 max-w-2xl mx-auto leading-relaxed">
            تدريب كرة قدم احترافي لجميع الأعمار مع مدربين معتمدين
          </p>
          
          <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="bg-accent hover:bg-accent/90 text-foreground font-bold text-xl px-12 py-7 rounded-xl shadow-2xl hover:scale-105 transition-all duration-200 hover:shadow-accent/50"
            >
              <WhatsappLogo size={32} weight="fill" className="ml-3" />
              سجل الآن
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('categories')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-xl px-12 py-7 rounded-xl shadow-xl hover:scale-105 transition-all duration-200"
            >
              اكتشف المزيد
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </section>
  )
}
