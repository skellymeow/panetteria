import { Button } from "@/components/ui/button"
import { MAP_CONFIG, SITE_CONFIG } from "@/lib/constants"
import { 
  EnvelopeSimple, 
  MapPin, 
  Phone 
} from "@phosphor-icons/react/dist/ssr"

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-background-secondary">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2>Get in Touch</h2>
              <p className="text-muted-foreground text-lg">
                Ready to get started? Contact us today for a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Phone weight="duotone" className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <EnvelopeSimple weight="duotone" className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.contact.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <MapPin weight="duotone" className="size-5" />
                </div>
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    {SITE_CONFIG.contact.address}
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg" className="gap-2">
              Contact Us
              <Phone weight="duotone" className="size-4" />
            </Button>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden border bg-card">
            <iframe
              src={`https://www.openstreetmap.org/export/embed.html?bbox=-83.0986,42.0984,-83.0786,42.1084&layer=mapnik&marker=42.1034,-83.0886`}
              width="100%"
              height="100%"
              frameBorder="0"
              title="Map showing business location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 