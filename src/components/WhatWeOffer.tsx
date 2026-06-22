import { Trophy, Heart, ChartLine, Park, Sparkle } from "@phosphor-icons/react"

interface Offer {
  icon: React.ReactNode
  title: string
  description: string
  gradient: string
}

const offers: Offer[] = [
  {
    icon: <Trophy size={56} weight="bold" className="text-white" />,
    title: "تدريب مهارات + لياقة بدنية",
    description: "برامج تدريبية شاملة تطور المهارات الفنية واللياقة البدنية",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: <Heart size={56} weight="bold" className="text-white" />,
    title: "مباريات ودية كل أسبوع",
    description: "فرصة للتطبيق العملي والتنافس الشريف مع فرق أخرى",
    gradient: "from-rose-500 to-pink-600"
  },
  {
    icon: <ChartLine size={56} weight="bold" className="text-white" />,
    title: "تقييم شهري لمستوى اللاعب",
    description: "متابعة دقيقة لتطور اللاعب وتقارير شهرية للأهالي",
    gradient: "from-primary to-secondary"
  },
  {
    icon: <Park size={56} weight="bold" className="text-white" />,
    title: "ملعب عشبي طبيعي",
    description: "ملعب بمواصفات عالمية يوفر بيئة تدريب احترافية",
    gradient: "from-emerald-500 to-teal-600"
  }
]

export default function WhatWeOffer() {
  return (
    <section id="offers" className="py-32 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-lg">
            <Sparkle size={24} weight="fill" className="text-accent" />
            <span className="text-base font-black text-accent">خدمات احترافية متكاملة</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground">
            ماذا نقدم
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            خدمات متكاملة لصناعة أبطال المستقبل
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 text-center space-y-6 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative">
                <div className={`inline-flex p-6 bg-gradient-to-br ${offer.gradient} rounded-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {offer.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-foreground leading-tight relative">
                {offer.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-base font-medium relative">
                {offer.description}
              </p>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
