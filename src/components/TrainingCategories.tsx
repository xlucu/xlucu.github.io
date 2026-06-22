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
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "فئة الناشئين",
    ageRange: "11-15 سنة",
    days: "4 أيام بالأسبوع",
    price: "50$ بالشهر",
    description: "تطوير المهارات التكتيكية والعمل الجماعي",
    color: "from-primary to-secondary",
    featured: true
  },
  {
    title: "فئة الشباب",
    ageRange: "16+ سنة",
    days: "4 أيام بالأسبوع",
    price: "60$ بالشهر",
    description: "تدريب احترافي متقدم للوصول للمستوى الاحترافي",
    color: "from-accent to-pink-500"
  }
]

export default function TrainingCategories() {
  const openWhatsApp = (category: string) => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent(`مرحباً، أريد حجز تجربة مجانية لـ ${category}`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="categories" className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-effect rounded-full shadow-lg">
            <Users size={24} weight="bold" className="text-primary" />
            <span className="text-base font-black text-primary">تدريب لكل الأعمار</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-foreground">
            الفئات التدريبية
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            اختر الفئة المناسبة لعمر اللاعب وابدأ رحلة الاحتراف
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className={`group border-2 hover:border-transparent hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 bg-white overflow-hidden relative ${category.featured ? 'md:scale-110 shadow-xl' : ''}`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {category.featured && (
                <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-black flex items-center gap-2 shadow-lg z-10">
                  <Sparkle size={16} weight="fill" />
                  الأكثر شعبية
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <CardHeader className="text-center space-y-4 pb-8 pt-8 relative">
                <div className={`w-24 h-24 bg-gradient-to-br ${category.color} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500`}>
                  <Users size={48} weight="bold" className="text-white" />
                </div>
                <CardTitle className="text-3xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-xl font-bold text-foreground/60">
                  {category.ageRange}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6 text-center relative px-8">
                <div className="flex items-center justify-center gap-3 text-muted-foreground">
                  <Calendar size={24} weight="bold" className="text-primary" />
                  <span className="font-bold text-lg">{category.days}</span>
                </div>
                
                <div className="flex items-center justify-center gap-3 py-4 px-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl">
                  <CurrencyCircleDollar size={36} weight="bold" className="text-primary" />
                  <span className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.price}
                  </span>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-6"></div>
                
                <p className="text-muted-foreground leading-relaxed text-lg font-medium min-h-[4rem]">
                  {category.description}
                </p>
              </CardContent>
              
              <CardFooter className="relative p-8 pt-6">
                <Button 
                  onClick={() => openWhatsApp(category.title)}
                  className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-black text-xl py-7 rounded-2xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}
                >
                  <WhatsappLogo size={28} weight="fill" className="ml-3" />
                  احجز تجربة مجانية
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
