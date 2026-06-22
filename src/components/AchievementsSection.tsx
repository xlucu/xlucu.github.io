import { useEffect, useRef, useState } from "react"
import { Trophy, Users, Medal, Target } from "@phosphor-icons/react"

interface Achievement {
  icon: React.ElementType
  value: number
  label: string
  suffix?: string
}

const achievements: Achievement[] = [
  { icon: Users, value: 250, label: "طالب مسجل", suffix: "+" },
  { icon: Trophy, value: 15, label: "بطولة محلية" },
  { icon: Medal, value: 8, label: "مدرب معتمد" },
  { icon: Target, value: 95, label: "نسبة الرضا", suffix: "%" }
]

function useCountUp(end: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      const easeOutQuad = (t: number) => t * (2 - t)
      const easedProgress = easeOutQuad(progress)
      
      setCount(Math.floor(easedProgress * end))

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(step)
  }, [end, duration, shouldStart])

  return count
}

function AchievementCard({ achievement, shouldAnimate }: { achievement: Achievement; shouldAnimate: boolean }) {
  const Icon = achievement.icon
  const count = useCountUp(achievement.value, 2500, shouldAnimate)

  return (
    <div className="flex flex-col items-center gap-4 p-8 glass-card rounded-2xl hover:shadow-2xl transition-all duration-500">
      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
        <Icon size={32} weight="bold" className="text-white" />
      </div>
      <div className="text-center">
        <div className="text-5xl font-black text-primary mb-2">
          {count}{achievement.suffix || ""}
        </div>
        <div className="text-lg font-bold text-foreground/80">
          {achievement.label}
        </div>
      </div>
    </div>
  )
}

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [isVisible])

  return (
    <section 
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000&auto=format&fit=crop"
          alt="Soccer Field Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
        <div className="absolute inset-0 field-pattern opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-5xl md:text-6xl font-black text-foreground mb-4">
            إنجازاتنا
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            رحلة من التميز والنجاح مع أفضل المواهب الرياضية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {achievements.map((achievement, index) => (
            <div 
              key={index}
              className="scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AchievementCard 
                achievement={achievement} 
                shouldAnimate={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
