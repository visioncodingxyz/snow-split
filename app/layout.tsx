import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" })

export const metadata: Metadata = {
  title: "SnowSplit - $SNOWS | Earn While You Hold",
  description:
    "The revolutionary crypto token with automatic rewards. 10% transaction fee split between treasury and holders. Join the SnowSplit community today.",
  generator: "v0.app",
  icons: {
    icon: "/snowball-favicon.png",
    apple: "/snowball-favicon.png",
  },
  openGraph: {
    title: "SnowSplit - $SNOWS | Earn While You Hold",
    description:
      "The revolutionary crypto token with automatic rewards. 10% transaction fee split between treasury and holders. Join the SnowSplit community today.",
    images: [
      {
        url: "/snowball-favicon.png",
        width: 1200,
        height: 1200,
        alt: "SnowSplit - Blue and White Snowball Token",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SnowSplit - $SNOWS | Earn While You Hold",
    description:
      "The revolutionary crypto token with automatic rewards. 10% transaction fee split between treasury and holders. Join the SnowSplit community today.",
    images: ["/snowball-favicon.png"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
