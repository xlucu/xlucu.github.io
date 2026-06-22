import { Card, CardContent } from "@/components/ui/card"
import { Star } from "@phosphor-icons/react"

interface Player {
  name: string
  achievement: string
  club: string
}

const players: Player[] = [
  {
    name: "محمد الأحمد",
    achievement: "انتقل للعب في",
    club: "نادي الاتحاد"
  },
  {
    name: "علي العمر",
    achievement: "انتقل للعب في",
    club: "نادي الجيش"
  },
  {
    name: "خالد المحمد",
    achievement: "انتقل للعب في",
    club: "نادي الوحدة"
  }
]

export default function OurStars() {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star size={40} weight="fill" className="text-accent" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              نجومنا
            </h2>
            <Star size={40} weight="fill" className="text-accent" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فخورون بإنجازات خريجينا في الأندية الكبرى
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {players.map((player, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center border-4 border-white/50">
                  <div className="text-6xl">⚽</div>
                </div>
                <div className="absolute top-4 right-4">
                  <Star size={32} weight="fill" className="text-accent" />
                </div>
              </div>
              
              <CardContent className="text-center p-6 space-y-3">
                <h3 className="text-2xl font-black text-foreground">
                  {player.name}
                </h3>
                <p className="text-muted-foreground font-semibold">
                  {player.achievement}
                </p>
                <p className="text-xl font-black text-primary">
                  {player.club}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
