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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center text-white space-y-12">
          <div className="inline-block px-12 py-6 glass-card rounded-full shadow-[0_20px_80px_rgba(132,71,221,0.3)] mb-10 scale-in animate-in">
            <p className="text-xl font-black text-white/95 flex items-center justify-center gap-3">
              <span className="text-3xl animate-bounce">🏆</span>
              الأكاديمية الرائدة في التدريب الكروي الاحترافي
            </p>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[8rem] font-black leading-[1.1] tracking-tight drop-shadow-[0_10px_50px_rgba(0,0,0,0.5)] pb-4">
            <span className="bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent">
              {heroData?.title || 'اصنع من موهبتك بطل ملعب'}
            </span>
          </h1>
          
          <p className="text-2xl md:text-4xl font-bold text-white/95 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_4px_20px_rgba(0,0,0,0.3)]">
            {heroData?.subtitle || 'تدريب كرة قدم احترافي لجميع الأعمار مع مدربين معتمدين ومنهج تدريبي عالمي'}
          </p>
          
          <div className="pt-12 flex flex-col sm:flex-row gap-10 justify-center items-center">
            <Button 
              size="lg"
              onClick={openWhatsApp}
              className="bg-white hover:bg-white/95 text-primary font-black text-3xl px-24 py-12 rounded-[2rem] shadow-[0_25px_80px_rgba(255,255,255,0.4)] hover:shadow-[0_30px_100px_rgba(255,255,255,0.5)] hover:scale-110 transition-all duration-700 group relative overflow-hidden border-4 border-white/50"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <WhatsappLogo size={48} weight="fill" className="ml-4 relative z-10 group-hover:rotate-12 transition-transform duration-500" />
              <span className="relative z-10">{heroData?.ctaText || 'سجل الآن'}</span>
            </Button>
            <Button 
              size="lg"
              onClick={() => {
                const element = document.getElementById('categories')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="glass-card text-white font-black text-3xl px-24 py-12 rounded-[2rem] shadow-[0_20px_80px_rgba(0,0,0,0.3)] hover:shadow-[0_25px_100px_rgba(255,255,255,0.4)] hover:scale-110 transition-all duration-700 border-4 border-white/50 hover:border-white/80 hover-lift"
            >
              اكتشف المزيد
            </Button>
          </div>

          <div className="pt-28 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="glass-card rounded-[2.5rem] p-12 shadow-[0_25px_80px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_30px_100px_rgba(132,71,221,0.4)] transition-all duration-700 border-4 border-white/50 group">
              <div className="flex flex-col items-center gap-8">
                <div className="bg-white/40 p-10 rounded-[2rem] backdrop-blur-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                  <Users size={72} weight="bold" className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-8xl font-black text-white mb-4 drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    {studentsCount}+
                  </div>
                  <div className="text-3xl font-bold text-white/95">
                    طالب مسجل
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-[2.5rem] p-12 shadow-[0_25px_80px_rgba(0,0,0,0.2)] hover:scale-110 hover:shadow-[0_30px_100px_rgba(236,72,153,0.4)] transition-all duration-700 border-4 border-white/50 group">
              <div className="flex flex-col items-center gap-8">
                <div className="bg-white/40 p-10 rounded-[2rem] backdrop-blur-sm group-hover:rotate-12 group-hover:scale-110 transition-all duration-700">
                  <Clipboard size={72} weight="bold" className="text-white" />
                </div>
                <div className="text-center">
                  <div className="text-8xl font-black text-white mb-4 drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                    {coachesCount}+
                  </div>
                  <div className="text-3xl font-bold text-white/95">
                    مدرب معتمد
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 flex justify-center">
            <div className="animate-bounce">
              <ArrowDown size={56} weight="bold" className="text-white/80" />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-background/10 via-transparent to-transparent pointer-events-none"></div>
    </section>
  )
}
