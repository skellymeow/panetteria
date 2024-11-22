"use client"

import { HTMLMotionProps, motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

interface AnimatedSectionProps extends HTMLMotionProps<"div"> {
  variant?: 'fadeIn' | 'slideUp' | 'slideInRight' | 'slideInLeft' | 'scaleUp'
  delay?: number
  margin?: string
  once?: boolean
}

export function AnimatedSection({
  children,
  variant = 'fadeIn',
  delay = 0,
  margin = '-100px',
  once = true,
  ...props
}: AnimatedSectionProps) {
  const { ref, animation } = useScrollAnimation({ variant, delay, margin, once })

  return (
    <motion.div
      ref={ref}
      {...animation}
      {...props}
    >
      {children}
    </motion.div>
  )
} 