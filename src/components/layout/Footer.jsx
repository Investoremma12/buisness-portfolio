import { Link } from 'react-router-dom';
import { Mail, Phone, Github, Linkedin, Twitter } from 'lucide-react';

const NAV_LINKS = [
	{ label: 'Home', path: '/' },
	{ label: 'About', path: '/about' },
	{ label: 'Portfolio', path: '/portfolio' },
	{ label: 'Services', path: '/services' },
	{ label: 'Process', path: '/process' },
	{ label: 'Contact', path: '/contact' },
];

const SOCIALS = [
	{ icon: Github, href: 'https://github.com/Investoremma12/', label: 'GitHub' },
	{ icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
	{ icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
	return (
		<footer className="relative border-t border-white/[0.06] bg-[#08090d]">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
					{/* Brand */}
					<div className="lg:col-span-2">
						<Link to="/" className="flex items-center gap-2.5 mb-4 w-fit">
							<span className="text-[#7c5cff] font-mono text-lg font-bold">
								{'<'}/{'>'}
							</span>
							<span className="text-white font-bold text-base">
								Tech<span className="text-[#7c5cff]">Trove</span>
							</span>
						</Link>
						<p className="text-white/40 text-sm leading-relaxed max-w-sm mb-6">
							A frontend architect building premium, high-performance websites
							for businesses that want to look as good online as they perform in
							person.
						</p>
						<div className="flex gap-3">
							{SOCIALS.map(({ icon: Icon, href, label }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={label}
									className="w-10 h-10 rounded-full bg-white/[0.04] hover:bg-[#7c5cff] border border-white/[0.08] hover:border-[#7c5cff] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200"
								>
									<Icon className="w-4 h-4" />
								</a>
							))}
						</div>
					</div>

					{/* Nav */}
					<div>
						<h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
							Navigate
						</h4>
						<ul className="flex flex-col gap-3">
							{NAV_LINKS.map(({ label, path }) => (
								<li key={path}>
									<Link
										to={path}
										className="text-white/60 hover:text-[#a78bfa] text-sm transition-colors duration-200"
									>
										{label}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em] mb-5">
							Get in Touch
						</h4>
						<div className="flex flex-col gap-3">
							<a
								href="mailto:ttrove402@gmail.com"
								className="flex items-center gap-2.5 text-white/60 hover:text-[#a78bfa] text-sm transition-colors duration-200"
							>
								<Mail className="w-4 h-4 flex-shrink-0" />
								ttrove402@gmail.com
							</a>
							<a
								href="tel:+2347085279302"
								className="flex items-center gap-2.5 text-white/60 hover:text-[#a78bfa] text-sm transition-colors duration-200"
							>
								<Phone className="w-4 h-4 flex-shrink-0" />
								+234 708 527 9302
							</a>
						</div>
					</div>
				</div>

				{/* Bottom bar */}
				<div className="border-t border-white/[0.06] mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
					<p className="text-white/30 text-xs">
						© {new Date().getFullYear()} Tech Trove. All rights reserved.
					</p>
					<p className="text-white/30 text-xs">
						Crafted with React, Tailwind &amp; Framer Motion.
					</p>
				</div>
			</div>
		</footer>
	);
}
