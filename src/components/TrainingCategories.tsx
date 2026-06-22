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
    <section id="categories" className="py-40 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-[30rem] h-[30rem] bg-primary/15 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-20 right-10 w-[30rem] h-[30rem] bg-accent/15 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center gap-4 px-8 py-4 glass-effect rounded-full shadow-xl">
            <Users size={28} weight="bold" className="text-primary" />
            <span className="text-lg font-black text-primary">تدريب لكل الأعمار</span>
          </div>
          <h2 className="text-6xl md:text-8xl font-black text-foreground">
            الفئات التدريبية
          </h2>
          <p className="text-3xl text-muted-foreground max-w-4xl mx-auto font-bold leading-relaxed">
            اختر الفئة المناسبة لعمر اللاعب وابدأ رحلة الاحتراف
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`group border-0 hover:border-transparent shadow-[0_10px_40px_rgba(0,0,0,0.08)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.15)] transition-all duration-700 hover:-translate-y-6 bg-white overflow-hidden relative ${category.featured ? 'md:scale-110 shadow-[0_20px_50px_rgba(0,0,0,0.12)]' : ''}`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {category.featured && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white px-6 py-3 rounded-full text-base font-black flex items-center gap-3 shadow-2xl z-10 pulse-glow">
                  <Sparkle size={20} weight="fill" />
                  الأكثر شعبية
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-all duration-700`}></div>
              
              <CardHeader className="text-center space-y-6 pb-10 pt-10 relative">
                <div className={`w-32 h-32 bg-gradient-to-br ${category.color} rounded-[2rem] flex items-center justify-center mx-auto shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-700 relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-white/30 transition-all duration-700"></div>
                  <Users size={64} weight="bold" className="text-white relative z-10" />
                </div>
                <CardTitle className="text-4xl font-black bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-2xl font-black text-foreground/70">
                  {category.ageRange}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 text-center relative px-10">
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <Calendar size={28} weight="bold" className="text-primary" />
                  <span className="font-black text-xl">{category.days}</span>
                </div>
                
                <div className={`flex items-center justify-center gap-4 py-6 px-8 bg-gradient-to-r ${category.color} bg-opacity-10 rounded-[1.5rem] shadow-lg group-hover:shadow-2xl transition-all duration-500`}>
                  <CurrencyCircleDollar size={44} weight="bold" className="text-white" />
                  <span className={`text-5xl font-black bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.price}
                  </span>
                </div>
                
                <div className="h-1 bg-gradient-to-r from-transparent via-border to-transparent my-8 rounded-full"></div>
                
                <p className="text-muted-foreground leading-relaxed text-xl font-bold min-h-[5rem] flex items-center justify-center">
                  {category.description}
                </p>
              </CardContent>
              
              <CardFooter className="relative p-10 pt-8">
                <Button 
                  onClick={() => openWhatsApp(category.title)}
                  className={`w-full bg-gradient-to-r ${category.color} hover:opacity-95 text-white font-black text-2xl py-9 rounded-[1.5rem] hover:scale-105 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 shadow-2xl relative overflow-hidden group/btn`}
                >
                  <span className="absolute inset-0 bg-white/20 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                  <WhatsappLogo size={32} weight="fill" className="ml-4 relative z-10" />
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
