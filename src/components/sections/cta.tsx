"use client"

import { ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import { ANIMATIONS, STYLE } from "@/lib/constants"

interface CTAProps {
  badge?: string
  title: string
  description: string
  primaryCta: string
  secondaryCta?: string
}

export function CTA({ badge, title, description, primaryCta, secondaryCta }: CTAProps) {
  return (
    <div className="text-center space-y-8">
      {badge && (
        <div className={STYLE.badge.primary}>
          {badge}
        </div>
      )}
      
      <div className={`space-y-4 ${ANIMATIONS.scroll.fadeIn}`}>
        <h2 className="text-balance">{title}</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {description}
        </p>
      </div>

      <div className={`flex flex-wrap justify-center gap-4 ${ANIMATIONS.scroll.slideUp}`}>
        <Button size="lg" className="group">
          {primaryCta}
          <ArrowRight 
            weight="duotone" 
            className="ml-2 transition-transform group-hover:translate-x-1" 
          />
        </Button>
        {secondaryCta && (
          <Button size="lg" variant="outline">
            {secondaryCta}
          </Button>
        )}
      </div>
    </div>
  )
} 