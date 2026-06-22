import { useEffect, useRef, useState } from 'react'

export function useParallax() {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const velocityRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | undefined>(undefined)

  useEffect(() => {
    let isDragging = false
    let startPos = { x: 0, y: 0 }

    const handlePointerDown = (e: PointerEvent | TouchEvent) => {
      isDragging = true
      const point = 'touches' in e ? e.touches[0] : e
      startPos = { x: point.clientX, y: point.clientY }
      velocityRef.current = { x: 0, y: 0 }
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }

    const handlePointerMove = (e: PointerEvent | TouchEvent) => {
      if (!isDragging) return
      
      const point = 'touches' in e ? e.touches[0] : e
      const deltaX = point.clientX - startPos.x
      const deltaY = point.clientY - startPos.y
      
      velocityRef.current = {
        x: deltaX * 0.3,
        y: deltaY * 0.3
      }

      setOffset(prev => ({
        x: prev.x + velocityRef.current.x,
        y: prev.y + velocityRef.current.y
      }))

      startPos = { x: point.clientX, y: point.clientY }
    }

    const handlePointerUp = () => {
      isDragging = false
      
      const decay = () => {
        velocityRef.current.x *= 0.95
        velocityRef.current.y *= 0.95

        setOffset(prev => ({
          x: prev.x * 0.92,
          y: prev.y * 0.92
        }))

        if (Math.abs(velocityRef.current.x) > 0.1 || Math.abs(velocityRef.current.y) > 0.1 ||
            Math.abs(offset.x) > 0.1 || Math.abs(offset.y) > 0.1) {
          rafRef.current = requestAnimationFrame(decay)
        } else {
          setOffset({ x: 0, y: 0 })
          velocityRef.current = { x: 0, y: 0 }
        }
      }

      rafRef.current = requestAnimationFrame(decay)
    }

    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)
    window.addEventListener('touchstart', handlePointerDown, { passive: true })
    window.addEventListener('touchmove', handlePointerMove, { passive: true })
    window.addEventListener('touchend', handlePointerUp)

    return () => {
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
      window.removeEventListener('touchstart', handlePointerDown)
      window.removeEventListener('touchmove', handlePointerMove)
      window.removeEventListener('touchend', handlePointerUp)
      
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [offset.x, offset.y])

  return offset
}
