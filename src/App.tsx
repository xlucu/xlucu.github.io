import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import AchievementsSection from "@/components/AchievementsSection"
import TrainingCategories from "@/components/TrainingCategories"
import WhatWeOffer from "@/components/WhatWeOffer"
import Gallery from "@/components/Gallery"
import OurStars from "@/components/OurStars"
import TestimonialsSection from "@/components/TestimonialsSection"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"
import AdminLogin from "@/components/AdminLogin"
import { Toaster } from "@/components/ui/sonner"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AchievementsSection />
      <TrainingCategories />
      <WhatWeOffer />
      <Gallery />
      <OurStars />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <AdminLogin />
      <Toaster position="top-center" richColors />
    </div>
  )
}

export default App