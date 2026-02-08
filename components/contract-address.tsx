"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Check, Copy } from "lucide-react"
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard"

export function ContractAddress() {
  const { copyToClipboard, isCopied } = useCopyToClipboard()
  const contractAddress = "3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX"

  return (
    <div className="flex flex-col items-center gap-3 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold">Contract Address</h3>
        <p className="text-sm text-muted-foreground">Copy the official $SNOWS token address</p>
      </div>

      <Card className="w-full p-6 hover:shadow-xl transition-all duration-300 border-border bg-card">
        <div className="flex items-center gap-3">
          <code className="flex-1 text-sm md:text-base font-mono font-semibold text-card-foreground break-all leading-relaxed bg-muted/30 px-4 py-3 rounded-lg">
            {contractAddress}
          </code>
          <Button
            size="lg"
            variant="default"
            className="h-12 w-12 p-0 shrink-0 rounded-lg"
            onClick={() => copyToClipboard(contractAddress)}
          >
            {isCopied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            <span className="sr-only">Copy contract address</span>
          </Button>
        </div>
        {isCopied && (
          <p className="text-sm text-green-500 font-medium mt-3 text-center animate-in fade-in slide-in-from-bottom-2">
            Copied to clipboard!
          </p>
        )}
      </Card>
    </div>
  )
}
