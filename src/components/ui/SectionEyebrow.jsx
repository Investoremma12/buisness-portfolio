export default function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-[#7c5cff]" />
      <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.2em]">
        {children}
      </span>
    </div>
  )
}
