import { useEffect, useRef, useState } from "react"
import { 
  SoccerBall, 
  Trophy, 
  Sneaker, 
  Flag, 
  Target,
  Medal,
  Timer,
  Star,
  Heart,
  Lightning
} from "@phosphor-icons/react"

interface FloatingIcon {
  id: number
  x: number
  y: number
  vx: number
  vy: number
  rotation: number
  rotationSpeed: number
  scale: number
  icon: React.ReactNode
  color: string
  opacity: number
}

const ICON_COMPONENTS = [
  { Component: SoccerBall, color: "text-primary" },
  { Component: Trophy, color: "text-accent" },
  { Component: Sneaker, color: "text-secondary" },
  { Component: Flag, color: "text-primary" },
  { Component: Target, color: "text-accent" },
  { Component: Medal, color: "text-secondary" },
  { Component: Timer, color: "text-primary" },
  { Component: Star, color: "text-accent" },
  { Component: Heart, color: "text-secondary" },
  { Component: Lightning, color: "text-accent" }
]

export default function InteractiveBackground() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const animationRef = useRef<number | undefined>(undefined)
  const containerRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: window.innerWidth,
          height: document.documentElement.scrollHeight
        })
      }
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    window.addEventListener('scroll', updateDimensions, { passive: true })

    const observer = new MutationObserver(updateDimensions)
    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    return () => {
      window.removeEventListener('resize', updateDimensions)
      window.removeEventListener('scroll', updateDimensions)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return

    const iconData = ICON_COMPONENTS.map((iconConfig, index) => {
      const { Component, color } = iconConfig
      return {
        id: index,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        scale: 0.8 + Math.random() * 1.2,
        icon: <Component weight="duotone" size={48} className={color} />,
        color: color,
        opacity: 0.15 + Math.random() * 0.25
      }
    })

    const additionalIcons = Array.from({ length: 15 }, (_, i) => {
      const iconConfig = ICON_COMPONENTS[Math.floor(Math.random() * ICON_COMPONENTS.length)]
      const { Component, color } = iconConfig
      return {
        id: ICON_COMPONENTS.length + i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
        scale: 0.6 + Math.random() * 1,
        icon: <Component weight="duotone" size={48} className={color} />,
        color: color,
        opacity: 0.1 + Math.random() * 0.2
      }
    })

    setIcons([...iconData, ...additionalIcons])
  }, [dimensions])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY + window.scrollY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    if (icons.length === 0) return

    const animate = () => {
      setIcons(prevIcons =>
        prevIcons.map(icon => {
          let newX = icon.x + icon.vx
          let newY = icon.y + icon.vy
          let newVx = icon.vx
          let newVy = icon.vy

          if (newX <= 0 || newX >= dimensions.width) {
            newVx = -newVx
            newX = Math.max(0, Math.min(dimensions.width, newX))
          }
          if (newY <= 0 || newY >= dimensions.height) {
            newVy = -newVy
            newY = Math.max(0, Math.min(dimensions.height, newY))
          }

          const dx = mousePosition.x - newX
          const dy = mousePosition.y - newY
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 200) {
            const force = (200 - distance) / 200
            newVx -= (dx / distance) * force * 0.5
            newVy -= (dy / distance) * force * 0.5
          }

          newVx *= 0.99
          newVy *= 0.99

          if (Math.abs(newVx) < 0.1) newVx = (Math.random() - 0.5) * 0.3
          if (Math.abs(newVy) < 0.1) newVy = (Math.random() - 0.5) * 0.3

          return {
            ...icon,
            x: newX,
            y: newY,
            vx: Math.max(-2, Math.min(2, newVx)),
            vy: Math.max(-2, Math.min(2, newVy)),
            rotation: (icon.rotation + icon.rotationSpeed) % 360
          }
        })
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [icons.length, mousePosition, dimensions])

  return (
    <>
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-background via-muted to-background"></div>
      
      <div 
        className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
        style={{ height: `${dimensions.height}px` }}
        ref={containerRef}
      >
        <div className="absolute inset-0 field-pattern opacity-[0.03]"></div>
        
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[20%] left-[10%] w-[600px] h-[600px] bg-accent/8 rounded-full blur-[130px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-[60%] right-[25%] w-[550px] h-[550px] bg-secondary/7 rounded-full blur-[125px] animate-pulse" style={{ animationDelay: '4s' }}></div>

        {icons.map((icon) => (
          <div
            key={icon.id}
            className="absolute transition-all duration-100 ease-linear"
            style={{
              left: `${icon.x}px`,
              top: `${icon.y}px`,
              transform: `translate(-50%, -50%) rotate(${icon.rotation}deg) scale(${icon.scale})`,
              opacity: icon.opacity,
              willChange: 'transform',
            }}
          >
            {icon.icon}
          </div>
        ))}

        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" style={{ height: `${dimensions.height}px` }}>
          <defs>
            <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1.5" fill="currentColor" className="text-primary" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </>
  )
}
