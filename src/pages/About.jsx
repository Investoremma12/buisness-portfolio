import AboutHero from '@/components/about/AboutHero'
import JourneyTimeline from '@/components/about/JourneyTimeline'
import MissionSection from '@/components/about/MissionSection'
import ValuesSection from '@/components/about/ValuesSection'
import CTASection from '@/components/home/CTASection'
import SEO from '@/components/ui/SEO'

export default function About() {
  return (
    <>
      <SEO
        title="About — Emmanuel Onyibe"
        description="Frontend architect and entrepreneur building premium websites for businesses. Learn about my journey, values, and approach to web development."
      />
      <AboutHero />
      <JourneyTimeline />
      <MissionSection />
      <ValuesSection />
      <CTASection />
    </>
  )
}
