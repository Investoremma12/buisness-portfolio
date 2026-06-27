import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  return (
    <Link to={`/portfolio/${project.id}`} className="group block h-full">
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="relative h-full rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.08] hover:border-white/[0.18] transition-colors duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div
            className="absolute inset-0 opacity-40 mix-blend-multiply"
            style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/10 to-transparent" />

          <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Info */}
        <div className="p-6 flex-1 flex flex-col">
          {project.category && (
            <span
              className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full w-fit"
              style={{ backgroundColor: `${project.color}1A`, color: project.color }}
            >
              {project.category}
            </span>
          )}
          <h3 className="text-white font-semibold text-lg mt-3 mb-1.5 group-hover:text-[#a78bfa] transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-white/40 text-sm leading-relaxed mb-4 flex-1">{project.tagline}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="text-[11px] text-white/40 bg-white/[0.04] px-2 py-1 rounded-md border border-white/[0.06]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
