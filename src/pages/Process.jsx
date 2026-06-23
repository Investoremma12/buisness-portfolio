import { PROCESS_STEPS } from '@/data/content'
import ProcessTimeline from '@/components/process/ProcessTimeline'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import CTASection from '@/components/home/CTASection'
import SEO from '@/components/ui/SEO'

export default function Process() {
  return (
    <>
      <SEO
        title="Process — Tech Trove"
        description="A clear, seven-step process from discovery call to launch and ongoing support — so you always know what happens next."
      />
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 30%, rgba(124,92,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              Process
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl mb-5">
              From first call to{' '}
              <span className="text-[#7c5cff]">launch day.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-lg">
              A clear, seven-step process — so you always know what's happening
              and what comes next.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProcessTimeline steps={PROCESS_STEPS} />
        </div>
      </section>

      <CTASection />
    </>
  )
}
