import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import MagneticButton from '@/components/ui/MagneticButton'

export default function CTASection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-50 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(124,92,255,0.15) 0%, transparent 60%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6">
            Have a project<br />
            <span className="text-[#7c5cff]">worth building well?</span>
          </h2>
          <p className="text-white/50 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Let's talk about what you're trying to build — and what it would take
            to make it fast, modern, and genuinely good.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <MagneticButton as={Link} to="/contact" variant="primary" className="px-9 py-4 text-base">
              Start a Project <ArrowRight className="w-4 h-4" />
            </MagneticButton>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
