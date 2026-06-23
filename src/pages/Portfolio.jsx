import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/data/projects'
import ProjectCard from '@/components/portfolio/ProjectCard'
import PortfolioFilters from '@/components/portfolio/PortfolioFilters'
import RevealOnScroll from '@/components/ui/RevealOnScroll'
import SEO from '@/components/ui/SEO'

export default function Portfolio() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCategory = category === 'All' || p.category === category
      const matchSearch =
        search.trim() === '' ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.tagline.toLowerCase().includes(search.toLowerCase())
      return matchCategory && matchSearch
    })
  }, [category, search])

  return (
    <>
      <SEO
        title="Portfolio — Tech Trove"
        description="A showcase of websites and e-commerce platforms built for real businesses — explore the projects and the results they delivered."
      />
      <section className="relative pt-36 pb-16 lg:pt-44 lg:pb-20">
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 70% 20%, rgba(124,92,255,0.15) 0%, transparent 50%)',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <span className="text-[#a78bfa] text-xs font-semibold uppercase tracking-[0.2em] mb-5 block">
              Portfolio
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight max-w-2xl mb-5">
              A showcase of work built to{' '}
              <span className="text-[#7c5cff]">actually perform.</span>
            </h1>
            <p className="text-white/50 text-lg max-w-lg">
              Every project here was built with the same standard: fast, clean,
              and designed around what the business actually needed.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      <section className="relative pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PortfolioFilters
            activeCategory={category}
            onCategoryChange={setCategory}
            search={search}
            onSearchChange={setSearch}
          />

          {filtered.length > 0 ? (
            <motion.div
              layout
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ProjectCard project={project} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <div className="py-20 text-center">
              <p className="text-white/30 text-lg font-medium">No projects found.</p>
              <p className="text-white/20 text-sm mt-1">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
