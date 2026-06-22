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

  return (
    <div className="min-h-screen select-none relative">
      <div 
        className="fixed inset-0 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <img 
          src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2400&auto=format&fit=crop"
          alt="Soccer Stadium Background"
          className="w-full h-[150vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-secondary/90 to-accent/85"></div>
        <div className="absolute inset-0 field-pattern opacity-20"></div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[130px]"></div>
        <div className="absolute top-[40%] left-[45%] w-[550px] h-[550px] bg-secondary/15 rounded-full blur-[140px]"></div>
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