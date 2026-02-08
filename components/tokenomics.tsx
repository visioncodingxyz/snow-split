"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Coins, TrendingUp, Shield, Users } from "lucide-react"

export function Tokenomics() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".scroll-reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: Coins,
      title: "10% Transaction Fee",
      description: "Every buy and sell on Solana automatically contributes to the festive ecosystem growth",
      color: "text-primary",
      bgColor: "bg-primary/10",
      emoji: "🎁",
    },
    {
      icon: Users,
      title: "5% to Holders",
      description: "Half of every transaction is distributed proportionally to all $SNOWS holders",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      emoji: "❄️",
    },
    {
      icon: Shield,
      title: "5% to Treasury",
      description: "Funds development, marketing, and long-term sustainability through TaxSplit",
      color: "text-accent",
      bgColor: "bg-accent/10",
      emoji: "🎄",
    },
    {
      icon: TrendingUp,
      title: "Passive Income",
      description: "Watch your wallet grow simply by holding $SNOWS tokens on Solana",
      color: "text-primary",
      bgColor: "bg-primary/10",
      emoji: "⛄",
    },
  ]

  return (
    <section ref={sectionRef} id="tokenomics" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-10 left-10 text-6xl animate-bounce" style={{ animationDelay: "0s" }}>
          🎄
        </div>
        <div className="absolute top-20 right-20 text-5xl animate-bounce" style={{ animationDelay: "0.5s" }}>
          ❄️
        </div>
        <div className="absolute bottom-20 left-1/4 text-5xl animate-bounce" style={{ animationDelay: "1s" }}>
          🎁
        </div>
        <div className="absolute bottom-10 right-1/3 text-6xl animate-bounce" style={{ animationDelay: "1.5s" }}>
          ⛄
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance glow">How SnowSplit Works</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            A transparent and festive tokenomics model on Solana, powered by TaxSplit
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <Card
                key={feature.title}
                className="p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-border bg-card/80 backdrop-blur-sm scroll-reveal relative overflow-hidden group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-16 h-16 rounded-xl ${feature.bgColor} flex items-center justify-center sparkle`}>
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <span className="text-4xl float">{feature.emoji}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
