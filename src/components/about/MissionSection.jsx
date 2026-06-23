import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function MissionSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-white/[0.015] border-y border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll>
          <SectionEyebrow>
            <span className="mx-auto">Mission</span>
          </SectionEyebrow>
          <p className="text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-tight tracking-tight">
            "Every business deserves a website that{' '}
            <span className="text-[#7c5cff]">matches the quality</span> of what
            they actually do — not a template that makes them look smaller than
            they are."
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
