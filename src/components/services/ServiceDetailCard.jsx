import { Link } from 'react-router-dom'
import {
  Building2,
  ShoppingCart,
  Rocket,
  Briefcase,
  RefreshCw,
  Palette,
  Check,
  Clock,
  Package,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import GlassCard from '@/components/ui/GlassCard'
import MagneticButton from '@/components/ui/MagneticButton'

const ICONS = { Building2, ShoppingCart, Rocket, Briefcase, RefreshCw, Palette }

export default function ServiceDetailCard({ service, index }) {
  const Icon = ICONS[service.icon]
  const isEven = index % 2 === 0

  return (
    <RevealOnScroll delay={index * 0.05}>
      <GlassCard className="p-7 sm:p-9 lg:p-10" hover={false}>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left — overview */}
          <div className="lg:col-span-2">
            <div className="w-14 h-14 rounded-2xl bg-[#7c5cff]/10 border border-[#7c5cff]/20 flex items-center justify-center mb-6">
              <Icon className="w-6 h-6 text-[#a78bfa]" />
            </div>
            <h3 className="text-white font-bold text-2xl mb-2">{service.title}</h3>
            <p className="text-[#a78bfa] text-sm font-medium mb-4">{service.tagline}</p>
            <p className="text-white/45 text-sm leading-relaxed mb-6">{service.description}</p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Clock className="w-3.5 h-3.5" />
                {service.timeline}
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs">
                <Package className="w-3.5 h-3.5" />
                {service.deliverables.length} deliverables
              </div>
            </div>

            <div className="mt-7">
              <MagneticButton as={Link} to="/contact" variant="secondary" className="text-xs px-5 py-2.5">
                Get a Quote
              </MagneticButton>
            </div>
          </div>

          {/* Right — features / benefits / deliverables */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                What's Included
              </h4>
              <ul className="flex flex-col gap-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/65">
                    <Check className="w-4 h-4 text-[#7c5cff] flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Why It Matters
              </h4>
              <ul className="flex flex-col gap-2.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] flex-shrink-0 mt-1.5" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </GlassCard>
    </RevealOnScroll>
  )
}
