import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import ProblemSolution from '@/components/sections/ProblemSolution'
import Process from '@/components/sections/Process'
import Section3 from '@/components/sections/Section3'
import Section4 from '@/components/sections/Section4'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProblemSolution />
      <Process />
      <Section3 />
      <Section4 />
      <CTASection />
      <Footer />
    </main>
  )
}

