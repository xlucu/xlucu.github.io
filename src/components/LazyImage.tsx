import { useState, useEffect, useRef } from 'react'

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholderClassName?: string
  onLoad?: () => void
}

export default function LazyImage({ 
  src, 
  alt, 
  className = '', 
  placeholderClassName = '',
  onLoad 
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!imgRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true)
            observer.disconnect()
          }
        })
      },
      {
        rootMargin: '50px',
      }
    )

    observer.observe(imgRef.current)

    return () => {
      observer.disconnect()
    }
  }, [])

  const handleImageLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  return (
    <div ref={imgRef} className={`relative ${className}`}>
      {!isLoaded && (
        <div 
          className={`absolute inset-0 bg-gradient-to-br from-muted/50 to-muted/30 animate-pulse ${placeholderClassName}`}
        />
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={handleImageLoad}
          loading="lazy"
        />
      )}
    </div>
  )
}
