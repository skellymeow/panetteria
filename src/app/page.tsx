"use client"

import { MapPin, FacebookLogo, InstagramLogo, ArrowDown, Clock } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import { SITE_CONFIG } from "@/lib/constants"
import { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bread } from "@phosphor-icons/react/dist/ssr"

export default function Home() {
  const { isOpen, status, statusColor } = useMemo(() => {
    const now = new Date()
    const day = now.toLocaleDateString('en-US', { weekday: 'long' })
                   .toLowerCase() as keyof typeof SITE_CONFIG.hours
    
    const time = now.getHours() * 100 + now.getMinutes()
    
    const hours = SITE_CONFIG.hours[day]
    if (hours === "Closed") {
      return { isOpen: false, status: "Closed", statusColor: "text-red-500" }
    }

    const [open, close] = hours.toLowerCase().split(" - ")
    const openTime = parseInt(open.replace("am", "")) * 100
    const closeTime = parseInt(close.replace("pm", "")) * 100 + 1200

    if (time < openTime) {
      return { isOpen: false, status: "Opens Today " + open, statusColor: "text-amber-500" }
    } else if (time >= closeTime) {
      return { isOpen: false, status: "Closed", statusColor: "text-red-500" }
    } else if (time >= closeTime - 100) {
      return { isOpen: true, status: "Closing Soon", statusColor: "text-amber-500" }
    } else {
      return { isOpen: true, status: "Open Now", statusColor: "text-emerald-500" }
    }
  }, [])

  return (
    <main className="min-h-screen pt-20">
      {/* hero fold */}
      <section className="relative min-h-[85vh] flex items-center justify-center">
        {/* artisanal background pattern */}
        <div className="absolute inset-0 bg-grid-gray-100 dark:bg-grid-gray-800 mask-radial-faded" />
        <div className="absolute inset-0 bg-gradient-subtle" />
        
        <div className="container relative">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            {/* badge */}
            <div className="content-badge headline-badge">
              Artisanal Bakery • Est. 2020
            </div>
            
            <div className="space-y-6">
              <h1 className="headline-stagger">
                Welcome to The Panetteria
                <span className="headline-subtitle block mt-2 text-primary/80">
                  Handcrafted with Love in Amherstburg
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto headline-stagger-2">
                Artisanal breads and pastries, baked fresh daily in historic Amherstburg.
              </p>
            </div>

            {/* cta group */}
            <div className="flex flex-wrap items-center justify-center gap-4 headline-stagger-3">
              <Button size="lg" className="group">
                Get Directions
                <MapPin weight="duotone" className="ml-2 size-5" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://facebook.com/thepanetteria" target="_blank" rel="noopener">
                  Follow Us
                  <FacebookLogo weight="duotone" className="ml-2 size-5" />
                </a>
              </Button>
            </div>

            {/* social proof */}
            <div className="flex items-center justify-center gap-6 text-muted-foreground headline-stagger-4">
              <a href="https://facebook.com/thepanetteria" target="_blank" rel="noopener" className="footer-link-icon">
                <FacebookLogo weight="duotone" className="size-6" />
              </a>
              <a href="https://instagram.com/thepanetteria" target="_blank" rel="noopener" className="footer-link-icon">
                <InstagramLogo weight="duotone" className="size-6" />
              </a>
            </div>
          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown weight="duotone" className="size-6 text-primary" />
        </div>
      </section>

      {/* hours + map fold */}
      <section className="py-20 bg-background-secondary/50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* hours card */}
            <div className="glass-panel rounded-2xl p-8 space-y-6">
              <h2 className="text-3xl font-bold">Hours of Operation</h2>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(SITE_CONFIG.hours).map(([day, hours]) => {
                  const isToday = day === new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase()
                  
                  return (
                    <div 
                      key={day}
                      className={`py-4 px-6 rounded-xl relative ${
                        hours === "Closed" 
                          ? "bg-accent/50" 
                          : "bg-background/50"
                      } ${
                        isToday ? "border-2 border-primary/20" : ""
                      }`}
                    >
                      <div className="text-muted-foreground capitalize mb-1 flex items-center justify-between">
                        {day}
                        {isToday && (
                          <span className={`text-sm font-medium ${statusColor} flex items-center gap-1.5`}>
                            <span className={`size-2 rounded-full ${isOpen ? "bg-emerald-500" : "bg-red-500"}`} />
                            {status}
                          </span>
                        )}
                      </div>
                      <div className={`font-medium ${
                        hours === "Closed" 
                          ? "text-muted" 
                          : "text-foreground"
                      }`}>
                        {hours}
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex items-center gap-2 text-muted text-sm mt-6">
                <Clock weight="duotone" className="size-4" />
                Hours may vary on holidays
              </div>
            </div>

            {/* map card */}
            <div className="glass-panel rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2958.8655461447837!2d-83.09078492346976!3d42.10338547127621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2b1f11111111%3A0x0!2s248%20Ramsay%20St%2C%20Amherstburg%2C%20ON%20N9V%201Y2!5e0!3m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-medium">The Panetteria</h3>
                  <span className={`text-sm font-medium ${statusColor} flex items-center gap-1.5`}>
                    <span className={`size-2 rounded-full ${isOpen ? "bg-emerald-500" : "bg-red-500"}`} />
                    {status}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm">
                  {SITE_CONFIG.contact.address}
                </p>
                <Button 
                  variant="link" 
                  className="mt-2 h-auto p-0"
                  asChild
                >
                  <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(SITE_CONFIG.contact.address)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                    <MapPin className="ml-1 size-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* menu preview fold */}
      <section className="py-20">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl font-bold">Our Daily Selection</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handcrafted breads and pastries, baked fresh every morning with love and care.
            </p>
          </div>

          {/* preview grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              "AlmondCroissant.png",     // beautiful lamination + luxe vibe
              "sourdough-window.jpg",    // iconic bread shot
              "cinnamon-bun.jpg",        // comfort food appeal
              "strawberry-tart.jpg",     // fresh + colorful
              "row-of-croissants.jpg",   // shows abundance + craftsmanship
              "WalnutRaisin2.png"        // artisanal texture + premium ingredients
            ].map((image, i) => (
              <div 
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-accent/50"
              >
                <Image
                  src={`/menu/${image}`}
                  alt="Menu preview"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          {/* cta */}
          <div className="flex justify-center">
            <Button 
              size="lg" 
              className="group"
              asChild
            >
              <Link href="/menu">
                View Full Menu
                <Bread 
                  weight="duotone" 
                  className="ml-2 size-5 transition-transform group-hover:translate-x-1" 
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
