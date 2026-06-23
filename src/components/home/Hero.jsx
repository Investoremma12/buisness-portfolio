import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, FileText } from 'lucide-react'
import { useMousePosition } from '@/hooks/useMousePosition'
import MagneticButton from '@/components/ui/MagneticButton'

const TYPED_PHRASES = [
  'business websites.',
  'e-commerce platforms.',
  'landing pages that convert.',
  'interfaces clients love.',
]

function TypedHeadline() {
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const phrase = TYPED_PHRASES[phraseIndex]
    const speed = deleting ? 35 : 55

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (displayed.length < phrase.length) {
          setDisplayed(phrase.slice(0, displayed.length + 1))
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(phrase.slice(0, displayed.length - 1))
        } else {
          setDeleting(false)
          setPhraseIndex((i) => (i + 1) % TYPED_PHRASES.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [displayed, deleting, phraseIndex])

  return (
    <span className="text-[#7c5cff]">
      {displayed}
      <span className="inline-block w-[3px] h-[0.9em] bg-[#7c5cff] ml-1 animate-pulse align-middle" />
    </span>
  )
}

export default function Hero() {
  const mouse = useMousePosition()

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#08090d] pt-20"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 opacity-60 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 30% 20%, rgba(124,92,255,0.18) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(167,139,250,0.12) 0%, transparent 50%)',
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,92,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(124,92,255,0.4) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Floating code-bracket shapes — parallax driven by mouse */}
      <motion.div
        animate={{ x: mouse.x * 30, y: mouse.y * 30 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute top-[18%] right-[12%] text-[#7c5cff]/15 font-mono font-bold select-none pointer-events-none hidden md:block"
        style={{ fontSize: '8rem' }}
      >
        {'{'}
      </motion.div>
      <motion.div
        animate={{ x: mouse.x * -24, y: mouse.y * -24 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute bottom-[15%] left-[8%] text-[#a78bfa]/10 font-mono font-bold select-none pointer-events-none hidden md:block"
        style={{ fontSize: '10rem' }}
      >
        {'}'}
      </motion.div>
      <motion.div
        animate={{ x: mouse.x * 18, y: mouse.y * 18 }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        className="absolute top-[55%] right-[22%] text-[#7c5cff]/10 font-mono font-bold select-none pointer-events-none hidden lg:block"
        style={{ fontSize: '5rem' }}
      >
        {'</>'}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm rounded-full px-4 py-1.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-white/70 text-xs font-medium">Available for new projects</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] tracking-tight mb-6"
          >
            I build{' '}
            <span className="block sm:inline">
              <TypedHeadline />
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/50 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Frontend architect and entrepreneur helping businesses turn ideas into
            fast, modern, conversion-ready websites — engineered with the same care
            you'd expect from a full agency.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <MagneticButton as={Link} to="/portfolio" variant="primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </MagneticButton>
            <MagneticButton as={Link} to="/contact" variant="secondary">
              <Calendar className="w-4 h-4" /> Book a Call
            </MagneticButton>
            <MagneticButton as={Link} to="/contact" variant="ghost">
              <FileText className="w-4 h-4" /> Get a Quote
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-9 border border-white/20 rounded-full flex items-start justify-center p-1.5"
        >
          <span className="w-1 h-1.5 bg-[#7c5cff] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
