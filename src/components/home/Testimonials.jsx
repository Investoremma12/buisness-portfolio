import { Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/data/content'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'
import GlassCard from '@/components/ui/GlassCard'

const AVATAR_COLORS = ['#7c5cff', '#a78bfa', '#7c5cff', '#a78bfa']

export default function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center max-w-xl mx-auto mb-14">
          <SectionEyebrow>
            <span className="mx-auto">Client Words</span>
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Trusted by businesses<br />that wanted it{' '}
            <span className="text-[#7c5cff]">done right.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid sm:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <RevealOnScroll key={t.name} delay={i * 0.08}>
              <GlassCard className="p-7 h-full flex flex-col">
                <Quote className="w-8 h-8 text-[#7c5cff]/30 mb-4" />
                <p className="text-white/70 text-[15px] leading-relaxed flex-1 mb-6">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold text-xs flex-shrink-0"
                    style={{ backgroundColor: AVATAR_COLORS[i % AVATAR_COLORS.length] }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-white/35 text-xs">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
