import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const CONTACT_METHODS = [
	{
		icon: Mail,
		label: 'Email',
		value: 'ttrove402@gmail.com',
		sub: 'I typically reply within 24 hours',
		href: 'mailto:ttrove402@gmail.com',
	},
	{
		icon: MessageCircle,
		label: 'WhatsApp',
		value: '+234 708 527 9302',
		sub: 'Quick questions get quick answers',
		href: 'https://wa.me/2347085279302',
	},
	{
		icon: Phone,
		label: 'Phone',
		value: '+234 708 527 9302',
		sub: 'Mon – Sat, 10AM – 8PM',
		href: 'tel:+2347085279302',
	},
	{
		icon: MapPin,
		label: 'Location',
		value: 'Lagos, Nigeria',
		sub: 'Working with clients worldwide',
		href: null,
	},
];

export default function ContactInfo() {
	return (
		<div className="flex flex-col gap-4">
			{/* Availability badge */}
			<GlassCard className="p-5 flex items-center gap-3" hover={false}>
				<span className="relative flex h-2.5 w-2.5">
					<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
					<span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
				</span>
				<div>
					<p className="text-white font-semibold text-sm">
						Currently available
					</p>
					<p className="text-white/40 text-xs">
						Accepting new projects for this quarter
					</p>
				</div>
			</GlassCard>

			{CONTACT_METHODS.map(({ icon: Icon, label, value, sub, href }) => (
				<GlassCard key={label} className="p-5 flex items-start gap-4">
					<div className="w-10 h-10 rounded-xl bg-[#7c5cff]/10 border border-[#7c5cff]/20 flex items-center justify-center flex-shrink-0">
						<Icon className="w-4.5 h-4.5 text-[#a78bfa]" />
					</div>
					<div>
						<p className="text-white/40 text-xs font-semibold uppercase tracking-wide mb-1">
							{label}
						</p>
						{href ? (
							<a
								href={href}
								target={href.startsWith('http') ? '_blank' : undefined}
								rel="noopener noreferrer"
								className="text-white font-medium text-sm hover:text-[#a78bfa] transition-colors duration-200 block"
							>
								{value}
							</a>
						) : (
							<p className="text-white font-medium text-sm">{value}</p>
						)}
						<p className="text-white/30 text-xs mt-0.5">{sub}</p>
					</div>
				</GlassCard>
			))}
		</div>
	);
}
