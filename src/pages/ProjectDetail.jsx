import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react'
import { PROJECTS } from '@/data/projects'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import GlassCard from '@/components/ui/GlassCard'
import MagneticButton from '@/components/ui/MagneticButton'
import ImageGalleryCarousel from '@/components/portfolio/ImageGalleryCarousel'
import ProjectCard from '@/components/portfolio/ProjectCard'
import SEO from '@/components/ui/SEO'

export default function ProjectDetail() {
  const { id } = useParams()
  const project = PROJECTS.find((p) => p.id === id)

  if (!project) return <Navigate to="/portfolio" replace />

  const related = PROJECTS.filter((p) => p.id !== id).slice(0, 2)

  return (
    <>
      <SEO
        title={`${project.title} — Tech Trove`}
        description={project.tagline}
      />
      {/* Hero banner */}
      <section className="relative pt-32 pb-0">
        <div className="relative h-[45vh] sm:h-[55vh] overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/30 to-transparent" />
          <div
            className="absolute inset-0 opacity-30 mix-blend-multiply"
            style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }}
          />

          <div className="absolute top-6 left-4 sm:left-6 lg:left-8">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main */}
            <div className="lg:col-span-2">
              <RevealOnScroll>
                <span
                  className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{ backgroundColor: `${project.color}1A`, color: project.color }}
                >
                  {project.category}
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mt-4 mb-3">
                  {project.title}
                </h1>
                <p className="text-white/50 text-lg leading-relaxed mb-10">{project.tagline}</p>

                <h2 className="text-white font-semibold text-xl mb-3">Overview</h2>
                <p className="text-white/45 leading-relaxed mb-10">{project.description}</p>

                <h2 className="text-white font-semibold text-xl mb-3">The Problem</h2>
                <p className="text-white/45 leading-relaxed mb-10">{project.problem}</p>

                <h2 className="text-white font-semibold text-xl mb-3">Design &amp; Build Process</h2>
                <p className="text-white/45 leading-relaxed mb-10">{project.process}</p>

                <h2 className="text-white font-semibold text-xl mb-4">Gallery</h2>
                <div className="mb-12">
                  <ImageGalleryCarousel images={project.gallery} title={project.title} />
                </div>

                <h2 className="text-white font-semibold text-xl mb-4">Results Achieved</h2>
                <ul className="flex flex-col gap-3 mb-2">
                  {project.results.map((r) => (
                    <li key={r} className="flex items-start gap-3 text-white/65 text-sm leading-relaxed">
                      <CheckCircle2 className="w-4.5 h-4.5 text-[#7c5cff] flex-shrink-0 mt-0.5" />
                      {r}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <RevealOnScroll delay={0.1}>
                <GlassCard className="p-6 sticky top-28" hover={false}>
                  <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-white/70 bg-white/[0.05] px-3 py-1.5 rounded-full border border-white/[0.08]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                    Key Features
                  </h3>
                  <ul className="flex flex-col gap-2.5 mb-7">
                    {project.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/60">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] flex-shrink-0 mt-1.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <MagneticButton
                    as="a"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Visit Live Site <ExternalLink className="w-4 h-4" />
                  </MagneticButton>
                </GlassCard>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* Related projects */}
      {related.length > 0 && (
        <section className="relative py-16 lg:py-20 border-t border-white/[0.06] bg-white/[0.015]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <RevealOnScroll>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-8">
                More projects
              </h2>
            </RevealOnScroll>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p, i) => (
                <RevealOnScroll key={p.id} delay={i * 0.1}>
                  <ProjectCard project={p} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
