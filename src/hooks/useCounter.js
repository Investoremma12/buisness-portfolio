import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to target using easeOutExpo, starting only
 * when `start` flips true (typically driven by a useInView trigger).
 */
export function useCounter(target, duration = 1800, start = false) {
  const [count, setCount] = useState(0)
  const rafRef = useRef(null)

  useEffect(() => {
    if (!start) return
    const startTime = performance.now()

    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(eased * target))
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [target, duration, start])

  return count
}
