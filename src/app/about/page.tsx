"use client"

import Image from "next/image"
import { Bread, Clock, Heart, Sparkle } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const features = [
  {
    icon: Bread,
    title: "Artisanal Process",
    description: "Every loaf is naturally leavened and hand-shaped, taking 24-48 hours from start to finish."
  },
  {
    icon: Clock,
    title: "Fresh Daily",
    description: "Our bakers arrive at 3am to ensure everything is fresh-baked each morning."
  },
  {
    icon: Heart,
    title: "Local Love",
    description: "Proudly serving Amherstburg since 2020, we're grateful to be part of this amazing community."
  },
  {
    icon: Sparkle,
    title: "Quality First",
    description: "We use premium ingredients and traditional techniques to create exceptional breads and pastries."
  }
] as const

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* hero section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 mask-radial-faded" />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <div className="content-badge">Est. 2020</div>
            <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
            <p className="text-lg text-muted-foreground">
              Located in the heart of downtown historic Amherstburg, The Panetteria is an artisan bakery specializing in naturally leavened breads and handcrafted pastries.
            </p>
          </div>
        </div>
      </section>

      {/* features grid */}
      <section className="py-20 bg-background-secondary/50">
        <div className="container">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="glass-panel p-6 rounded-xl space-y-4">
                <feature.icon weight="duotone" className="size-8 text-primary" />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* content section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Small Batch, Big Heart</h2>
              <p className="text-lg text-muted-foreground">
                Focusing on quality, small-scale production is at the heart of what we do. We make our breads and pastries by hand daily, using traditional techniques and the finest ingredients.
              </p>
              <p className="text-lg text-muted-foreground">
                We pride ourselves on creating variety, flavor, and quality in every item that leaves our bakery. Our naturally leavened sourdough breads take 24-48 hours to produce, developing complex flavors and a perfect crust.
              </p>
              <Button size="lg" className="group" asChild>
                <Link href="/menu">
                  View Our Menu
                  <Bread 
                    weight="duotone" 
                    className="ml-2 transition-transform group-hover:translate-x-1" 
                  />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/about-hero.jpg"
                alt="Fresh bread"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 