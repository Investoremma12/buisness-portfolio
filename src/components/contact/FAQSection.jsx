import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const FAQS = [
  {
    q: 'How long does a typical project take?',
    a: 'It depends on scope. A landing page can be ready in 3–5 days, a full business website in 1–2 weeks, and a complete e-commerce platform in 3–5 weeks. You\'ll get a specific timeline after the discovery call.',
  },
  {
    q: 'Do I need to know exactly what I want before reaching out?',
    a: 'Not at all. Most clients start with a general idea, and the discovery call is exactly where we figure out the specifics together. Just bring the problem you\'re trying to solve.',
  },
  {
    q: 'What do you need from me to get started?',
    a: 'Usually just your branding (logo, colors, if you have them), any existing content like text or images, and a clear sense of what you want the site to achieve. If you don\'t have branding yet, that can be worked out too.',
  },
  {
    q: 'Do you offer support after the site launches?',
    a: 'Yes. Every project includes a support window after launch for fixes and small adjustments — the relationship doesn\'t end the moment the site goes live.',
  },
  {
    q: 'Can you redesign my existing website instead of building new?',
    a: 'Yes — website redesigns are one of the core services. We\'d look at what\'s working, what isn\'t, and rebuild around a stronger structure and design.',
  },
  {
    q: 'How does payment work?',
    a: 'Projects typically start with a deposit to begin work, with the remaining balance due at specific milestones or on completion. Exact terms are agreed on before any work starts.',
  },
]

function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-white font-medium text-[15px]">{q}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-4.5 h-4.5 text-white/40" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <p className="text-white/45 text-sm leading-relaxed pb-5 pr-8">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative py-24 lg:py-32 border-t border-white/[0.06]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="text-center mb-12">
          <SectionEyebrow>
            <span className="mx-auto">FAQ</span>
          </SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Common questions.
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div>
            {FAQS.map((faq, i) => (
              <FAQItem
                key={faq.q}
                {...faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
