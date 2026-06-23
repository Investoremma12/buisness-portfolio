import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SectionEyebrow from '@/components/ui/SectionEyebrow'

export default function FeaturedProjects() {
  return (
    <section className="relative py-24 lg:py-32 bg-white/[0.015] border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <SectionEyebrow>Featured Work</SectionEyebrow>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-lg">
              Projects built to{' '}
              <span className="text-[#7c5cff]">perform, not just look good.</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="flex-shrink-0 inline-flex items-center gap-2 text-white/60 hover:text-white text-sm font-medium transition-colors duration-200 group"
          >
            View full portfolio
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </Link>
        </RevealOnScroll>

        <div className="grid lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.1}>
              <Link to={`/portfolio/${project.id}`} className="group block">
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div
                      className="absolute inset-0 opacity-40 mix-blend-multiply"
                      style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/20 to-transparent" />

                    {/* Live link icon */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                      style={{ backgroundColor: `${project.color}1A`, color: project.color }}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-white font-semibold text-lg mt-3 mb-1.5 group-hover:text-[#a78bfa] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{project.tagline}</p>
                  </div>
                </motion.div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
