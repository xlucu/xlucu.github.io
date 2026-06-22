import { Trophy, Heart, ChartLine, Park, Sparkle } from "@phosphor-icons/react"

interface Offer {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

const offers: Offer[] = [
  {
    icon: <Trophy size={64} weight="bold" className="text-white" />,
    title: "تدريب مهارات + لياقة بدنية",
    description: "برامج تدريبية شاملة تطور المهارات الفنية واللياقة البدنية",
    gradient: "from-blue-500 via-indigo-500 to-purple-600"
  },
  {
    icon: <Heart size={64} weight="bold" className="text-white" />,
    title: "مباريات ودية كل أسبوع",
    description: "فرصة للتطبيق العملي والتنافس الشريف مع فرق أخرى",
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600"
  },
  {
    icon: <ChartLine size={64} weight="bold" className="text-white" />,
    title: "تقييم شهري لمستوى اللاعب",
    description: "متابعة دقيقة لتطور اللاعب وتقارير شهرية للأهالي",
    gradient: "from-primary via-secondary to-accent"
  },
  {
    icon: <Park size={64} weight="bold" className="text-white" />,
    title: "ملعب عشبي طبيعي",
    description: "ملعب بمواصفات عالمية يوفر بيئة تدريب احترافية",
    gradient: "from-emerald-500 via-teal-500 to-cyan-600"
  }
]

export default function WhatWeOffer() {
  return (
    <section id="offers" className="py-40 bg-gradient-to-br from-background via-muted/40 to-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-8">
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-effect rounded-full shadow-xl">
            <Sparkle size={28} weight="fill" className="text-accent" />
            <span className="text-lg font-black text-accent">خدمات احترافية متكاملة</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-foreground">
            ماذا نقدم
          </h2>
          <p className="text-3xl text-muted-foreground max-w-4xl mx-auto font-bold leading-relaxed">
            خدمات متكاملة لصناعة أبطال المستقبل
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="group relative bg-white p-10 rounded-[2rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-8 text-center space-y-8 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative">
                <div className={`inline-flex p-8 bg-gradient-to-br ${offer.gradient} rounded-[1.5rem] shadow-2xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-700"></div>
                  <div className="relative z-10">{offer.icon}</div>
                </div>
              </div>
              
              <h3 className="text-2xl font-black text-foreground leading-tight relative">
                {offer.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-lg font-bold relative">
                {offer.description}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
