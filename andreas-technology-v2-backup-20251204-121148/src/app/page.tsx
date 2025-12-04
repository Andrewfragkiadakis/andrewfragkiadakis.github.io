'use client'

import dynamic from 'next/dynamic'
import HeroOverlay from '@/components/dom/HeroOverlay'
import Navigation from '@/components/dom/Navigation'
import About from '@/components/dom/About'
import Experience from '@/components/dom/Experience'
import Projects from '@/components/dom/Projects'
import Contact from '@/components/dom/Contact'

const Experience3D = dynamic(() => import('@/components/canvas/Experience'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* Navigation - Highest layer */}
      <Navigation />

      {/* Binary Trail Canvas - Fixed Background with mouse interaction */}
      <div className="fixed inset-0 z-0">
        <Experience3D />
      </div>

      {/* Main scrollable container with snap */}
      <main id="scroller" className="relative h-screen overflow-y-scroll snap-y snap-mandatory">
        {/* Hero Section */}
        <section id="hero" className="relative w-full h-screen snap-start snap-always bg-transparent">
          <div className="relative z-10 pointer-events-none">
            <HeroOverlay />
          </div>
        </section>

        {/* Content Sections on top of binary trail */}
        <div className="relative z-10">
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>
      </main>
    </>
  )
}
