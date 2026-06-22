import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsappLogo, Users, Calendar, CurrencyCircleDollar } from "@phosphor-icons/react"

interface Category {
  title: string
  ageRange: string
  days: string
  price: string
  description: string
}

const categories: Category[] = [
  {
    title: "فئة البراعم",
    ageRange: "6-10 سنوات",
    days: "3 أيام بالأسبوع",
    price: "40$ بالشهر",
    description: "تدريب أساسي للمهارات الحركية والتحكم بالكرة"
  },
  {
    title: "فئة الناشئين",
    ageRange: "11-15 سنة",
    days: "4 أيام بالأسبوع",
    price: "50$ بالشهر",
    description: "تطوير المهارات التكتيكية والعمل الجماعي"
  },
  {
    title: "فئة الشباب",
    ageRange: "16+ سنة",
    days: "4 أيام بالأسبوع",
    price: "60$ بالشهر",
    description: "تدريب احترافي متقدم للوصول للمستوى الاحترافي"
  }
]

export default function TrainingCategories() {
  const openWhatsApp = (category: string) => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent(`مرحباً، أريد حجز تجربة مجانية لـ ${category}`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="categories" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-2">
            <Users size={20} weight="bold" className="text-primary" />
            <span className="text-sm font-bold text-primary">تدريب لكل الأعمار</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            الفئات التدريبية
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            اختر الفئة المناسبة لعمر اللاعب وابدأ رحلة الاحتراف
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <Card 
              key={index} 
              className="group border-2 hover:border-primary hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 bg-card overflow-hidden relative"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <CardHeader className="text-center space-y-3 pb-6 relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Users size={40} weight="bold" className="text-white" />
                </div>
                <CardTitle className="text-2xl font-black">{category.title}</CardTitle>
                <CardDescription className="text-lg font-semibold text-foreground/70">
                  {category.ageRange}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4 text-center relative">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Calendar size={20} weight="bold" />
                  <span className="font-semibold">{category.days}</span>
                </div>
                
                <div className="flex items-center justify-center gap-2 py-3">
                  <CurrencyCircleDollar size={28} weight="bold" className="text-primary" />
                  <span className="text-3xl font-black text-primary">{category.price}</span>
                </div>
                
                <div className="h-px bg-border my-4"></div>
                
                <p className="text-muted-foreground leading-relaxed min-h-[3rem]">
                  {category.description}
                </p>
              </CardContent>
              
              <CardFooter className="relative">
                <Button 
                  onClick={() => openWhatsApp(category.title)}
                  className="w-full bg-primary hover:bg-primary/90 font-bold text-lg py-6 rounded-lg hover:scale-105 transition-transform group-hover:shadow-lg"
                >
                  <WhatsappLogo size={24} weight="fill" className="ml-2" />
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
