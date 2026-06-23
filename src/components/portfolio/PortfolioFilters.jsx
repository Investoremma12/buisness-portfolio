import { Search } from 'lucide-react'
import { CATEGORIES } from '@/data/projects'

export default function PortfolioFilters({ activeCategory, onCategoryChange, search, onSearchChange }) {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-12">
      {/* Search */}
      <div className="relative flex-1 max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects..."
          aria-label="Search projects"
          className="w-full bg-white/[0.04] border border-white/[0.08] focus:border-[#7c5cff]/50 focus:ring-1 focus:ring-[#7c5cff]/20 text-white placeholder-white/30 text-sm pl-10 pr-4 py-3 rounded-full outline-none transition-all duration-200"
        />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-[#7c5cff] text-white shadow-lg shadow-[#7c5cff]/20'
                : 'bg-white/[0.04] border border-white/[0.08] text-white/50 hover:text-white hover:border-white/20'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  )
}
