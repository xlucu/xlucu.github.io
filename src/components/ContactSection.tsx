import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Clock, WhatsappLogo, Users, CalendarBlank } from "@phosphor-icons/react"

export default function ContactSection() {
  const [playerName, setPlayerName] = useState("")
  const [playerAge, setPlayerAge] = useState("")
  const [parentPhone, setParentPhone] = useState("")
  const [ageCategory, setAgeCategory] = useState("")
  const [preferredTime, setPreferredTime] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!playerName || !playerAge || !parentPhone || !ageCategory || !preferredTime) {
      return
    }

    const phoneNumber = "963982035983"
    const message = encodeURIComponent(
      `مرحباً، أريد التسجيل في أكاديمية المواهب\n\nاسم اللاعب: ${playerName}\nالعمر: ${playerAge}\nالفئة العمرية: ${ageCategory}\nالوقت المفضل: ${preferredTime}\nرقم ولي الأمر: ${parentPhone}`
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section id="contact" className="py-48 relative overflow-hidden">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2400&auto=format&fit=crop"
          alt="Soccer Background"
          className="w-full h-full object-cover opacity-13"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/96 via-muted/92 to-background/96"></div>
        <div className="absolute inset-0 field-pattern opacity-15"></div>
      </div>
      <div className="absolute top-0 left-1/3 w-[42rem] h-[42rem] bg-accent/15 rounded-full blur-[135px]"></div>
      <div className="absolute bottom-0 right-1/3 w-[42rem] h-[42rem] bg-primary/15 rounded-full blur-[135px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-2">
            <WhatsappLogo size={20} weight="fill" className="text-primary" />
            <span className="text-sm font-bold text-primary">ابدأ رحلتك معنا</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ابدأ رحلة ابنك الكروية اليوم
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="glass-card-strong border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-black">معلومات التواصل</CardTitle>
              <CardDescription className="text-lg">تواصل معنا عبر واتساب أو قم بزيارتنا</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 rounded-xl transition-all duration-300 hover:scale-105 border border-primary/10">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <WhatsappLogo size={28} weight="fill" className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h4 className="font-bold text-lg">رقم واتساب</h4>
                      <div className="px-3 py-1 bg-primary/20 rounded-full">
                        <span className="text-sm font-bold text-primary">الكابتن فراس حجو</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground font-semibold" dir="ltr">+963 982 035 983</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/15 rounded-xl transition-all duration-300 hover:scale-105 border border-accent/10">
                  <div className="p-3 bg-accent/20 rounded-lg group-hover:bg-accent/30 transition-colors">
                    <MapPin size={28} weight="fill" className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">الموقع</h4>
                    <p className="text-muted-foreground">معرة مصرين، إدلب</p>
                  </div>
                </div>

                <div className="group flex items-start gap-4 p-5 bg-gradient-to-br from-primary/5 to-accent/10 hover:from-primary/10 hover:to-accent/15 rounded-xl transition-all duration-300 hover:scale-105 border border-primary/10">
                  <div className="p-3 bg-primary/20 rounded-lg group-hover:bg-primary/30 transition-colors">
                    <Clock size={28} weight="fill" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">مواعيد التدريب</h4>
                    <p className="text-muted-foreground">4 العصر - 8 المساء</p>
                    <p className="text-muted-foreground">كل الأيام عدا الجمعة</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border-2 border-border h-64 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102841.24!2d36.65!3d35.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzXCsDU3JzAwLjAiTiAzNsKwMzknMDAuMCJF!5e0!3m2!1sar!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="موقع أكاديمية المواهب"
                ></iframe>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card-strong border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-black">سجل الآن</CardTitle>
              <CardDescription className="text-lg">أرسل بياناتك وسنتواصل معك فوراً</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="player-name" className="text-lg font-bold">اسم اللاعب</Label>
                  <Input
                    id="player-name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="أدخل اسم اللاعب"
                    required
                    className="text-lg py-6 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="player-age" className="text-lg font-bold">عمر اللاعب</Label>
                  <Input
                    id="player-age"
                    type="number"
                    value={playerAge}
                    onChange={(e) => setPlayerAge(e.target.value)}
                    placeholder="أدخل العمر"
                    required
                    min="6"
                    max="99"
                    className="text-lg py-6 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="age-category" className="text-lg font-bold flex items-center gap-2">
                    <Users size={20} weight="fill" className="text-primary" />
                    الفئة العمرية
                  </Label>
                  <Select value={ageCategory} onValueChange={setAgeCategory} required>
                    <SelectTrigger id="age-category" className="text-lg py-6 border-2 focus:border-primary transition-colors">
                      <SelectValue placeholder="اختر الفئة العمرية" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="البراعم (6-10 سنوات)" className="text-lg py-3">
                        <div className="flex flex-col items-start">
                          <span className="font-bold">البراعم</span>
                          <span className="text-sm text-muted-foreground">6-10 سنوات</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="الناشئين (11-15 سنة)" className="text-lg py-3">
                        <div className="flex flex-col items-start">
                          <span className="font-bold">الناشئين</span>
                          <span className="text-sm text-muted-foreground">11-15 سنة</span>
                        </div>
                      </SelectItem>
                      <SelectItem value="الشباب (16+ سنة)" className="text-lg py-3">
                        <div className="flex flex-col items-start">
                          <span className="font-bold">الشباب</span>
                          <span className="text-sm text-muted-foreground">16+ سنة</span>
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="preferred-time" className="text-lg font-bold flex items-center gap-2">
                    <CalendarBlank size={20} weight="fill" className="text-accent" />
                    الوقت المفضل للتدريب
                  </Label>
                  <Select value={preferredTime} onValueChange={setPreferredTime} required>
                    <SelectTrigger id="preferred-time" className="text-lg py-6 border-2 focus:border-primary transition-colors">
                      <SelectValue placeholder="اختر الوقت المفضل" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="4:00 - 5:30 عصراً" className="text-lg py-2">4:00 - 5:30 عصراً</SelectItem>
                      <SelectItem value="5:30 - 7:00 مساءً" className="text-lg py-2">5:30 - 7:00 مساءً</SelectItem>
                      <SelectItem value="7:00 - 8:00 مساءً" className="text-lg py-2">7:00 - 8:00 مساءً</SelectItem>
                      <SelectItem value="أي وقت متاح" className="text-lg py-2">أي وقت متاح</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="parent-phone" className="text-lg font-bold">رقم ولي الأمر</Label>
                  <Input
                    id="parent-phone"
                    type="tel"
                    value={parentPhone}
                    onChange={(e) => setParentPhone(e.target.value)}
                    placeholder="أدخل رقم الهاتف"
                    required
                    className="text-lg py-6 border-2 focus:border-primary transition-colors"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary font-bold text-xl py-7 rounded-xl hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  <WhatsappLogo size={28} weight="fill" className="ml-2" />
                  أرسل عبر واتساب
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-foreground/30 via-foreground/10 to-transparent pointer-events-none"></div>
    </section>
  )
}
