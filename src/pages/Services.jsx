import { SERVICES } from '@/data/services'
import ServiceDetailCard from '@/components/services/ServiceDetailCard'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import CTASection from '@/components/home/CTASection'
import SEO from '@/components/ui/SEO'

export default function Services() {
  return (
    <>
      <SEO
        title="Services & Pricing — Tech Trove"
        description="Business websites, e-commerce platforms, landing pages, portfolio sites, redesigns, and UI/UX design — with clear timelines and deliverables."
      />
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 30%, rgba(124,92,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl mb-5">
              Packages built around{' '}
              <span className="text-[#7c5cff]">what your business needs.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-lg">
              Every service includes a clear timeline, defined deliverables, and
              direct communication from start to finish.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {SERVICES.map((service, i) => (
              <ServiceDetailCard key={service.id} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
