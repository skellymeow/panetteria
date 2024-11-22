"use client"

import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Testimonials } from "@/components/testimonials"
import { Stats } from "@/components/sections/stats"
import { CTA } from "@/components/sections/cta"
import { CTA_CONTENT, LAYOUT } from "@/lib/constants"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function Home() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(26,115,232,0.1),rgba(255,255,255,0)_50%)] pointer-events-none" />
      
      <Hero />
      
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-primary/[0.02] -z-10" />
        <div className={`${LAYOUT.section.spacing.default} bg-gradient-to-br from-background via-background to-accent/10`}>
          <AnimatedSection variant="fadeIn" className="container">
            <Features />
          </AnimatedSection>
        </div>
      </section>

      <section className={`${LAYOUT.section.spacing.default} bg-background relative`}>
        <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-accent/10 to-transparent -z-10" />
        <AnimatedSection variant="slideUp" delay={0.2} className="container">
          <Stats />
        </AnimatedSection>
      </section>

      <section className={`${LAYOUT.section.spacing.default} bg-background relative`}>
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-accent/5 to-transparent -z-10" />
        <AnimatedSection variant="fadeIn" delay={0.1} className="container">
          <Testimonials />
        </AnimatedSection>
      </section>

      <section className={`${LAYOUT.section.spacing.default} relative`}>
        <div className="absolute inset-0 bg-dot-pattern opacity-5 -z-10" />
        <AnimatedSection variant="slideUp" delay={0.2} className="container">
          <CTA 
            badge={CTA_CONTENT.badge}
            title={CTA_CONTENT.title}
            description={CTA_CONTENT.description}
            primaryCta={CTA_CONTENT.primary}
            secondaryCta={CTA_CONTENT.secondary}
          />
        </AnimatedSection>
      </section>
    </main>
  )
}
