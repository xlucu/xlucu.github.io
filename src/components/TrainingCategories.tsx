import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { WhatsappLogo, Users, Calendar, CurrencyCircleDollar, Sparkle, Baby, UsersFour, UsersThree } from "@phosphor-icons/react"

interface Category {
  title: string
  ageRange: string
  days: string
  price: string
  description: string
  color: string
  featured?: boolean
  image: string
  icon: 'baby' | 'users-four' | 'users-three'
}

const categories: Category[] = [
  {
    title: "فئة البراعم",
    ageRange: "6-10 سنوات",
    days: "3 أيام بالأسبوع",
    price: "40$",
    description: "تدريب أساسي للمهارات الحركية والتحكم بالكرة مع التركيز على المتعة والتطور",
    color: "from-emerald-500 via-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=800&auto=format&fit=crop",
    icon: 'baby'
  },
  {
    title: "فئة الناشئين",
    ageRange: "11-15 سنة",
    days: "4 أيام بالأسبوع",
    price: "50$",
    description: "تطوير المهارات التكتيكية والعمل الجماعي مع التركيز على بناء الشخصية الرياضية",
    color: "from-primary via-secondary to-accent",
    featured: true,
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop",
    icon: 'users-four'
  },
  {
    title: "فئة الشباب",
    ageRange: "16+ سنة",
    days: "4 أيام بالأسبوع",
    price: "60$",
    description: "تدريب احترافي متقدم للوصول للمستوى الاحترافي وتأهيل اللاعبين للأندية",
    color: "from-blue-600 via-indigo-600 to-purple-600",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=800&auto=format&fit=crop",
    icon: 'users-three'
  }
]

export default function TrainingCategories() {
  const openWhatsApp = (category: string) => {
    const phoneNumber = "963982035983"
    const message = encodeURIComponent(`مرحباً، أريد حجز تجربة مجانية لـ ${category}`)
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  const getCategoryIcon = (iconType: 'baby' | 'users-four' | 'users-three') => {
    switch (iconType) {
      case 'baby':
        return <Baby size={72} weight="bold" className="text-white relative z-10" />
      case 'users-four':
        return <UsersFour size={72} weight="bold" className="text-white relative z-10" />
      case 'users-three':
        return <UsersThree size={72} weight="bold" className="text-white relative z-10" />
    }
  }

  return (
    <section id="categories" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2400&auto=format&fit=crop"
          alt="Soccer Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-muted/70 to-background/75"></div>
        <div className="absolute inset-0 field-pattern opacity-15"></div>
      </div>
      
      <div className="absolute top-1/4 right-[15%] w-[40rem] h-[40rem] bg-primary/12 rounded-full blur-[130px] animate-pulse" style={{ animationDuration: '9s' }}></div>
      <div className="absolute bottom-1/4 left-[15%] w-[45rem] h-[45rem] bg-accent/12 rounded-full blur-[135px] animate-pulse" style={{ animationDuration: '11s', animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-28 space-y-10 reveal-up">
          <div className="inline-flex items-center gap-4 px-10 py-5 glass-effect rounded-full shadow-2xl">
            <Users size={32} weight="bold" className="text-primary" />
            <span className="text-xl font-black text-primary">تدريب لكل الأعمار</span>
          </div>
          <h2 className="text-7xl md:text-9xl font-black text-foreground leading-tight drop-shadow-[0_10px_50px_rgba(0,0,0,0.2)]">
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
              className={`glass-card-strong group border-0 overflow-hidden relative ${category.featured ? 'md:scale-110 shadow-[0_30px_90px_rgba(132,71,221,0.4)]' : 'shadow-[0_20px_60px_rgba(0,0,0,0.2)]'}`}
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              {category.featured && (
                <div className="absolute top-6 right-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white px-8 py-4 rounded-full text-lg font-black flex items-center gap-3 shadow-[0_10px_40px_rgba(251,191,36,0.5)] z-20 animate-pulse">
                  <Sparkle size={24} weight="fill" />
                  الأكثر شعبية
                </div>
              )}
              
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${category.color} opacity-70 group-hover:opacity-60 transition-opacity duration-700`}></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className={`w-32 h-32 bg-white/30 backdrop-blur-sm rounded-[2rem] flex items-center justify-center shadow-[0_20px_60px_rgba(0,0,0,0.3)] group-hover:scale-125 group-hover:rotate-12 transition-all duration-700`}>
                    {getCategoryIcon(category.icon)}
                  </div>
                </div>
              </div>
              
              <CardHeader className="text-center space-y-6 pb-8 pt-10 relative">
                <CardTitle className="text-5xl font-black text-foreground leading-tight px-4">
                  {category.title}
                </CardTitle>
                <CardDescription className="text-3xl font-black text-foreground/70 px-4">
                  {category.ageRange}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-8 text-center relative px-10">
                <div className="flex items-center justify-center gap-4 text-muted-foreground">
                  <Calendar size={32} weight="bold" className="text-primary" />
                  <span className="font-black text-2xl text-foreground">{category.days}</span>
                </div>
                
                <div className={`flex flex-wrap items-center justify-center gap-4 py-10 px-8 rounded-[2rem] shadow-2xl group-hover:shadow-[0_30px_100px_rgba(0,0,0,0.25)] transition-all duration-500 relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-100`}></div>
                  <CurrencyCircleDollar size={56} weight="bold" className="text-white relative z-10 drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)]" />
                  <span className="text-7xl font-black text-white relative z-10 drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)] leading-none">
                    {category.price}
                  </span>
                  <span className="text-3xl font-black text-white relative z-10 drop-shadow-[0_6px_20px_rgba(0,0,0,0.8)] whitespace-nowrap">
                    / شهرياً
                  </span>
                </div>
                
                <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent my-8 rounded-full"></div>
                
                <p className="text-foreground/80 leading-relaxed text-xl font-bold min-h-[5rem] flex items-center justify-center px-4">
                  {category.description}
                </p>
              </CardContent>
              
              <CardFooter className="relative p-10 pt-8">
                <Button 
                  onClick={() => openWhatsApp(category.title)}
                  className={`w-full bg-gradient-to-r ${category.color} hover:opacity-90 text-white font-black text-3xl py-10 rounded-[2rem] hover:scale-105 hover:shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition-all duration-700 shadow-2xl relative overflow-hidden group/btn`}
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
