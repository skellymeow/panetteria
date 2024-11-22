import { FEATURES } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { 
  Star, 
  Users, 
  Lightning, 
  Headset 
} from "@phosphor-icons/react/dist/ssr"

const getIcon = (iconName: string) => {
  const icons = {
    Star,
    Users,
    Lightning,
    Headset,
  }
  return icons[iconName as keyof typeof icons] || Star
}

export function Features() {
  return (
    <section className="py-20 md:py-32 bg-background-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg">
            Experience excellence with our comprehensive solutions and dedicated support
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <Card 
                key={feature.id}
                className="p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="size-14 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center mb-6">
                  <Icon weight="duotone" className="size-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
} 