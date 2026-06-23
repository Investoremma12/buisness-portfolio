import RevealOnScroll from '@/components/ui/RevealOnScroll'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import FAQSection from '@/components/contact/FAQSection'
import GlassCard from '@/components/ui/GlassCard'
import SEO from '@/components/ui/SEO'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — Tech Trove"
        description="Get in touch to start your project — email, WhatsApp, or the contact form below. Typically responding within 24 hours."
      />
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 30% 20%, rgba(124,92,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl mb-5">
              Let's build something{' '}
              <span className="text-[#7c5cff]">worth having.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-lg">
              Tell me about your project and I'll get back to you within 24 hours
              with next steps.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            <RevealOnScroll className="lg:col-span-3" delay={0.05}>
              <GlassCard className="p-7 sm:p-9" hover={false}>
                <ContactForm />
              </GlassCard>
            </RevealOnScroll>
            <RevealOnScroll className="lg:col-span-2" delay={0.1}>
              <ContactInfo />
            </RevealOnScroll>
          </div>
        </div>
      </section>

      <FAQSection />
    </>
  )
}
