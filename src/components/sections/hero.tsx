"use client"

import { motion } from 'framer-motion'
import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { HERO_CONTENT } from "@/lib/constants"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center border-b">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/20 animate-gradient-shift" />
      <div className="absolute inset-0 bg-grid-primary/[0.03] mix-blend-overlay" />
      
      <div className="container py-20 relative">
        <motion.div 
          className="max-w-3xl space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <motion.div 
            className="space-y-4 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="headline-badge content-badge">
              {HERO_CONTENT.badge}
            </div>
            
            <h1 className="headline-stagger headline-stagger-1">
              {HERO_CONTENT.title}
              <span className="headline-subtitle text-primary block mt-2">
                {HERO_CONTENT.subtitle}
              </span>
            </h1>
            
            <p className="headline-stagger headline-stagger-2 text-xl text-muted-foreground">
              {HERO_CONTENT.description}
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10">{HERO_CONTENT.cta.primary}</span>
              <motion.span 
                className="absolute inset-0 bg-primary-hover opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ scale: 1.05 }}
              />
              <ArrowRight 
                weight="duotone" 
                className="ml-2 relative z-10 transition-transform group-hover:translate-x-1" 
              />
            </Button>
            <Button size="lg" variant="outline" className="group">
              {HERO_CONTENT.cta.secondary}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 