import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Trophy, Sparkle } from "@phosphor-icons/react"
import LazyImage from "@/components/LazyImage"

interface Player {
  name: string
  achievement: string
  club: string
  avatar: string
  initials: string
}

const players: Player[] = [
  {
    name: "محمد الأحمد",
    achievement: "انتقل للعب في",
    club: "نادي الاتحاد",
    avatar: "https://i.pravatar.cc/300?img=12",
    initials: "م.أ"
  },
  {
    name: "علي العمر",
    achievement: "انتقل للعب في",
    club: "نادي الجيش",
    avatar: "https://i.pravatar.cc/300?img=33",
    initials: "ع.ع"
  },
  {
    name: "خالد المحمد",
    achievement: "انتقل للعب في",
    club: "نادي الوحدة",
    avatar: "https://i.pravatar.cc/300?img=52",
    initials: "خ.م"
  }
]

export default function OurStars() {
  return (
    <section id="stars" className="py-32 bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
      <div className="absolute inset-0 field-pattern opacity-10"></div>
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 space-y-6">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Star size={40} weight="fill" className="text-yellow-500 animate-pulse" />
            <Star size={48} weight="fill" className="text-yellow-400" />
            <Star size={40} weight="fill" className="text-yellow-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
            نجومنا
          </h2>
          <p className="text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            فخورون بإنجازات خريجينا في الأندية الكبرى
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {players.map((player, index) => (
            <Card 
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-6 border-2 hover:border-transparent bg-white relative"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400"></div>
              
              <div className="relative h-80 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-500/10 group-hover:scale-110 transition-transform duration-500"></div>
                
                <div className="absolute top-6 right-6 bg-gradient-to-br from-yellow-400 to-yellow-500 p-3 rounded-full shadow-xl animate-pulse">
                  <Sparkle size={24} weight="fill" className="text-white" />
                </div>
                
                <Avatar className="relative w-48 h-48 border-4 border-white shadow-2xl group-hover:scale-110 transition-transform duration-500 ring-8 ring-yellow-400/20">
                  <AvatarImage src={player.avatar} alt={player.name} className="object-cover" />
                  <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-amber-500 text-white text-4xl font-black">
                    {player.initials}
                  </AvatarFallback>
                </Avatar>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <CardContent className="text-center p-8 space-y-4 bg-white">
                <h3 className="text-3xl font-black bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-amber-600 transition-all">
                  {player.name}
                </h3>
                <p className="text-muted-foreground font-bold text-lg">
                  {player.achievement}
                </p>
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl group-hover:from-yellow-100 group-hover:to-amber-100 transition-all">
                  <Trophy size={24} weight="bold" className="text-primary group-hover:text-yellow-600 transition-colors" />
                  <p className="text-xl font-black text-primary group-hover:text-yellow-700 transition-colors">
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
