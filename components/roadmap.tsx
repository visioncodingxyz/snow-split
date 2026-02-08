"use client"

import { CheckCircle2, Circle, Sparkles } from "lucide-react"
import { Card } from "@/components/ui/card"

const roadmapItems = [
  {
    phase: "Phase 1",
    title: "Launch on TaxSplit",
    status: "completed",
    items: [
      "Festive TaxSplit launch event",
      "Initial token distribution",
      "Smart contract deployment on Solana",
      "Community building kickoff",
    ],
  },
  {
    phase: "Phase 2",
    title: "Community Growth",
    status: "in-progress",
    items: [
      "Major exchange listings",
      "Partnership announcements",
      "Marketing campaign launch",
      "Holder rewards distribution",
    ],
  },
  {
    phase: "Phase 3",
    title: "Ecosystem Expansion",
    status: "upcoming",
    items: [
      "NFT collection launch",
      "Staking platform release",
      "Mobile app development",
      "Cross-chain bridge integration",
    ],
  },
  {
    phase: "Phase 4",
    title: "Global Adoption",
    status: "upcoming",
    items: ["Strategic partnerships", "DeFi integrations", "Governance token launch", "Worldwide marketing push"],
  },
]

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Roadmap to the <span className="text-primary">Future</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our strategic plan for building the most rewarding token on Solana
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {roadmapItems.map((item, index) => (
            <Card
              key={item.phase}
              className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-mono text-muted-foreground">{item.phase}</span>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.status === "completed"
                        ? "bg-green-500/10 text-green-500"
                        : item.status === "in-progress"
                          ? "bg-blue-500/10 text-blue-500"
                          : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {item.status === "completed"
                      ? "✓ Done"
                      : item.status === "in-progress"
                        ? "In Progress"
                        : "Upcoming"}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground text-balance">{item.title}</h3>

                <ul className="space-y-3">
                  {item.items.map((task, taskIndex) => (
                    <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      {item.status === "completed" ? (
                        <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      ) : (
                        <Circle className="w-4 h-4 mt-0.5 shrink-0" />
                      )}
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
