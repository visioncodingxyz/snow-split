"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse snow-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse snow-pulse"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse snow-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Christmas sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 rounded-full text-sm text-primary font-semibold animate-in fade-in zoom-in-95 duration-700 backdrop-blur-sm shimmer relative overflow-hidden">
            <Sparkles className="w-5 h-5 sparkle" />
            <span className="relative z-10">Festive TaxSplit Launch on Solana 🎄</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <span className="block mb-2">Earn While You</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent glow relative">
              Hold $SNOWS
              <span className="absolute -top-4 -right-8 text-4xl animate-bounce">❄️</span>
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            The revolutionary Solana token that rewards holders automatically. Every transaction contributes to the
            ecosystem and puts SOL back in your wallet through our festive TaxSplit mechanism.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              asChild
              size="lg"
              className="text-lg px-8 h-14 font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground group relative overflow-hidden"
            >
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center">
                  Get $SNOWS Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 shimmer" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 font-semibold bg-transparent border-2 hover:bg-primary/10"
            >
              <a
                href="https://dexscreener.com/solana/3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Chart
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
            <div className="space-y-2 float" style={{ animationDelay: "0s" }}>
              <div className="text-4xl md:text-5xl font-bold text-foreground glow">10%</div>
              <div className="text-sm text-muted-foreground font-medium">Transaction Fee</div>
              <div className="text-2xl">🎁</div>
            </div>
            <div className="space-y-2 float" style={{ animationDelay: "0.3s" }}>
              <div className="text-4xl md:text-5xl font-bold text-foreground glow">5%</div>
              <div className="text-sm text-muted-foreground font-medium">To Holders</div>
              <div className="text-2xl">❄️</div>
            </div>
            <div className="space-y-2 float" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl md:text-5xl font-bold text-foreground glow">5%</div>
              <div className="text-sm text-muted-foreground font-medium">To Treasury</div>
              <div className="text-2xl">🎄</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
