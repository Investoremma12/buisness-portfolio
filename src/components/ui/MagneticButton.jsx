import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

/**
 * A button that subtly follows the cursor when hovered (magnetic effect),
 * snapping back to center on mouse leave. Used for primary CTAs.
 */
export default function MagneticButton({
  children,
  as: Component = 'button',
  variant = 'primary',
  className = '',
  strength = 0.3,
  ...props
}) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * strength
    const y = (e.clientY - rect.top - rect.height / 2) * strength
    setPos({ x, y })
  }

  const handleMouseLeave = () => setPos({ x: 0, y: 0 })

  const variants = {
    primary:
      'bg-[#7c5cff] hover:bg-[#6c4cef] text-white shadow-lg shadow-[#7c5cff]/25 hover:shadow-[#7c5cff]/40',
    secondary:
      'bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-white/25 backdrop-blur-sm',
    ghost: 'text-white/70 hover:text-white',
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 12, mass: 0.1 }}
      className="inline-block"
    >
      <Component
        className={cn(
          'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide transition-colors duration-200 cursor-pointer',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </motion.div>
  )
}
