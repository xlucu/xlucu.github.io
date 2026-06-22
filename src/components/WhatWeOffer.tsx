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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            ماذا نقدم
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            خدمات متكاملة لصناعة أبطال المستقبل
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-center space-y-4"
            >
              <div className="flex justify-center">
                {offer.icon}
              </div>
              <h3 className="text-xl font-black text-foreground leading-tight">
                {offer.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {offer.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
