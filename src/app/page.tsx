import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/landing/HeroSection'
import PositioningSection from '@/components/landing/PositioningSection'
import ScenariosSection from '@/components/landing/ScenariosSection'
import StatsSection from '@/components/landing/StatsSection'
import CTASection from '@/components/landing/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <PositioningSection />
        <ScenariosSection />
        <StatsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
