import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Building2,
  ShoppingCart,
  Rocket,
  Briefcase,
  RefreshCw,
  Palette,
  ArrowUpRight,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import GlassCard from '@/components/ui/GlassCard'

const ICONS = { Building2, ShoppingCart, Rocket, Briefcase, RefreshCw, Palette }

const PREVIEW_SERVICES = [
  { icon: 'Building2', title: 'Business Websites', desc: 'Professional sites that build instant credibility.' },
  { icon: 'ShoppingCart', title: 'E-commerce Websites', desc: 'Full online stores built to convert browsers into buyers.' },
  { icon: 'Rocket', title: 'Landing Pages', desc: 'Focused, high-conversion pages for campaigns and launches.' },
  { icon: 'Briefcase', title: 'Portfolio Websites', desc: 'Showcase your work the way it deserves to be seen.' },
  { icon: 'RefreshCw', title: 'Website Redesigns', desc: 'A modern rebuild for a business that\'s outgrown its site.' },
  { icon: 'Palette', title: 'UI/UX Design', desc: 'Interfaces designed for clarity and conversion.' },
]

export default function ServicesPreview() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionEyebrow>What I Do</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-lg">
              Services built for{' '}
              <span className="text-[#7c5cff]">real business results.</span>
            </h2>
          </div>
          <Link
            to="/services"
            className="flex-shrink-0 inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 group"
          >
            View all services
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PREVIEW_SERVICES.map(({ icon, title, desc }, i) => {
            const Icon = ICONS[icon]
            return (
              <RevealOnScroll key={title} delay={i * 0.08}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.25 }}>
                  <GlassCard className="p-7 h-full group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-[#7c5cff]/10 border border-[#7c5cff]/20 flex items-center justify-center mb-5 group-hover:bg-[#7c5cff] transition-colors duration-300">
                      <Icon className="w-5 h-5 text-[#a78bfa] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                  </GlassCard>
                </motion.div>
              </RevealOnScroll>
            )
          })}
        </div>
      </div>
    </section>
  )
}
