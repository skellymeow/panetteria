import { 
  Briefcase, 
  Wrench,
  Medal,
  ArrowRight,
  ShieldCheck,
  Clock,
  CurrencyDollar,
  Check
} from "@phosphor-icons/react/dist/ssr"
import { SERVICES, LAYOUT, STYLE } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTA } from "@/components/sections/cta"
import { AnimatedSection } from "@/components/ui/animated-section"

type Service = {
  id: number
  title: string
  description: string
  benefits: string[]
  pricing?: string
  icon: "Briefcase" | "Wrench" | "Medal"
}

const getIcon = (iconName: Service['icon']) => {
  const icons = { Briefcase, Wrench, Medal }
  return icons[iconName] || Briefcase
}

export function Services() {
  return (
    <>
      <AnimatedSection variant="fadeIn">
        <section className={`${LAYOUT.section.spacing.default} overflow-hidden relative`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(26,115,232,0.1),rgba(255,255,255,0)_50%)] pointer-events-none" />
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className={STYLE.badge.primary}>
                    Professional Services
                  </div>
                  
                  <h1>
                    Expert Solutions
                    <span className="text-primary block mt-2">
                      For Your Business
                    </span>
                  </h1>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl">
                    {SERVICES[0].description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    Get Started
                    <ArrowRight className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 lg:gap-8">
                {SERVICES[0].benefits.map((benefit) => (
                  <Card key={benefit} className={STYLE.card.feature}>
                    <Check weight="duotone" className={STYLE.icon.feature} />
                    <div className="font-semibold text-center">{benefit}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.2}>
        <section className={`${LAYOUT.section.spacing.default} bg-background-secondary relative`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container">
            <h2 className="text-center mb-16">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Discovery", desc: "Understanding your needs" },
                { step: "2", title: "Strategy", desc: "Creating your solution" },
                { step: "3", title: "Implementation", desc: "Executing the plan" },
                { step: "4", title: "Support", desc: "Ongoing assistance" }
              ].map(({ step, title, desc }) => (
                <div key={step} className="relative group">
                  <div className={STYLE.card.service}>
                    <div className="size-12 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      {step}
                    </div>
                    <h4 className="text-xl font-semibold mb-2">{title}</h4>
                    <p className="text-muted-foreground">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.2}>
        <section className={`${LAYOUT.section.spacing.default} bg-background relative`}>
          <div className="absolute inset-0 bg-dot-pattern opacity-5" />
          <div className="container">
            <CTA 
              badge="Get Started"
              title="Ready to Transform Your Business?"
              description="Let's create a tailored solution for your needs"
              primaryCta="Contact Us"
              secondaryCta="Learn More"
            />
          </div>
        </section>
      </AnimatedSection>
    </>
  )
} 