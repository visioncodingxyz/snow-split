import { Card } from "@/components/ui/card"
import { Lock, Zap, Globe, BarChart3 } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Lock,
      title: "Secure & Audited",
      description: "Smart contracts audited by leading security firms for your peace of mind",
    },
    {
      icon: Zap,
      title: "Instant Rewards",
      description: "Automatic distribution of rewards with every transaction on the network",
    },
    {
      icon: Globe,
      title: "Community Driven",
      description: "Governed by holders with transparent voting on key decisions",
    },
    {
      icon: BarChart3,
      title: "Transparent Analytics",
      description: "Real-time dashboard showing treasury, holders, and transaction metrics",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance">Built for the Future</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            Enterprise-grade technology meets community-first values
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-card-foreground">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
