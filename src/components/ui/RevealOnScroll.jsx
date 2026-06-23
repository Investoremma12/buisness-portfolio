import { motion } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade/slide reveal.
 * `delay` lets sibling elements stagger naturally.
 */
export default function RevealOnScroll({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const offset = direction === 'up' ? 24 : direction === 'down' ? -24 : 0
  const xOffset = direction === 'left' ? 24 : direction === 'right' ? -24 : 0

  return (
    <motion.div
      initial={{ opacity: 0, y: offset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
