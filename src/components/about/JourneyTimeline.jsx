import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

const MILESTONES = [
  {
    year: 'The Start',
    title: 'First Lines of Code',
    desc: 'Started learning web development out of pure curiosity — what began as tinkering quickly became a genuine obsession with how things are built.',
  },
  {
    year: 'Early Projects',
    title: 'Building for Real People',
    desc: 'Moved from practice projects to building for actual businesses — learning that good code means nothing if it doesn\'t solve a real problem for a real client.',
  },
  {
    year: 'Going Deeper',
    title: 'Mastering the Modern Stack',
    desc: 'Doubled down on React, TypeScript, and modern tooling — focusing on performance and motion design as a craft, not an afterthought.',
  },
  {
    year: 'Today',
    title: 'Building a Practice',
    desc: 'Now working directly with businesses to design and build premium websites — combining technical depth with an entrepreneur\'s eye for what actually drives results.',
  },
]

export default function JourneyTimeline() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="mb-16">
          <SectionEyebrow>Professional Journey</SectionEyebrow>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            How I got here.
          </h2>
        </RevealOnScroll>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[#7c5cff] via-white/10 to-transparent" />

          <div className="flex flex-col gap-12">
            {MILESTONES.map((m, i) => (
              <RevealOnScroll key={m.title} delay={i * 0.1} className="relative pl-10">
                {/* Dot */}
                <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-[#7c5cff] ring-4 ring-[#08090d] shadow-[0_0_12px_rgba(124,92,255,0.6)]" />

                <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-widest">
                  {m.year}
                </span>
                <h3 className="text-white font-semibold text-xl mt-1.5 mb-2">{m.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed max-w-lg">{m.desc}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
