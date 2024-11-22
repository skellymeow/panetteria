"use client"

import { Services } from "@/components/sections/services"
import { AnimatedSection } from "@/components/ui/animated-section"

export default function ServicesPage() {
  return (
    <main className="relative">
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(26,115,232,0.1),rgba(255,255,255,0)_50%)] pointer-events-none" />
      <Services />
    </main>
  )
} 