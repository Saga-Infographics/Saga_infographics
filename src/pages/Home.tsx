import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <Stats />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  )
}
