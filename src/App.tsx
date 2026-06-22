import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import TrainingCategories from "@/components/TrainingCategories"
import WhatWeOffer from "@/components/WhatWeOffer"
import Gallery from "@/components/Gallery"
import OurStars from "@/components/OurStars"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrainingCategories />
      <WhatWeOffer />
      <Gallery />
      <OurStars />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App