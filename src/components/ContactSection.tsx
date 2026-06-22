import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, WhatsappLogo } from "@phosphor-icons/react"

export default function ContactSection() {
  const [playerName, setPlayerName] = useState("")
  const [playerAge, setPlayerAge] = useState("")
  const [parentPhone, setParentPhone] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!playerName || !playerAge || !parentPhone) {
      return
    }

    const phoneNumber = "963982035983"
    const message = encodeURIComponent(
      `مرحباً، أريد التسجيل في أكاديمية المواهب\n\nاسم اللاعب: ${playerName}\nالعمر: ${playerAge}\nرقم ولي الأمر: ${parentPhone}`
    )
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-foreground">
            تواصل معنا
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            ابدأ رحلة ابنك الكروية اليوم
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-black">معلومات التواصل</CardTitle>
              <CardDescription className="text-lg">تواصل معنا عبر واتساب أو قم بزيارتنا</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <WhatsappLogo size={32} weight="fill" className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">رقم واتساب</h4>
                    <p className="text-muted-foreground font-semibold" dir="ltr">+963 982 035 983</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <MapPin size={32} weight="fill" className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">الموقع</h4>
                    <p className="text-muted-foreground">معرة مصرين، إدلب</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted/50 rounded-lg">
                  <Clock size={32} weight="fill" className="text-primary flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg mb-1">مواعيد التدريب</h4>
                    <p className="text-muted-foreground">4 العصر - 8 المساء</p>
                    <p className="text-muted-foreground">كل الأيام عدا الجمعة</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg overflow-hidden border-2 h-64">
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

          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl font-black">سجل الآن</CardTitle>
              <CardDescription className="text-lg">أرسل بياناتك وسنتواصل معك فوراً</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="player-name" className="text-lg font-bold">اسم اللاعب</Label>
                  <Input
                    id="player-name"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    placeholder="أدخل اسم اللاعب"
                    required
                    className="text-lg py-6"
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
                    className="text-lg py-6"
                  />
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
                    className="text-lg py-6"
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 font-bold text-xl py-7 rounded-lg hover:scale-105 transition-transform"
                >
                  <WhatsappLogo size={28} weight="fill" className="ml-2" />
                  أرسل عبر واتساب
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
