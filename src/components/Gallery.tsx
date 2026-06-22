import { useState } from "react"
import { useKV } from '@github/spark/hooks'
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Camera, X, ArrowLeft, ArrowRight } from "@phosphor-icons/react"
import LazyImage from "@/components/LazyImage"

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: "academy" | "field" | "training"
}

const defaultGalleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=800&h=600&fit=crop",
    alt: "ملعب الأكاديمية - منظر عام",
    category: "field"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=600&fit=crop",
    alt: "تدريب البراعم",
    category: "training"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&h=600&fit=crop",
    alt: "الملعب العشبي الطبيعي",
    category: "field"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&h=600&fit=crop",
    alt: "تدريب الناشئين",
    category: "training"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=800&h=600&fit=crop",
    alt: "مبنى الأكاديمية",
    category: "academy"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&h=600&fit=crop",
    alt: "مباراة ودية",
    category: "training"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&h=600&fit=crop",
    alt: "الملعب ليلاً",
    category: "field"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=600&fit=crop",
    alt: "تدريب جماعي",
    category: "training"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=800&h=600&fit=crop",
    alt: "مرافق الأكاديمية",
    category: "academy"
  }
]

export default function Gallery() {
  const [galleryImages] = useKV<GalleryImage[]>('admin-gallery', defaultGalleryImages)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [filter, setFilter] = useState<"all" | "academy" | "field" | "training">("all")

  const filteredImages = filter === "all" 
    ? (galleryImages || defaultGalleryImages)
    : (galleryImages || defaultGalleryImages).filter(img => img.category === filter)

  const openImage = (id: number) => {
    setSelectedImage(id)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
    let newIndex: number
    
    if (direction === "prev") {
      newIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1
    } else {
      newIndex = currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1
    }
    
    setSelectedImage(filteredImages[newIndex].id)
  }

  const currentImage = (galleryImages || defaultGalleryImages).find(img => img.id === selectedImage)

  const filterButtons = [
    { value: "all" as const, label: "الكل" },
    { value: "field" as const, label: "الملاعب" },
    { value: "training" as const, label: "التدريبات" },
    { value: "academy" as const, label: "المرافق" }
  ]

  return (
    <section id="gallery" className="py-32 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 field-pattern opacity-5"></div>
      <div className="absolute top-10 left-1/3 w-[35rem] h-[35rem] bg-accent/15 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-6 reveal-up">
          <div className="flex items-center justify-center gap-4 mb-6">
            <Camera size={44} weight="fill" className="text-primary" />
            <h2 className="text-6xl md:text-7xl font-black text-foreground">
              معرض الصور
            </h2>
          </div>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-bold">
            استعرض صور الأكاديمية والملاعب والتدريبات
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setFilter(btn.value)}
              className={`px-10 py-5 rounded-2xl font-black text-2xl transition-all duration-300 ${
                filter === btn.value
                  ? "bg-primary text-primary-foreground shadow-[0_10px_40px_rgba(132,71,221,0.4)] scale-110"
                  : "bg-card hover:bg-muted text-foreground border-2 border-border hover:border-primary/50 hover:scale-105"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredImages.map((image, index) => (
            <Card 
              key={index}
              className="glass-card-strong group overflow-hidden border-2 hover:border-transparent relative"
              onClick={() => openImage(image.id)}
              style={{
                animationDelay: `${index * 50}ms`
              }}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-lg font-bold">{image.alt}</p>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={24} weight="fill" className="text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <Camera size={64} weight="light" className="text-muted-foreground mx-auto mb-4" />
            <p className="text-xl text-muted-foreground">لا توجد صور في هذا القسم</p>
          </div>
        )}
      </div>

      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-6xl w-full p-0 bg-black/95 border-none">
          <div className="relative">
            <button
              onClick={closeImage}
              className="absolute top-4 left-4 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-200 hover:scale-110"
            >
              <X size={28} weight="bold" className="text-white" />
            </button>

            <button
              onClick={() => navigateImage("prev")}
              className="absolute top-1/2 left-4 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-200 hover:scale-110"
            >
              <ArrowRight size={32} weight="bold" className="text-white" />
            </button>

            <button
              onClick={() => navigateImage("next")}
              className="absolute top-1/2 right-4 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-4 rounded-full transition-all duration-200 hover:scale-110"
            >
              <ArrowLeft size={32} weight="bold" className="text-white" />
            </button>

            {currentImage && (
              <div className="relative">
                <img
                  src={currentImage.src}
                  alt={currentImage.alt}
                  className="w-full h-auto max-h-[85vh] object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-xl font-bold text-center">
                    {currentImage.alt}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
