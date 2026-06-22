import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsappLogo, Users, Calendar, CurrencyCircleDollar, Sparkle } from "@phosphor-icons/react"

interface Category {
  title: string
  ageRange: string
  days: string
  price: string
  description: string
  color: string
  featured?: boolean
}

const categories: Category[] = [
  {
    title: "فئة البراعم",
    ageRange: "6-10 سنوات",
    days: "3 أيام بالأسبوع",
    price: "40$ بالشهر",
    description: "تدريب أساسي للمهارات الحركية والتحكم بالكرة",
    color: "from-purple-500 via-purple-600 to-indigo-600"
  },
  {
    title: "فئة الناشئين",
    ageRange: "11-15 سنة",
    days: "4 أيام بالأسبوع",
    price: "50$ بالشهر",
    description: "تطوير المهارات التكتيكية والعمل الجماعي",
    color: "from-primary via-secondary to-accent",
    featured: true
  },
  {
    title: "فئة الشباب",
    ageRange: "16+ سنة",
    days: "4 أيام بالأسبوع",
    price: "60$ بالشهر",
    description: "تدريب احترافي متقدم للوصول للمستوى الاحترافي",
    color: "from-pink-500 via-rose-500 to-fuchsia-600"
  }
]

export default function TrainingCategories() {
  const openWhatsApp = (category: string) => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent(`مرحباً، أريد حجز تجربة مجانية لـ ${category}`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="categories" className="py-48 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-[35rem] h-[35rem] bg-primary/15 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-20 right-10 w-[35rem] h-[35rem] bg-accent/15 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-28 space-y-10 reveal-up">
          <div className="inline-flex items-center gap-4 px-10 py-5 glass-effect rounded-full shadow-2xl">
            <Users size={32} weight="bold" className="text-primary" />
            <span className="text-xl font-black text-primary">تدريب لكل الأعمار</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black text-foreground leading-tight">
            الفئات التدريبية
          </h2>
          <p className="text-3xl md:text-4xl text-muted-foreground max-w-4xl mx-auto font-bold leading-relaxed">
            اختر الفئة المناسبة لعمر اللاعب وابدأ رحلة الاحتراف
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-14 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`group border-0 hover:border-transparent shadow-[0_15px_50px_rgba(0,0,0,0.1)] hover:shadow-[0_25px_80px_rgba(0,0,0,0.18)] transition-all duration-700 hover:-translate-y-8 bg-white overflow-hidden relative hover-lift ${category.featured ? 'md:scale-110 shadow-[0_25px_70px_rgba(132,71,221,0.15)]' : ''}`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {category.featured && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-black flex items-center gap-3 shadow-[0_10px_40px_rgba(251,191,36,0.5)] z-10 pulse-glow">
                  <Sparkle size={24} weight="fill" />
                  الأكثر شعبية
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 transition-all duration-700`}></div>
              
              <CardHeader className="text-center space-y-8 pb-12 pt-12 relative">
                <div className={`w-40 h-40 bg-gradient-to-br ${category.color} rounded-[2.5rem] flex items-center justify-center mx-auto shadow-[0_25px_70px_rgba(0,0,0,0.25)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-700"></div>
                  <Users size={80} weight="bold" className="text-white relative z-10" />
                </div>
                <CardTitle className="text-5xl font-black bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent leading-tight">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-3xl font-black text-foreground/70">
                  {category.ageRange}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-10 text-center relative px-12">
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <Calendar size={32} weight="bold" className="text-primary" />
                  <span className="font-black text-2xl">{category.days}</span>
                </div>
                
                <div className={`flex items-center justify-center gap-5 py-8 px-10 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all duration-500`}>
                  <CurrencyCircleDollar size={52} weight="bold" className="text-white" />
                  <span className={`text-6xl font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.price}
                  </span>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-transparent via-border to-transparent my-10 rounded-full"></div>
                
                <p className="text-muted-foreground leading-relaxed text-2xl font-bold min-h-[6rem] flex items-center justify-center">
                  {category.description}
                </p>
              </CardContent>
              
              <CardFooter className="relative p-12 pt-10">
                <Button 
                  onClick={() => openWhatsApp(category.title)}
                  className={`w-full bg-gradient-to-r ${category.color} hover:opacity-95 text-white font-black text-3xl py-10 rounded-[2rem] hover:scale-105 hover:shadow-[0_25px_70px_rgba(0,0,0,0.35)] transition-all duration-700 shadow-2xl relative overflow-hidden group/btn`}
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <WhatsappLogo size={40} weight="fill" className="ml-4 relative z-10" />
                  <span className="relative z-10">احجز تجربة مجانية</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
