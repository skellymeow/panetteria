import { ABOUT_CONTENT, MILESTONES, LAYOUT, STYLE } from "@/lib/constants"
import { 
  Trophy, Users, Clock, Star,
  Certificate, Medal, Handshake 
} from "@phosphor-icons/react/dist/ssr"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CTA } from "@/components/sections/cta"
import { AnimatedSection } from "@/components/ui/animated-section"

const stats = [
  { label: "Years Experience", value: "10+", icon: Clock },
  { label: "Team Members", value: "50+", icon: Users },
  { label: "Awards Won", value: "25+", icon: Trophy },
  { label: "Client Rating", value: "4.9", icon: Star },
]

const values = [
  { 
    title: "Excellence", 
    desc: "Committed to delivering the highest quality",
    icon: Certificate 
  },
  { 
    title: "Experience", 
    desc: "Years of industry expertise",
    icon: Medal 
  },
  { 
    title: "Partnership", 
    desc: "Building lasting relationships",
    icon: Handshake 
  },
]

export function About() {
  return (
    <>
      <AnimatedSection variant="fadeIn">
        <section className="section">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="headline-badge content-badge">About Us</div>
                  <h1 className="headline-stagger headline-stagger-1">
                    Our Story
                    <span className="headline-subtitle text-primary block mt-2">And Mission</span>
                  </h1>
                  <p className="headline-stagger headline-stagger-2 text-xl text-muted-foreground">
                    {ABOUT_CONTENT.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg">
                    Join Our Team
                  </Button>
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map(({ label, value, icon: Icon }) => (
                  <Card key={label} className={STYLE.card.feature}>
                    <Icon weight="duotone" className={STYLE.icon.feature} />
                    <div className="text-3xl font-bold mb-2">{value}</div>
                    <div className="text-muted-foreground">{label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.2}>
        <section className="section-tight bg-background-secondary">
          <div className="container">
            <h2 className="text-center mb-16">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map(({ title, desc, icon: Icon }) => (
                <div key={title} className="relative group">
                  <div className={STYLE.card.service}>
                    <div className="size-14 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
                      <Icon weight="duotone" className="size-7" />
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-center">{title}</h4>
                    <p className="text-muted-foreground text-center">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="fadeIn" delay={0.1}>
        <section className="section bg-background">
          <div className="container">
            <h2 className="text-center mb-16">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-16">
                {MILESTONES.map((milestone, i) => (
                  <div key={milestone.year} className="relative group">
                    <div className="flex gap-8 items-start">
                      <div className="size-16 shrink-0 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                        {milestone.year}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{milestone.title}</h4>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </div>
                    </div>
                    {i !== MILESTONES.length - 1 && (
                      <div className="absolute left-[2.25rem] top-16 w-px h-16 bg-border group-last:hidden" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection variant="slideUp" delay={0.2}>
        <section className="section-compact">
          <div className="absolute inset-0 bg-gradient-accent" />
          <div className="container relative">
            <CTA 
              badge="Join Us"
              title="Ready to Be Part of Our Story?"
              description="Let's create something amazing together"
              primaryCta="Get Started"
              secondaryCta="Learn More"
            />
          </div>
        </section>
      </AnimatedSection>
    </>
  )
} 