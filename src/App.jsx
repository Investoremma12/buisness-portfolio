import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import PageTransition from '@/components/ui/PageTransition'

// Lazy-load heavier pages so the initial bundle stays light.
const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))
const Portfolio = lazy(() => import('@/pages/Portfolio'))
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'))
const Services = lazy(() => import('@/pages/Services'))
const Process = lazy(() => import('@/pages/Process'))
const Contact = lazy(() => import('@/pages/Contact'))

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#08090d]">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-[#7c5cff] border-t-transparent rounded-full animate-spin" />
        <span className="text-white/30 text-xs tracking-widest uppercase">Loading</span>
      </div>
    </div>
  )
}

/** Resets scroll position to top whenever the route changes. */
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' })
  }, [pathname])
  return null
}

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/portfolio" element={<PageTransition><Portfolio /></PageTransition>} />
        <Route path="/portfolio/:id" element={<PageTransition><ProjectDetail /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgress />
      <div className="font-sans antialiased bg-[#08090d] text-white overflow-x-hidden min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Suspense fallback={<LoadingFallback />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </BrowserRouter>
  )
}
