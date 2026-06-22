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
    let ticking = false
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
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
      url: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1920&auto=format&fit=crop",
      position: 0,
      speed: 0.15,
      overlay: "from-primary/85 via-secondary/80 to-accent/75"
    },
    {
      url: "https://images.unsplash.com/photo-1577223625816-7546f73e8b5b?q=80&w=1920&auto=format&fit=crop",
      position: 1400,
      speed: 0.14,
      overlay: "from-accent/83 via-primary/78 to-secondary/80"
    },
    {
      url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=1920&auto=format&fit=crop",
      position: 2800,
      speed: 0.13,
      overlay: "from-secondary/85 via-accent/79 to-primary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=1920&auto=format&fit=crop",
      position: 4200,
      speed: 0.12,
      overlay: "from-primary/82 via-secondary/77 to-accent/79"
    },
    {
      url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=1920&auto=format&fit=crop",
      position: 5600,
      speed: 0.11,
      overlay: "from-accent/80 via-primary/75 to-secondary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1920&auto=format&fit=crop",
      position: 7000,
      speed: 0.10,
      overlay: "from-secondary/83 via-accent/76 to-primary/80"
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
    ? Math.min(Math.max((scrollY - activeBackground.position) / 400, 0), 1)
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
      
      <div 
        className="fixed top-0 left-0 w-full -z-10 overflow-hidden"
        style={{
          height: '100vh',
        }}
      >
        <div 
          className="absolute top-0 left-0 w-full will-change-transform"
          style={{
            height: '150vh',
            transform: `translateY(${scrollY * activeBackground.speed}px)`,
            opacity: nextBackground ? 1 - transitionProgress : 1,
            transition: 'opacity 600ms ease-out',
          }}
        >
          <img 
            src={activeBackground.url}
            alt="Soccer Background"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${activeBackground.overlay}`} style={{ transition: 'all 600ms' }}></div>
        </div>

        {nextBackground && (
          <div 
            className="absolute top-0 left-0 w-full will-change-transform"
            style={{
              height: '150vh',
              transform: `translateY(${scrollY * nextBackground.speed}px)`,
              opacity: transitionProgress,
              transition: 'opacity 600ms ease-out',
            }}
          >
            <img 
              src={nextBackground.url}
              alt="Soccer Background"
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${nextBackground.overlay}`} style={{ transition: 'all 600ms' }}></div>
          </div>
        )}

        <div 
          className="absolute inset-0 field-pattern opacity-12"
          style={{
            height: '150vh',
          }}
        ></div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-30"
        style={{
          height: '100vh',
          transform: `translateY(${scrollY * 0.08}px)`,
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
