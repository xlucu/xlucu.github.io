import { Button } from "@/components/ui/button"
import { WhatsappLogo, ArrowDown, Users, Clipboard } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { useKV } from '@github/spark/hooks'

type HeroData = {
  title: string
  subtitle: string
  ctaText: string
}

type AchievementsData = {
  students: number
  championships: number
  coaches: number
  satisfaction: number
}

type ContactData = {
  whatsapp: string
  location: string
  schedule: string
  mapUrl: string
}

export default function HeroSection() {
  const [heroData] = useKV<HeroData>('admin-hero', {
    title: 'اصنع من موهبتك بطل ملعب',
    subtitle: 'تدريب كرة قدم احترافي لجميع الأعمار مع مدربين معتمدين',
    ctaText: 'سجل الآن'
  })

  const [achievementsData] = useKV<AchievementsData>('admin-achievements', {
    students: 500,
    championships: 15,
    coaches: 12,
    satisfaction: 98
  })

  const [contactData] = useKV<ContactData>('admin-contact', {
    whatsapp: '0982035983',
    location: 'Maarret el Mesrine, Idlib',
    schedule: '4 العصر لـ 8 بالليل، كل الأيام عدا الجمعة',
    mapUrl: ''
  })

  const [studentsCount, setStudentsCount] = useState(0)
  const [coachesCount, setCoachesCount] = useState(0)

  useEffect(() => {
    const studentsTarget = achievementsData?.students || 287
    const coachesTarget = achievementsData?.coaches || 12
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
  }, [achievementsData])

  const openWhatsApp = () => {
    const phoneNumber = `963${(contactData?.whatsapp || '0982035983').replace(/^0+/, '')}`
    const message = encodeURIComponent("مرحباً، أريد التسجيل في أكاديمية المواهب لكرة القدم")
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent gradient-animate pt-20">
      <div className="absolute inset-0 field-pattern opacity-50"></div>
      
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/25 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-[30rem] h-[30rem] bg-primary/25 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-block px-10 py-5 glass-effect rounded-full shadow-2xl mb-8 scale-in pulse-glow">
            <p className="text-lg font-black text-white/95 flex items-center justify-center gap-3">
              <span className="text-2xl">🏆</span>
              الأكاديمية الرائدة في التدريب الكروي الاحترافي
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-tight tracking-tight drop-shadow-2xl shine-effect">
            {heroData?.title || 'اصنع من موهبتك بطل ملعب'}
          </h1>
          
          <p className="text-2xl md:text-3xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            {heroData?.subtitle || 'تدريب كرة قدم احترافي لجميع الأعمار مع مدربين معتمدين ومنهج تدريبي عالمي'}
          </p>
          
          <div className="pt-10 flex flex-col sm:flex-row gap-8 justify-center items-center">
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="bg-white hover:bg-white/95 text-primary font-black text-2xl px-20 py-10 rounded-3xl shadow-[0_20px_50px_rgba(132,71,221,0.4)] hover:shadow-[0_25px_60px_rgba(132,71,221,0.5)] hover:scale-110 transition-all duration-500 group relative overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <WhatsappLogo size={40} weight="fill" className="ml-4 relative z-10" />
              <span className="relative z-10">{heroData?.ctaText || 'سجل الآن'}</span>
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('categories')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glass-effect text-white font-black text-2xl px-20 py-10 rounded-3xl shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)] hover:scale-110 transition-all duration-500 border-3 border-white/50 hover:border-white/70"
            >
              اكتشف المزيد
            </Button>
          </div>

          <div className="pt-24 grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="glass-effect rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-110 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-500 border-3 border-white/40 group">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-white/30 p-8 rounded-3xl backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                  <Users size={56} weight="bold" className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">
                    {studentsCount}+
                  </div>
                  <div className="text-2xl font-bold text-white/95">
                    طالب مسجل
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-[2rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] hover:scale-110 hover:shadow-[0_25px_60px_rgba(0,0,0,0.2)] transition-all duration-500 border-3 border-white/40 group">
              <div className="flex flex-col items-center gap-6">
                <div className="bg-white/30 p-8 rounded-3xl backdrop-blur-sm group-hover:rotate-12 transition-transform duration-500">
                  <Clipboard size={56} weight="bold" className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-7xl font-black text-white mb-3 drop-shadow-lg">
                    {coachesCount}+
                  </div>
                  <div className="text-2xl font-bold text-white/95">
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
