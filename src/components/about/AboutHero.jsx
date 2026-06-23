import { motion } from 'framer-motion'

export default function AboutHero() {
  return (
    <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 20% 30%, rgba(124,92,255,0.15) 0%, transparent 50%)',
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
            About
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight max-w-3xl mb-6">
            Bridging the gap between{' '}
            <span className="text-[#7c5cff]">logic and art.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            I'm Emmanuel Onyibe — a frontend architect obsessed with how the web
            feels, not just how it works. I build digital experiences for
            businesses that want their website to feel as serious as their work.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
