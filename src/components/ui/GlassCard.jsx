import { cn } from '@/lib/utils'

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <div
      className={cn(
        'bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl rounded-2xl',
        hover && 'transition-all duration-300 hover:bg-white/[0.05] hover:border-white/[0.15]',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
