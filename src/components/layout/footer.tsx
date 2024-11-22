import Link from "next/link"
import { FacebookLogo, InstagramLogo, EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react/dist/ssr"
import { SITE_CONFIG } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="bg-background-secondary border-t">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="font-semibold text-xl tracking-tight">{SITE_CONFIG.name}</h3>
            <p className="text-muted-foreground">{SITE_CONFIG.description}</p>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-xl tracking-tight">Contact</h3>
            <div className="space-y-4">
              <Link 
                href={`tel:${SITE_CONFIG.contact.phone}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <Phone weight="duotone" className="size-5" />
                <span>{SITE_CONFIG.contact.phone}</span>
              </Link>
              <Link 
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
              >
                <EnvelopeSimple weight="duotone" className="size-5" />
                <span>{SITE_CONFIG.contact.email}</span>
              </Link>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin weight="duotone" className="size-5 flex-shrink-0" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="font-semibold text-xl tracking-tight">Follow Us</h3>
            <div className="flex gap-6">
              <Link 
                href={SITE_CONFIG.social.facebook}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookLogo weight="duotone" className="size-6" />
              </Link>
              <Link 
                href={SITE_CONFIG.social.instagram}
                className="text-muted-foreground hover:text-foreground transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo weight="duotone" className="size-6" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 