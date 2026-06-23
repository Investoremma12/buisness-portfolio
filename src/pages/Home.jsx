import Hero from '@/components/home/Hero'
import StatsSection from '@/components/home/StatsSection'
import ServicesPreview from '@/components/home/ServicesPreview'
import FeaturedProjects from '@/components/home/FeaturedProjects'
import Testimonials from '@/components/home/Testimonials'
import CTASection from '@/components/home/CTASection'
import SEO from '@/components/ui/SEO'

export default function Home() {
  return (
    <>
      <SEO
        title="Tech Trove — Premium Web Development Studio"
        description="We build premium, high-performance websites for businesses — from landing pages to full e-commerce platforms. Built with React, Tailwind, and Framer Motion."
      />
      <Hero />
      <StatsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  )
}
