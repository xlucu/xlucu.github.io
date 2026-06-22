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
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const imageUrls = backgroundImages.map(bg => bg.url)
    let loadedCount = 0
    const totalImages = imageUrls.length

    const preloadImage = (url: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image()
        img.onload = () => resolve()
        img.onerror = () => reject()
        img.src = url
      })
    }

    const preloadAllImages = async () => {
      const promises = imageUrls.map(url => 
        preloadImage(url).then(() => {
          loadedCount++
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
        }).catch(() => {
          loadedCount++
          setLoadingProgress(Math.round((loadedCount / totalImages) * 100))
        })
      )

      await Promise.all(promises)
      setTimeout(() => {
        setImagesLoaded(true)
      }, 300)
    }

    preloadAllImages()
  }, [])

  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2400&auto=format&fit=crop",
      position: 0,
      speed: 0.5,
      overlay: "from-primary/90 via-secondary/85 to-accent/80"
    },
    {
      url: "https://images.unsplash.com/photo-1577223625816-7546f73e8b5b?q=80&w=2400&auto=format&fit=crop",
      position: 800,
      speed: 0.45,
      overlay: "from-accent/88 via-primary/83 to-secondary/85"
    },
    {
      url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2400&auto=format&fit=crop",
      position: 1800,
      speed: 0.4,
      overlay: "from-secondary/90 via-accent/84 to-primary/86"
    },
    {
      url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2400&auto=format&fit=crop",
      position: 2800,
      speed: 0.42,
      overlay: "from-primary/87 via-secondary/82 to-accent/83"
    },
    {
      url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2400&auto=format&fit=crop",
      position: 3800,
      speed: 0.38,
      overlay: "from-accent/85 via-primary/80 to-secondary/87"
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2400&auto=format&fit=crop",
      position: 4800,
      speed: 0.35,
      overlay: "from-secondary/88 via-accent/81 to-primary/84"
    },
    {
      url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2400&auto=format&fit=crop",
      position: 5800,
      speed: 0.32,
      overlay: "from-primary/85 via-secondary/79 to-accent/82"
    }
  ]

  const getActiveBackground = () => {
    for (let i = backgroundImages.length - 1; i >= 0; i--) {
      if (scrollY >= backgroundImages[i].position) {
        return backgroundImages[i]
      }
    }
    return backgroundImages[0]
  }

  const getNextBackground = () => {
    const currentIndex = backgroundImages.findIndex(bg => bg === getActiveBackground())
    return backgroundImages[currentIndex + 1] || null
  }

  const activeBackground = getActiveBackground()
  const nextBackground = getNextBackground()
  const transitionProgress = nextBackground 
    ? Math.min((scrollY - activeBackground.position) / (nextBackground.position - activeBackground.position), 1)
    : 0

  return (
    <div className="min-h-screen select-none relative">
      {!imagesLoaded && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-secondary to-accent transition-opacity duration-500">
          <div className="text-center space-y-6">
            <div className="relative">
              <LoadingSpinner />
            </div>
            <div className="space-y-2">
              <p className="text-white text-xl font-bold animate-pulse">جاري تحميل الأكاديمية...</p>
              <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
                <div 
                  className="h-full bg-white rounded-full transition-all duration-300 ease-out"
                  style={{ width: `${loadingProgress}%` }}
                />
              </div>
              <p className="text-white/80 text-sm font-medium">{loadingProgress}%</p>
            </div>
          </div>
        </div>
      )}
      
      <div className="fixed inset-0 -z-10">
        <div 
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{
            transform: `translateY(${scrollY * activeBackground.speed}px) scale(${1 + scrollY * 0.00005})`,
            opacity: nextBackground ? 1 - transitionProgress : 1,
          }}
        >
          <img 
            src={activeBackground.url}
            alt="Soccer Background"
            className="w-full h-[140vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${activeBackground.overlay} transition-all duration-[1200ms]`}></div>
        </div>

        {nextBackground && (
          <div 
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
            style={{
              transform: `translateY(${scrollY * nextBackground.speed}px) scale(${1 + scrollY * 0.00005})`,
              opacity: transitionProgress,
            }}
          >
            <img 
              src={nextBackground.url}
              alt="Soccer Background"
              className="w-full h-[140vh] object-cover"
              loading="eager"
              decoding="async"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${nextBackground.overlay} transition-all duration-[1200ms]`}></div>
          </div>
        )}

        <div className="absolute inset-0 field-pattern opacity-15"></div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-60"
        style={{
          transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.02}deg)`,
        }}
      >
        <div className="absolute top-[8%] right-[12%] w-[600px] h-[600px] bg-accent/25 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[12%] left-[8%] w-[700px] h-[700px] bg-primary/25 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[45%] left-[50%] w-[650px] h-[650px] bg-secondary/20 rounded-full blur-[160px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.12}px) scale(${1 + scrollY * 0.00008})`,
        }}
      >
        <div className="absolute top-[55%] right-[20%] w-[550px] h-[550px] bg-primary/18 rounded-full blur-[130px]"></div>
        <div className="absolute bottom-[25%] left-[15%] w-[600px] h-[600px] bg-accent/18 rounded-full blur-[140px]"></div>
        <div className="absolute top-[75%] left-[60%] w-[500px] h-[500px] bg-secondary/16 rounded-full blur-[120px]"></div>
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