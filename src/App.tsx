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
      speed: 0.48,
      overlay: "from-accent/88 via-primary/83 to-secondary/85"
    },
    {
      url: "https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=2400&auto=format&fit=crop",
      position: 1600,
      speed: 0.46,
      overlay: "from-secondary/90 via-accent/84 to-primary/86"
    },
    {
      url: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?q=80&w=2400&auto=format&fit=crop",
      position: 2400,
      speed: 0.44,
      overlay: "from-primary/87 via-secondary/82 to-accent/83"
    },
    {
      url: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2400&auto=format&fit=crop",
      position: 3200,
      speed: 0.42,
      overlay: "from-accent/85 via-primary/80 to-secondary/87"
    },
    {
      url: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2400&auto=format&fit=crop",
      position: 4000,
      speed: 0.40,
      overlay: "from-secondary/88 via-accent/81 to-primary/84"
    },
    {
      url: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?q=80&w=2400&auto=format&fit=crop",
      position: 4800,
      speed: 0.38,
      overlay: "from-primary/85 via-secondary/79 to-accent/82"
    },
    {
      url: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=2400&auto=format&fit=crop",
      position: 5600,
      speed: 0.36,
      overlay: "from-accent/87 via-primary/81 to-secondary/83"
    },
    {
      url: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?q=80&w=2400&auto=format&fit=crop",
      position: 6400,
      speed: 0.34,
      overlay: "from-secondary/86 via-accent/80 to-primary/85"
    },
    {
      url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2400&auto=format&fit=crop",
      position: 7200,
      speed: 0.32,
      overlay: "from-primary/88 via-secondary/82 to-accent/84"
    },
    {
      url: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=2400&auto=format&fit=crop",
      position: 8000,
      speed: 0.30,
      overlay: "from-accent/86 via-primary/79 to-secondary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=2400&auto=format&fit=crop",
      position: 8800,
      speed: 0.28,
      overlay: "from-secondary/87 via-accent/78 to-primary/83"
    },
    {
      url: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=2400&auto=format&fit=crop",
      position: 9600,
      speed: 0.26,
      overlay: "from-primary/89 via-accent/82 to-secondary/84"
    },
    {
      url: "https://images.unsplash.com/photo-1611318418045-b94e4ae6a69b?q=80&w=2400&auto=format&fit=crop",
      position: 10400,
      speed: 0.24,
      overlay: "from-accent/88 via-secondary/83 to-primary/86"
    },
    {
      url: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?q=80&w=2400&auto=format&fit=crop",
      position: 11200,
      speed: 0.22,
      overlay: "from-secondary/89 via-primary/84 to-accent/85"
    },
    {
      url: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?q=80&w=2400&auto=format&fit=crop",
      position: 12000,
      speed: 0.20,
      overlay: "from-primary/87 via-accent/81 to-secondary/82"
    },
    {
      url: "https://images.unsplash.com/photo-1600679472829-3044539ce8ed?q=80&w=2400&auto=format&fit=crop",
      position: 12800,
      speed: 0.18,
      overlay: "from-accent/86 via-primary/80 to-secondary/83"
    },
    {
      url: "https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?q=80&w=2400&auto=format&fit=crop",
      position: 13600,
      speed: 0.16,
      overlay: "from-secondary/88 via-accent/82 to-primary/85"
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
    ? Math.min(Math.max((scrollY - activeBackground.position) / 500, 0), 1)
    : 0

  const getCurrentBackgroundIndex = () => {
    return backgroundImages.findIndex(bg => bg === activeBackground)
  }

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
          className="absolute inset-0 transition-opacity duration-[1000ms] ease-out"
          style={{
            transform: `translateY(${scrollY * activeBackground.speed}px) scale(${1 + scrollY * 0.00004})`,
            opacity: nextBackground ? 1 - transitionProgress : 1,
          }}
        >
          <img 
            src={activeBackground.url}
            alt="Soccer Background"
            className="w-full h-[160vh] object-cover"
            loading="eager"
            decoding="async"
          />
          <div className={`absolute inset-0 bg-gradient-to-br ${activeBackground.overlay} transition-all duration-[1000ms]`}></div>
        </div>

        {nextBackground && (
          <div 
            className="absolute inset-0 transition-opacity duration-[1000ms] ease-out"
            style={{
              transform: `translateY(${scrollY * nextBackground.speed}px) scale(${1 + scrollY * 0.00004})`,
              opacity: transitionProgress,
            }}
          >
            <img 
              src={nextBackground.url}
              alt="Soccer Background"
              className="w-full h-[160vh] object-cover"
              loading="eager"
              decoding="async"
            />
            <div className={`absolute inset-0 bg-gradient-to-br ${nextBackground.overlay} transition-all duration-[1000ms]`}></div>
          </div>
        )}

        <div className="absolute inset-0 field-pattern opacity-15"></div>
      </div>

      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-50"
        style={{
          transform: `translateY(${scrollY * 0.18}px) rotate(${scrollY * 0.015}deg)`,
        }}
      >
        <div className="absolute top-[8%] right-[12%] w-[700px] h-[700px] bg-accent/20 rounded-full blur-[160px] animate-pulse"></div>
        <div className="absolute bottom-[12%] left-[8%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[170px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-[45%] left-[50%] w-[750px] h-[750px] bg-secondary/18 rounded-full blur-[180px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[120%] right-[25%] w-[650px] h-[650px] bg-primary/22 rounded-full blur-[170px] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-[180%] left-[18%] w-[720px] h-[720px] bg-accent/19 rounded-full blur-[175px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-[240%] right-[15%] w-[680px] h-[680px] bg-secondary/21 rounded-full blur-[165px] animate-pulse" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-[300%] left-[22%] w-[710px] h-[710px] bg-primary/19 rounded-full blur-[168px] animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-[360%] right-[28%] w-[690px] h-[690px] bg-accent/20 rounded-full blur-[172px] animate-pulse" style={{ animationDelay: '3.5s' }}></div>
        <div className="absolute top-[420%] left-[35%] w-[730px] h-[730px] bg-secondary/19 rounded-full blur-[176px] animate-pulse" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-[480%] right-[20%] w-[700px] h-[700px] bg-primary/21 rounded-full blur-[164px] animate-pulse" style={{ animationDelay: '4.5s' }}></div>
        <div className="absolute top-[540%] left-[12%] w-[680px] h-[680px] bg-accent/18 rounded-full blur-[170px] animate-pulse" style={{ animationDelay: '5s' }}></div>
        <div className="absolute top-[600%] right-[30%] w-[720px] h-[720px] bg-secondary/20 rounded-full blur-[174px] animate-pulse" style={{ animationDelay: '5.5s' }}></div>
      </div>
      
      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-40"
        style={{
          transform: `translateY(${scrollY * 0.10}px) scale(${1 + scrollY * 0.00006})`,
        }}
      >
        <div className="absolute top-[55%] right-[20%] w-[650px] h-[650px] bg-primary/15 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-[25%] left-[15%] w-[700px] h-[700px] bg-accent/15 rounded-full blur-[160px]"></div>
        <div className="absolute top-[75%] left-[60%] w-[600px] h-[600px] bg-secondary/14 rounded-full blur-[140px]"></div>
        <div className="absolute top-[140%] right-[30%] w-[620px] h-[620px] bg-accent/16 rounded-full blur-[155px]"></div>
        <div className="absolute top-[200%] left-[22%] w-[680px] h-[680px] bg-primary/17 rounded-full blur-[165px]"></div>
        <div className="absolute top-[260%] right-[12%] w-[640px] h-[640px] bg-secondary/15 rounded-full blur-[150px]"></div>
        <div className="absolute top-[320%] left-[35%] w-[660px] h-[660px] bg-accent/16 rounded-full blur-[158px]"></div>
        <div className="absolute top-[380%] right-[25%] w-[670px] h-[670px] bg-primary/15 rounded-full blur-[162px]"></div>
        <div className="absolute top-[440%] left-[10%] w-[650px] h-[650px] bg-secondary/16 rounded-full blur-[154px]"></div>
        <div className="absolute top-[500%] right-[40%] w-[690px] h-[690px] bg-accent/17 rounded-full blur-[166px]"></div>
        <div className="absolute top-[560%] left-[28%] w-[630px] h-[630px] bg-primary/16 rounded-full blur-[152px]"></div>
        <div className="absolute top-[620%] right-[18%] w-[710px] h-[710px] bg-secondary/17 rounded-full blur-[168px]"></div>
      </div>
      
      <div 
        className="fixed inset-0 -z-10 pointer-events-none opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.08}px)`,
        }}
      >
        <div className="absolute top-[100%] left-[45%] w-[580px] h-[580px] bg-primary/12 rounded-full blur-[135px]"></div>
        <div className="absolute top-[160%] right-[35%] w-[600px] h-[600px] bg-secondary/13 rounded-full blur-[145px]"></div>
        <div className="absolute top-[220%] left-[28%] w-[620px] h-[620px] bg-accent/14 rounded-full blur-[140px]"></div>
        <div className="absolute top-[280%] right-[20%] w-[590px] h-[590px] bg-primary/13 rounded-full blur-[138px]"></div>
        <div className="absolute top-[340%] left-[38%] w-[610px] h-[610px] bg-secondary/12 rounded-full blur-[142px]"></div>
        <div className="absolute top-[400%] right-[32%] w-[600px] h-[600px] bg-accent/13 rounded-full blur-[146px]"></div>
        <div className="absolute top-[460%] left-[15%] w-[620px] h-[620px] bg-primary/14 rounded-full blur-[139px]"></div>
        <div className="absolute top-[520%] right-[42%] w-[590px] h-[590px] bg-secondary/14 rounded-full blur-[143px]"></div>
        <div className="absolute top-[580%] left-[48%] w-[610px] h-[610px] bg-accent/12 rounded-full blur-[137px]"></div>
        <div className="absolute top-[640%] right-[15%] w-[600px] h-[600px] bg-primary/13 rounded-full blur-[141px]"></div>
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