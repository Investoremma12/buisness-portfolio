import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from '@/components/ui/MagneticButton'

const LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Services', path: '/services' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between transition-all duration-500 rounded-2xl px-5 ${
            scrolled
              ? 'bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] py-3 shadow-lg shadow-black/20'
              : 'py-2'
          }`}
          aria-label="Primary navigation"
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="text-[#7c5cff] font-mono text-lg font-bold group-hover:text-[#a78bfa] transition-colors">
              {'<'}/{'>'}
            </span>
            <span className="text-white font-bold text-sm tracking-tight">
              Tech<span className="text-[#7c5cff]">Trove</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {LINKS.map(({ label, path }) => {
              const active = pathname === path
              return (
                <li key={path} className="relative">
                  <Link
                    to={path}
                    className={`relative block px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                      active ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="navActive"
                        className="absolute inset-0 bg-white/[0.08] rounded-full -z-10"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    {label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* CTA */}
          <div className="hidden lg:block">
            <MagneticButton as={Link} to="/contact" variant="primary" className="text-xs px-5 py-2.5">
              Get a Quote
            </MagneticButton>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden mx-4 mt-2"
          >
            <div className="bg-[#0d0e14]/95 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-4 flex flex-col gap-1">
              {LINKS.map(({ label, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    pathname === path
                      ? 'bg-white/[0.08] text-white'
                      : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 text-center bg-[#7c5cff] text-white font-semibold text-sm py-3 rounded-xl"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
