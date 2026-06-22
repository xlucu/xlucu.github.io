import { lazy, Suspense, useEffect, useState } from "react"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import LoadingSpinner from "@/components/LoadingSpinner"
import { Toaster } from "@/components/ui/sonner"

const AchievementsSection = lazy(() => import("@/components/AchievementsSection"))
const TrainingCategories = lazy(() => import("@/components/TrainingCategories"))
const WhatWeOffer = lazy(() => import("@/components/WhatWeOffer"))
const Gallery = lazy(() => import("@/components/Gallery"))
const OurStars = lazy(() => import("@/components/OurStars"))
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"))
const ContactSection = lazy(() => import("@/components/ContactSection"))
const AdminLogin = lazy(() => import("@/components/AdminLogin"))

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    {
      start: 0,
      end: 1000,
      image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2400&auto=format&fit=crop",
      overlay: "from-primary/95 via-secondary/90 to-accent/85"
    },
    {
      start: 1000,
      end: 2500,
      image: "https://images.unsplash.com/photo-1577223625816-7546f73e8b5b?q=80&w=2400&auto=format&fit=crop",
      overlay: "from-accent/92 via-primary/88 to-secondary/90"
    },
    {
      start: 2500,
      end: 4000,
      image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2400&auto=format&fit=crop",
      overlay: "from-secondary/93 via-accent/89 to-primary/91"
    },
    {
      start: 4000,
      end: 5500,
      image: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2400&auto=format&fit=crop",
      overlay: "from-primary/94 via-secondary/90 to-accent/86"
    },
    {
      start: 5500,
      end: 7000,
      image: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2400&auto=format&fit=crop",
      overlay: "from-accent/91 via-primary/87 to-secondary/92"
    },
    {
      start: 7000,
      end: 999999,
      image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2400&auto=format&fit=crop",
      overlay: "from-secondary/92 via-accent/88 to-primary/90"
    }
  ]

  const getCurrentSection = () => {
    return sections.find(section => scrollY >= section.start && scrollY < section.end) || sections[sections.length - 1]
  }

  const currentSection = getCurrentSection()

  return (
    <div className="min-h-screen select-none relative">
      <div 
        className="fixed inset-0 -z-10 transition-opacity duration-1000"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      >
        <img 
          src={currentSection.image}
          alt="Soccer Background"
          className="w-full h-[200vh] object-cover transition-all duration-1000"
        />
        <div className={`absolute inset-0 bg-gradient-to-br ${currentSection.overlay} transition-all duration-1000`}></div>
        <div className="absolute inset-0 field-pattern opacity-20"></div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px]"></div>
        <div className="absolute top-[40%] left-[45%] w-[550px] h-[550px] bg-secondary/15 rounded-full blur-[140px]"></div>
      </div>
      
      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      >
        <div className="absolute top-[60%] right-[25%] w-[450px] h-[450px] bg-primary/15 rounded-full blur-[110px]"></div>
        <div className="absolute bottom-[30%] left-[20%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]"></div>
      </div>

      <Navbar />
      <HeroSection />
      <Suspense fallback={<LoadingSpinner />}>
        <AchievementsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TrainingCategories />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <WhatWeOffer />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Gallery />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <OurStars />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <ContactSection />
      </Suspense>
      <Footer />
      <Suspense fallback={null}>
        <AdminLogin />
      </Suspense>
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App