import { useEffect, useRef } from 'react'

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = document.documentElement.scrollHeight

    const particles: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      opacity: number
      color: string
    }> = []

    const colors = [
      'rgba(128, 200, 160, 0.4)',
      'rgba(153, 217, 180, 0.4)',
      'rgba(107, 178, 140, 0.4)',
      'rgba(140, 210, 170, 0.35)',
      'rgba(120, 190, 155, 0.35)',
    ]

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    const footballPatterns: Array<{
      x: number
      y: number
      size: number
      rotation: number
      rotationSpeed: number
      opacity: number
    }> = []

    for (let i = 0; i < 15; i++) {
      footballPatterns.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 60 + 30,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        opacity: Math.random() * 0.08 + 0.03
      })
    }

    let mouseX = 0
    let mouseY = 0
    let scrollY = 0

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY + window.scrollY
    }

    const handleScroll = () => {
      scrollY = window.scrollY
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = document.documentElement.scrollHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    const drawFootballIcon = (
      ctx: CanvasRenderingContext2D,
      x: number,
      y: number,
      size: number,
      rotation: number,
      opacity: number
    ) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)
      ctx.globalAlpha = opacity

      ctx.beginPath()
      ctx.arc(0, 0, size / 2, 0, Math.PI * 2)
      ctx.strokeStyle = `rgba(128, 200, 160, ${opacity * 0.6})`
      ctx.lineWidth = 2
      ctx.stroke()

      const pentagonSize = size * 0.2
      ctx.beginPath()
      for (let i = 0; i < 5; i++) {
        const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2
        const px = Math.cos(angle) * pentagonSize
        const py = Math.sin(angle) * pentagonSize
        if (i === 0) ctx.moveTo(px, py)
        else ctx.lineTo(px, py)
      }
      ctx.closePath()
      ctx.fillStyle = `rgba(128, 200, 160, ${opacity * 0.5})`
      ctx.fill()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, 'rgba(250, 252, 251, 0.3)')
      gradient.addColorStop(0.3, 'rgba(240, 250, 245, 0.4)')
      gradient.addColorStop(0.6, 'rgba(235, 248, 242, 0.5)')
      gradient.addColorStop(1, 'rgba(245, 252, 248, 0.3)')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const dx = mouseX - particles[i].x
        const dy = mouseY - particles[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 150) {
          const force = (150 - distance) / 150
          particles[i].x -= (dx / distance) * force * 2
          particles[i].y -= (dy / distance) * force * 2
        }

        particles[i].x += particles[i].speedX
        particles[i].y += particles[i].speedY

        if (particles[i].x < 0 || particles[i].x > canvas.width) {
          particles[i].speedX *= -1
        }
        if (particles[i].y < 0 || particles[i].y > canvas.height) {
          particles[i].speedY *= -1
        }

        particles[i].x = Math.max(0, Math.min(canvas.width, particles[i].x))
        particles[i].y = Math.max(0, Math.min(canvas.height, particles[i].y))

        ctx.beginPath()
        ctx.arc(particles[i].x, particles[i].y, particles[i].size, 0, Math.PI * 2)
        ctx.fillStyle = particles[i].color
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(128, 200, 160, ${(1 - distance / 120) * 0.15})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      footballPatterns.forEach(pattern => {
        pattern.rotation += pattern.rotationSpeed
        drawFootballIcon(ctx, pattern.x, pattern.y, pattern.size, pattern.rotation, pattern.opacity)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full pointer-events-none z-0"
      style={{ height: '100%' }}
    />
  )
}
