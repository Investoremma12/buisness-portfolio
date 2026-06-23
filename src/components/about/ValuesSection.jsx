import { Zap, Shield, Sparkles, Target } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import GlassCard from '@/components/ui/GlassCard'

const VALUES = [
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'A beautiful site that loads slowly is a beautiful site nobody sees. Speed is treated as a feature, not an afterthought.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Clean, scalable code that doesn\'t fall apart when your business grows or your catalog doubles in size.',
  },
  {
    icon: Sparkles,
    title: 'Detail-Obsessed',
    desc: 'The difference between good and great is usually in the details most people never consciously notice — that\'s where I spend the extra hour.',
  },
  {
    icon: Target,
    title: 'Results-Driven',
    desc: 'A website exists to do something for your business. Every design decision is judged against whether it helps that goal.',
  },
]

const REASONS = [
  'Direct communication — no account managers, no middlemen',
  'Built with modern, future-proof technology',
  'Performance and accessibility treated as standard, not upsells',
  'Ongoing support after launch, not disappearance after payment',
]

export default function ValuesSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-14">
          <SectionEyebrow>Core Values</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-lg">
            What guides every project.
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-24">
          {VALUES.map(({ icon: Icon, title, desc }, i) => (
            <RevealOnScroll key={title} delay={i * 0.08}>
              <GlassCard className="p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-[#7c5cff]/10 border border-[#7c5cff]/20 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#a78bfa]" />
                </div>
                <h3 className="text-white font-semibold mb-2">{title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>

        {/* Why clients choose me */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <RevealOnScroll>
            <SectionEyebrow>Why Clients Choose Me</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
              Working directly with the person<br />who builds your site.
            </h2>
            <p className="text-white/45 leading-relaxed">
              No layers of account managers, no outsourced development you never
              meet. You talk to me from the first call to the final launch — which
              means faster decisions, clearer communication, and a site that
              actually reflects what we discussed.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <ul className="flex flex-col gap-4">
              {REASONS.map((reason) => (
                <li key={reason} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cff] mt-2 flex-shrink-0" />
                  <span className="text-white/60 text-[15px] leading-relaxed">{reason}</span>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  )
}
