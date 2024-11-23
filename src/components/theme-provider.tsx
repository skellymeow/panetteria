"use client"

import * as React from "react"
import { ThemeProvider as NextThemeProvider, type ThemeProviderProps as NextThemeProviderProps } from "next-themes"

type ThemeProviderProps = {
  children: React.ReactNode
  attribute?: NextThemeProviderProps['attribute']
  defaultTheme?: string
  enableSystem?: boolean
}

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemeProvider {...props}>
      {children}
    </NextThemeProvider>
  )
} 