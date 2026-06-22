import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star, Quotes } from "@phosphor-icons/react"

const testimonials = [
  {
    id: 1,
    name: "أحمد العمر",
    role: "والد اللاعب محمد",
    rating: 5,
    text: "ابني محمد تطور بشكل ملحوظ منذ انضمامه للأكاديمية. المدربون محترفون والاهتمام بكل لاعب فردي. أنصح بشدة!",
    initials: "أ"
  },
  {
    id: 2,
    name: "فاطمة الحسن",
    role: "والدة اللاعبة سارة",
    rating: 5,
    text: "أكاديمية رائعة! ابنتي سارة اكتسبت ثقة كبيرة بنفسها وتطورت مهاراتها بشكل واضح. الملاعب ممتازة والجو عائلي.",
    initials: "ف"
  },
  {
    id: 3,
    name: "خالد الأحمد",
    role: "والد اللاعب عمر",
    rating: 5,
    text: "التزام عالي من المدربين والإدارة. ابني عمر الآن يلعب في فريق النادي المحلي بفضل التدريب المميز هنا.",
    initials: "خ"
  },
  {
    id: 4,
    name: "نور الدين",
    role: "والدة اللاعب يوسف",
    rating: 5,
    text: "أفضل قرار اتخذته لابني! التدريب منظم، المواعيد مرنة، والأسعار مناسبة جداً. شكراً للطاقم الرائع.",
    initials: "ن"
  },
  {
    id: 5,
    name: "محمود الشيخ",
    role: "والد اللاعب علي",
    rating: 5,
    text: "الأكاديمية لا تعلم كرة القدم فقط، بل تبني شخصية الطفل وتعلمه الانضباط والعمل الجماعي. تجربة مميزة!",
    initials: "م"
  },
  {
    id: 6,
    name: "ليلى الخطيب",
    role: "والدة اللاعبة ريم",
    rating: 5,
    text: "بيئة آمنة واحترافية. ابنتي ريم تحب كل دقيقة في التدريب. المدربون يهتمون بكل التفاصيل ويشجعون بشكل إيجابي.",
    initials: "ل"
  }
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 field-pattern">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-in">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-l from-primary via-secondary to-accent bg-clip-text text-transparent">
            شهادات الأهالي
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            آراء وتجارب حقيقية من أهالي لاعبينا
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="relative glass-effect border-2 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group overflow-hidden"
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" />
              
              <CardContent className="p-6 relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-14 h-14 border-2 border-primary/20 ring-2 ring-primary/10">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold text-lg">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-foreground mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>

                  <Quotes 
                    size={32} 
                    weight="fill" 
                    className="text-primary/20 group-hover:text-primary/40 transition-colors duration-300"
                  />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={20} 
                      weight="fill" 
                      className="text-accent"
                    />
                  ))}
                </div>

                <p className="text-foreground/80 leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 px-8 py-4 rounded-full border border-primary/20">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div 
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-white flex items-center justify-center text-white font-bold text-sm"
                >
                  {String.fromCharCode(1571 + i)}
                </div>
              ))}
            </div>
            <div className="text-right">
              <p className="font-bold text-lg text-foreground">
                +150 عائلة سعيدة
              </p>
              <p className="text-sm text-muted-foreground">
                انضموا لأكاديميتنا هذا العام
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
