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
      }, 200)
    }

    preloadAllImages()
  }, [])

  const backgroundImages = [
    {
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=2400&auto=format&fit=crop",
      position: 0,
      speed: 0.45,
      overlay: "from-primary/85 via-secondary/80 to-accent/75"
    },
    {
      url: "https://images.unsplash.com/photo-1577223625816-7546f73e8b5b?q=80&w=2400&auto=format&fit=crop",
      position: 900,
      speed: 0.43,
      overlay: "from-accent/83 via-primary/78 to-secondary/80"
    },
    {
      url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2400&auto=format&fit=crop",
      position: 1800,
      speed: 0.41,
      overlay: "from-secondary/85 via-accent/79 to-primary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2400&auto=format&fit=crop",
      position: 2700,
      speed: 0.39,
      overlay: "from-primary/82 via-secondary/77 to-accent/79"
    },
    {
      url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2400&auto=format&fit=crop",
      position: 3600,
      speed: 0.37,
      overlay: "from-accent/80 via-primary/75 to-secondary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2400&auto=format&fit=crop",
      position: 4500,
      speed: 0.35,
      overlay: "from-secondary/83 via-accent/76 to-primary/80"
    },
    {
      url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2400&auto=format&fit=crop",
      position: 5400,
      speed: 0.33,
      overlay: "from-primary/80 via-secondary/74 to-accent/78"
    },
    {
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2400&auto=format&fit=crop",
      position: 6300,
      speed: 0.31,
      overlay: "from-accent/82 via-primary/76 to-secondary/79"
    },
    {
      url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2400&auto=format&fit=crop",
      position: 7200,
      speed: 0.29,
      overlay: "from-secondary/81 via-accent/75 to-primary/81"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2400&auto=format&fit=crop",
      position: 8100,
      speed: 0.27,
      overlay: "from-primary/83 via-secondary/77 to-accent/80"
    },
    {
      url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2400&auto=format&fit=crop",
      position: 9000,
      speed: 0.25,
      overlay: "from-accent/81 via-primary/74 to-secondary/78"
    },
    {
      url: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2400&auto=format&fit=crop",
      position: 9900,
      speed: 0.23,
      overlay: "from-secondary/82 via-accent/73 to-primary/79"
    },
    {
      url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2400&auto=format&fit=crop",
      position: 10800,
      speed: 0.21,
      overlay: "from-primary/84 via-accent/77 to-secondary/81"
    },
    {
      url: "https://images.unsplash.com/photo-1611318418045-b94e4ae6a69b?q=80&w=2400&auto=format&fit=crop",
      position: 11700,
      speed: 0.19,
      overlay: "from-accent/83 via-secondary/78 to-primary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2400&auto=format&fit=crop",
      position: 12600,
      speed: 0.17,
      overlay: "from-secondary/84 via-primary/79 to-accent/81"
    },
    {
      url: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=2400&auto=format&fit=crop",
      position: 13500,
      speed: 0.15,
      overlay: "from-primary/82 via-accent/76 to-secondary/79"
    },
    {
      url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2400&auto=format&fit=crop",
      position: 14400,
      speed: 0.13,
      overlay: "from-accent/81 via-primary/75 to-secondary/80"
    },
    {
      url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2400&auto=format&fit=crop",
      position: 15300,
      speed: 0.11,
      overlay: "from-secondary/83 via-accent/77 to-primary/81"
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
    ? Math.min(Math.max((scrollY - activeBackground.position) / 600, 0), 1)
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
          className="absolute inset-0 transition-opacity duration-[800ms] ease-out"
          style={{
            transform: `translateY(${scrollY * activeBackground.speed}px) scale(${1 + scrollY * 0.00003})`,
            opacity: nextBackground ? 1 - transitionProgress : 1,
          }}
        >
          <img 
            src={activeBackground.url}
            alt="Soccer Background"
            className="w-full h-[150vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${activeBackground.overlay} transition-all duration-[800ms]`}></div>
        </div>

        {nextBackground && (
          <div 
            className="absolute inset-0 transition-opacity duration-[800ms] ease-out"
            style={{
              transform: `translateY(${scrollY * nextBackground.speed}px) scale(${1 + scrollY * 0.00003})`,
              opacity: transitionProgress,
            }}
          >
            <img 
              src={nextBackground.url}
              alt="Soccer Background"
              className="w-full h-[150vh] object-cover"
              loading="eager"
              decoding="async"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${nextBackground.overlay} transition-all duration-[800ms]`}></div>
          </div>
        )}

        <div className="absolute inset-0 field-pattern opacity-12"></div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      >
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute bottom-[15%] left-[10%] w-[700px] h-[700px] bg-primary/15 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[50%] left-[50%] w-[650px] h-[650px] bg-secondary/12 rounded-full blur-[145px] animate-pulse" style={{ animationDelay: '2s' }}></div>
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
