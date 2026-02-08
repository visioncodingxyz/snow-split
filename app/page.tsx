import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Tokenomics } from "@/components/tokenomics"
import { Roadmap } from "@/components/roadmap"
import { Snowfall } from "@/components/snowfall"
import { ContractAddress } from "@/components/contract-address"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      <Snowfall />
      <Header />
      <Hero />
      <Tokenomics />
      <Roadmap />

      <section id="community" className="py-24 px-4">
        <div className="container mx-auto max-w-4xl space-y-12">
          <ContractAddress />

          <div className="relative bg-card/40 backdrop-blur-md border border-border rounded-2xl p-12 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl" />
            <div className="relative">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Join Our Community</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Connect with fellow $SNOWS holders and stay updated on the latest news
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button
                  size="lg"
                  className="min-w-[200px] bg-foreground text-background hover:bg-foreground/90 font-semibold"
                  asChild
                >
                  <a href="https://x.com/i/communities/1995171213744779440" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Follow on X
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="min-w-[200px] font-semibold bg-transparent" asChild>
                  <a href="https://t.me/snow_split" target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                    </svg>
                    Join Telegram
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-6 px-4">
        <div className="container mx-auto max-w-4xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SnowSplit. All rights reserved.
          </p>
          <a
            href="https://visioncoding.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Built by
            <img
              src="/vision-coding-logo.png"
              alt="Vision Coding logo"
              width={20}
              height={20}
              className="inline-block"
            />
            <span className="font-semibold">Vision Coding</span>
          </a>
        </div>
      </footer>
    </main>
  )
}
