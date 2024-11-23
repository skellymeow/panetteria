"use client"

import { useState } from "react"
import Link from "next/link"
import { List, X, Phone, ArrowRight, Bread } from "@phosphor-icons/react/dist/ssr"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { LeadCaptureForm } from "@/components/forms/lead-capture"
import { LEAD_FORM } from "@/lib/constants"
import { ThemeSwitch } from "@/components/theme-switch"
import Image from "next/image"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-20">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Image 
              src="/logo.jpg"
              alt={SITE_CONFIG.name}
              width={200}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
            <Link 
              href="/menu"
              className="interactive-hover group"
            >
              <Button>
                Menu
                <Bread 
                  weight="duotone" 
                  className="ml-2 transition-transform group-hover:translate-x-1" 
                />
              </Button>
            </Link>
            <ThemeSwitch />
          </nav>

          {/* mobile menu button */}
          <button 
            className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X weight="duotone" className="size-6" />
            ) : (
              <List weight="duotone" className="size-6" />
            )}
          </button>

          {/* mobile nav */}
          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-y animate-in slide-in-from-top duration-300">
              <nav className="container py-6 flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link 
                    key={item.href}
                    href={item.href} 
                    className="text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-md hover:bg-accent"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link 
                  href="/menu"
                  onClick={() => setIsOpen(false)}
                >
                  <Button className="w-full group">
                    Menu
                    <Bread 
                      weight="duotone" 
                      className="ml-2 transition-transform group-hover:translate-x-1" 
                    />
                  </Button>
                </Link>
                <ThemeSwitch />
              </nav>
            </div>
          )}
        </div>
      </header>

      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={LEAD_FORM.title}
      >
        <LeadCaptureForm onSuccess={() => setIsModalOpen(false)} />
      </Modal>
    </>
  )
} 