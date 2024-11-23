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
    <section className="page-section-secondary">
      <div className="section-container">
        <div className="section-header">
          <h2 className="text-foreground">Why Choose Us</h2>
          <p className="text-muted">
            Experience excellence with our comprehensive solutions and dedicated support
          </p>
        </div>

        <div className="section-grid md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => {
            const Icon = getIcon(feature.icon)
            return (
              <div key={feature.id} className="card-feature card-hover">
                <div className="icon-base mb-6 mx-auto">
                  <Icon weight="duotone" className="icon-feature" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-muted text-center">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 