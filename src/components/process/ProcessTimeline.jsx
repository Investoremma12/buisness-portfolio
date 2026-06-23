import {
  Phone,
  ClipboardList,
  PenTool,
  Code2,
  CheckCircle2,
  Rocket,
  LifeBuoy,
} from 'lucide-react'
import RevealOnScroll from '@/components/ui/RevealOnScroll'

const ICONS = { Phone, ClipboardList, PenTool, Code2, CheckCircle2, Rocket, LifeBuoy }

export default function ProcessTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Vertical connecting line */}
      <div className="absolute left-7 sm:left-9 top-4 bottom-4 w-px bg-gradient-to-b from-[#7c5cff] via-white/10 to-transparent" />

      <div className="flex flex-col gap-10">
        {steps.map((step, i) => {
          const Icon = ICONS[step.icon]
          return (
            <RevealOnScroll key={step.step} delay={i * 0.08}>
              <div className="relative flex gap-6 sm:gap-8 pl-0">
                {/* Icon node */}
                <div className="relative flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 rounded-2xl bg-[#7c5cff]/10 border border-[#7c5cff]/25 flex items-center justify-center z-10">
                  <Icon className="w-6 h-6 text-[#a78bfa]" />
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#08090d] border border-[#7c5cff]/40 flex items-center justify-center text-[10px] font-bold text-[#a78bfa]">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <div className="pb-2 pt-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h3 className="text-white font-semibold text-xl">{step.title}</h3>
                    <span className="text-[#a78bfa] text-xs font-medium uppercase tracking-wide">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed max-w-lg">{step.description}</p>
                </div>
              </div>
            </RevealOnScroll>
          )
        })}
      </div>
    </div>
  )
}
