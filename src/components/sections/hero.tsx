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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm backdrop-blur-sm"
            >
              {HERO_CONTENT.badge}
            </motion.div>
            
            <motion.h1 
              className="text-balance relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {HERO_CONTENT.title}
              <span className="text-primary block mt-2 relative">
                {HERO_CONTENT.subtitle}
                <motion.span 
                  className="absolute -z-10 inset-0 bg-primary/5 rounded-lg blur-2xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-muted-foreground relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {HERO_CONTENT.description}
            </motion.p>
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