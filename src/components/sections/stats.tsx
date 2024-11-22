import { STATS } from "@/lib/constants"
import { 
  Clock, 
  Users, 
  Trophy, 
  Star 
} from "@phosphor-icons/react/dist/ssr"

const getIcon = (iconName: string) => {
  const icons = {
    Clock,
    Users,
    Trophy,
    Star,
  }
  return icons[iconName as keyof typeof icons] || Star
}

export function Stats() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const Icon = getIcon(stat.icon)
            return (
              <div 
                key={stat.label} 
                className="p-6 rounded-xl bg-accent/50 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="size-14 rounded-xl bg-primary/10 text-primary mx-auto flex items-center justify-center mb-4">
                  <Icon weight="duotone" className="size-7" />
                </div>
                <div className="font-semibold text-3xl mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 