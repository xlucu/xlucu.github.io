import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Star, Quotes, Plus } from "@phosphor-icons/react"
import { useKV } from "@github/spark/hooks"
import { toast } from "sonner"

const defaultTestimonials = [
  {
    id: "default-1",
    name: "أحمد العمر",
    role: "والد اللاعب محمد",
    rating: 5,
    text: "ابني محمد تطور بشكل ملحوظ منذ انضمامه للأكاديمية. المدربون محترفون والاهتمام بكل لاعب فردي. أنصح بشدة!",
    initials: "أ",
    timestamp: Date.now() - 30 * 24 * 60 * 60 * 1000
  },
  {
    id: "default-2",
    name: "فاطمة الحسن",
    role: "والدة اللاعبة سارة",
    rating: 5,
    text: "أكاديمية رائعة! ابنتي سارة اكتسبت ثقة كبيرة بنفسها وتطورت مهاراتها بشكل واضح. الملاعب ممتازة والجو عائلي.",
    initials: "ف",
    timestamp: Date.now() - 25 * 24 * 60 * 60 * 1000
  },
  {
    id: "default-3",
    name: "خالد الأحمد",
    role: "والد اللاعب عمر",
    rating: 5,
    text: "التزام عالي من المدربين والإدارة. ابني عمر الآن يلعب في فريق النادي المحلي بفضل التدريب المميز هنا.",
    initials: "خ",
    timestamp: Date.now() - 20 * 24 * 60 * 60 * 1000
  },
  {
    id: "default-4",
    name: "نور الدين",
    role: "والدة اللاعب يوسف",
    rating: 5,
    text: "أفضل قرار اتخذته لابني! التدريب منظم، المواعيد مرنة، والأسعار مناسبة جداً. شكراً للطاقم الرائع.",
    initials: "ن",
    timestamp: Date.now() - 15 * 24 * 60 * 60 * 1000
  },
  {
    id: "default-5",
    name: "محمود الشيخ",
    role: "والد اللاعب علي",
    rating: 5,
    text: "الأكاديمية لا تعلم كرة القدم فقط، بل تبني شخصية الطفل وتعلمه الانضباط والعمل الجماعي. تجربة مميزة!",
    initials: "م",
    timestamp: Date.now() - 10 * 24 * 60 * 60 * 1000
  },
  {
    id: "default-6",
    name: "ليلى الخطيب",
    role: "والدة اللاعبة ريم",
    rating: 5,
    text: "بيئة آمنة واحترافية. ابنتي ريم تحب كل دقيقة في التدريب. المدربون يهتمون بكل التفاصيل ويشجعون بشكل إيجابي.",
    initials: "ل",
    timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000
  }
]

interface Testimonial {
  id: string
  name: string
  role: string
  rating: number
  text: string
  initials: string
  timestamp: number
}

export default function TestimonialsSection() {
  const [userTestimonials, setUserTestimonials] = useKV<Testimonial[]>("academy-testimonials", [])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [rating, setRating] = useState(5)
  const [hoveredStar, setHoveredStar] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    text: ""
  })

  const allTestimonials = [...(userTestimonials || []), ...defaultTestimonials].sort((a, b) => b.timestamp - a.timestamp)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.name || !formData.role || !formData.text) {
      toast.error("الرجاء ملء جميع الحقول")
      return
    }

    if (formData.text.length < 10) {
      toast.error("الرجاء كتابة تقييم أطول (10 أحرف على الأقل)")
      return
    }

    const initials = formData.name.charAt(0)
    
    const newTestimonial: Testimonial = {
      id: `user-${Date.now()}`,
      name: formData.name,
      role: formData.role,
      rating,
      text: formData.text,
      initials,
      timestamp: Date.now()
    }

    setUserTestimonials((current) => [newTestimonial, ...(current || [])])
    
    toast.success("شكراً لك! تم إضافة تقييمك بنجاح")
    
    setFormData({ name: "", role: "", text: "" })
    setRating(5)
    setIsDialogOpen(false)
  }

  const handleStarClick = (value: number) => {
    setRating(value)
  }

  const totalFamilies = 150 + (userTestimonials || []).length

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

        <div className="flex justify-center mb-12">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300"
              >
                <Plus size={24} weight="bold" className="ml-2" />
                أضف تقييمك
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-black text-right">أضف تقييمك</DialogTitle>
                <DialogDescription className="text-right">
                  شاركنا رأيك وتجربتك مع أكاديمية المواهب
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-right block">الاسم الكامل</Label>
                  <Input
                    id="name"
                    placeholder="أدخل اسمك"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role" className="text-right block">صفتك</Label>
                  <Input
                    id="role"
                    placeholder="مثال: والد اللاعب أحمد"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="text-right"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-right block">التقييم</Label>
                  <div className="flex gap-2 justify-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleStarClick(star)}
                        onMouseEnter={() => setHoveredStar(star)}
                        onMouseLeave={() => setHoveredStar(0)}
                        className="transition-transform hover:scale-125"
                      >
                        <Star
                          size={36}
                          weight="fill"
                          className={
                            star <= (hoveredStar || rating)
                              ? "text-accent"
                              : "text-muted"
                          }
                        />
                      </button>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground">
                    {rating === 5 ? "ممتاز" : rating === 4 ? "جيد جداً" : rating === 3 ? "جيد" : rating === 2 ? "مقبول" : "ضعيف"}
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="text" className="text-right block">تقييمك</Label>
                  <Textarea
                    id="text"
                    placeholder="شاركنا تجربتك مع الأكاديمية..."
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    className="text-right min-h-[120px]"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-lg py-6"
                >
                  إرسال التقييم
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allTestimonials.map((testimonial, index) => (
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
                  {[...Array(5 - testimonial.rating)].map((_, i) => (
                    <Star 
                      key={`empty-${i}`} 
                      size={20} 
                      weight="fill" 
                      className="text-muted"
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
                +{totalFamilies} عائلة سعيدة
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
