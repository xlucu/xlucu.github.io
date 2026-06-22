import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function InteractiveBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1529900748604-07564a03e7a6?q=80&w=2070&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        animate={{
          scale: [1, 1.05, 1],
          y: scrollY * 0.3,
        }}
        transition={{
          scale: {
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          },
          y: {
            duration: 0
          }
        }}
      />
      
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(circle at 20% 30%, rgba(80, 200, 120, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 70%, rgba(80, 200, 120, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 60%, rgba(80, 200, 120, 0.15) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 30%, rgba(80, 200, 120, 0.15) 0%, transparent 50%)',
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.03) 100px,
              rgba(255, 255, 255, 0.03) 101px
            )
          `,
          backgroundSize: '200% 200%'
        }}
      />
    </div>
  )
}
