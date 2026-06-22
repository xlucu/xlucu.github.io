import { Card, CardContent } from "@/components/ui/card"
import { Star, Trophy } from "@phosphor-icons/react"

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
    <section id="stars" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 field-pattern opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Star size={32} weight="fill" className="text-accent animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-black text-foreground">
              نجومنا
            </h2>
            <Star size={32} weight="fill" className="text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            فخورون بإنجازات خريجينا في الأندية الكبرى
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {players.map((player, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-2 hover:border-accent relative"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary"></div>
              
              <div className="relative h-72 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <svg viewBox="0 0 24 24" fill="none" className="w-20 h-20 text-white">
                    <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/>
                  </svg>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <Star size={24} weight="fill" className="text-accent" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="text-center p-6 space-y-3 bg-card">
                <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors">
                  {player.name}
                </h3>
                <p className="text-muted-foreground font-semibold">
                  {player.achievement}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
                  <Trophy size={20} weight="bold" className="text-primary" />
                  <p className="text-lg font-black text-primary">
                    {player.club}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
