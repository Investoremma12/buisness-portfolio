import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { useCounter } from '@/hooks/useCounter'
import { STATS } from '@/data/content'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

function StatItem({ value, suffix, label, start, delay }) {
  const count = useCounter(value, 1700, start)
  return (
    <RevealOnScroll delay={delay} className="text-center">
      <p className="text-4xl sm:text-5xl font-bold text-white tabular-nums mb-2">
        {count}
        <span className="text-[#7c5cff]">{suffix}</span>
      </p>
      <p className="text-white/40 text-sm">{label}</p>
    </RevealOnScroll>
  )
}

export default function StatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-20 border-y border-white/[0.06] bg-white/[0.015]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 lg:divide-x lg:divide-white/[0.06]">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} {...stat} start={inView} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
