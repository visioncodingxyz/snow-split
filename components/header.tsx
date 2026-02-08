"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="relative w-10 h-10">
              <Image src="/snowball-logo.png" alt="SnowSplit Logo" fill className="object-contain" priority />
            </div>
            <span className="text-2xl font-bold text-foreground">SnowSplit</span>
            <span className="text-sm font-mono text-muted-foreground bg-muted px-2 py-1 rounded">$SNOWS</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "How it Works", id: "tokenomics" },
              { name: "Roadmap", id: "roadmap" },
              { name: "Community", id: "community" },
            ].map((item, i) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors animate-in fade-in slide-in-from-top-2 duration-700"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4 animate-in fade-in slide-in-from-right-4 duration-700">
            <Button asChild className="font-semibold bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://raydium.io/swap/?inputMint=sol&outputMint=3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy $SNOWS
              </a>
            </Button>
          </div>

          <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-4">
              {[
                { name: "How it Works", id: "tokenomics" },
                { name: "Roadmap", id: "roadmap" },
                { name: "Community", id: "community" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild className="font-semibold w-full bg-primary hover:bg-primary/90">
                <a
                  href="https://raydium.io/swap/?inputMint=sol&outputMint=3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy $SNOWS
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
