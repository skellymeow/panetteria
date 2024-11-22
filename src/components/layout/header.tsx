"use client"

import { useState } from "react"
import Link from "next/link"
import { List, X, Phone, ArrowRight } from "@phosphor-icons/react/dist/ssr"
import { SITE_CONFIG } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Modal } from "@/components/ui/modal"
import { LeadCaptureForm } from "@/components/forms/lead-capture"
import { LEAD_FORM } from "@/lib/constants"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
] as const

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b">
        <div className="container flex items-center justify-between h-20">
          <Link href="/" className="font-semibold text-xl tracking-tight">
            {SITE_CONFIG.name}
          </Link>

          {/* desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href} 
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button 
              onClick={() => setIsModalOpen(true)}
              className="group"
            >
              Get Started
              <ArrowRight 
                weight="duotone" 
                className="ml-2 transition-transform group-hover:translate-x-1" 
              />
            </Button>
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
            <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b md:hidden animate-in slide-in-from-top">
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
                <Button 
                  onClick={() => setIsModalOpen(true)}
                  className="group"
                >
                  Get Started
                  <ArrowRight 
                    weight="duotone" 
                    className="ml-2 transition-transform group-hover:translate-x-1" 
                  />
                </Button>
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