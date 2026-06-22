import { Trophy, Heart, ChartLine, Park } from "@phosphor-icons/react"

interface Offer {
  icon: React.ReactNode
  title: string
  description: string
}

const offers: Offer[] = [
  {
    icon: <Trophy size={48} weight="bold" className="text-primary" />,
    title: "تدريب مهارات + لياقة بدنية",
    description: "برامج تدريبية شاملة تطور المهارات الفنية واللياقة البدنية"
  },
  {
    icon: <Heart size={48} weight="bold" className="text-primary" />,
    title: "مباريات ودية كل أسبوع",
    description: "فرصة للتطبيق العملي والتنافس الشريف مع فرق أخرى"
  },
  {
    icon: <ChartLine size={48} weight="bold" className="text-primary" />,
    title: "تقييم شهري لمستوى اللاعب",
    description: "متابعة دقيقة لتطور اللاعب وتقارير شهرية للأهالي"
  },
  {
    icon: <Park size={48} weight="bold" className="text-primary" />,
    title: "ملعب عشبي طبيعي",
    description: "ملعب بمواصفات عالمية يوفر بيئة تدريب احترافية"
  }
]

export default function WhatWeOffer() {
  return (
    <section id="offers" className="py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20 mb-2">
            <Trophy size={20} weight="bold" className="text-accent" />
            <span className="text-sm font-bold text-accent">خدمات احترافية متكاملة</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            ماذا نقدم
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            خدمات متكاملة لصناعة أبطال المستقبل
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-3 text-center space-y-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform transition-transform">
                  {offer.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-black text-foreground leading-tight relative">
                {offer.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed text-sm relative">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
