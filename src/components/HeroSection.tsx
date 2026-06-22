import { Button } from "@/components/ui/button"
import { WhatsappLogo, ArrowDown, Users, Clipboard } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [studentsCount, setStudentsCount] = useState(0)
  const [coachesCount, setCoachesCount] = useState(0)

  useEffect(() => {
    const studentsTarget = 287
    const coachesTarget = 12
    const duration = 2000
    const steps = 60

    const studentsIncrement = studentsTarget / steps
    const coachesIncrement = coachesTarget / steps

    let currentStep = 0

    const interval = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setStudentsCount(Math.floor(studentsIncrement * currentStep))
        setCoachesCount(Math.floor(coachesIncrement * currentStep))
      } else {
        setStudentsCount(studentsTarget)
        setCoachesCount(coachesTarget)
        clearInterval(interval)
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [])

  const openWhatsApp = () => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent("مرحباً، أريد التسجيل في أكاديمية المواهب لكرة القدم")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent pt-20">
      <div className="absolute inset-0 field-pattern opacity-60"></div>
      
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-block px-8 py-4 glass-effect rounded-full shadow-2xl mb-6 scale-in">
            <p className="text-base font-bold text-white/95 flex items-center justify-center gap-2">
              🏆 الأكاديمية الرائدة في التدريب الكروي الاحترافي
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-tight tracking-tight drop-shadow-2xl">
            اصنع من موهبتك
            <span className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent mt-4 float-animation">
              بطل ملعب
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            تدريب كرة قدم احترافي لجميع الأعمار مع مدربين معتمدين ومنهج تدريبي عالمي
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="bg-white hover:bg-white/90 text-primary font-black text-2xl px-16 py-8 rounded-2xl shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-white/30"
            >
              <WhatsappLogo size={36} weight="fill" className="ml-3" />
              سجل الآن
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('categories')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glass-effect text-white font-black text-2xl px-16 py-8 rounded-2xl shadow-xl hover:scale-110 transition-all duration-300 border-2 border-white/40"
            >
              اكتشف المزيد
            </Button>
          </div>

          <div className="pt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="glass-effect rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                  <Users size={48} weight="bold" className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-2">
                    {studentsCount}+
                  </div>
                  <div className="text-xl font-bold text-white/90">
                    طالب مسجل
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/30">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                  <Clipboard size={48} weight="bold" className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-6xl font-black text-white mb-2">
                    {coachesCount}+
                  </div>
                  <div className="text-xl font-bold text-white/90">
                    مدرب معتمد
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 flex justify-center">
            <div className="animate-bounce">
              <ArrowDown size={40} weight="bold" className="text-white/70" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
