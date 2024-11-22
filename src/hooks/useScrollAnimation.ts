import { useInView } from 'framer-motion'
import { useRef } from 'react'

type AnimationVariant = 'fadeIn' | 'slideUp' | 'slideInLeft' | 'slideInRight' | 'scaleUp'

interface UseAnimationProps {
  variant?: AnimationVariant
  delay?: number
  duration?: number
  once?: boolean
  margin?: string
}

export function useScrollAnimation({
  variant = 'fadeIn',
  delay = 0,
  duration = 0.5,
  once = true,
  margin = "-100px"
}: UseAnimationProps = {}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: margin as `${number}px` })

  const variants = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    slideUp: {
      hidden: { opacity: 0, y: 32 },
      visible: { opacity: 1, y: 0 }
    },
    slideInLeft: {
      hidden: { opacity: 0, x: -32 },
      visible: { opacity: 1, x: 0 }
    },
    slideInRight: {
      hidden: { opacity: 0, x: 32 },
      visible: { opacity: 1, x: 0 }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    }
  }

  const animation = {
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
    variants: variants[variant],
    transition: {
      duration,
      delay,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }

  return { ref, animation }
} 