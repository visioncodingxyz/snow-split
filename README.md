# SnowSplit

A modern, festive-themed landing page for **$SNOWS**, a revolutionary Solana token that rewards holders automatically through an innovative TaxSplit mechanism.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com)
[![Built with Next.js](https://img.shields.io/badge/Built%20with-Next.js-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![Powered by Solana](https://img.shields.io/badge/Powered%20by-Solana-14F195?style=for-the-badge&logo=solana)](https://solana.com)

## 🎄 Overview

SnowSplit is a beautifully designed web application showcasing the $SNOWS token on the Solana blockchain. The platform features:

- **Automatic Holder Rewards**: Every transaction contributes to the ecosystem, returning SOL directly to holder wallets
- **Festive Design**: Winter-themed interface with snowfall animations and Christmas-inspired visuals
- **Real-time Trading**: Integrated links to Raydium for token swaps and DEXScreener for price charts
- **Community Engagement**: Easy access to X (Twitter) and Telegram communities

### Token Distribution
- **10%** Transaction Fee
  - **5%** Distributed to Holders (automatic rewards)
  - **5%** Allocated to Treasury

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd snow-split
```

2. **Install dependencies**
```bash
pnpm install
# or
npm install
```

3. **Run the development server**
```bash
pnpm dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
snow-split/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main landing page
│   └── globals.css              # Global styles
├── components/
│   ├── ui/                      # Radix UI components (50+ components)
│   ├── header.tsx               # Navigation header
│   ├── hero.tsx                 # Hero section with CTA
│   ├── tokenomics.tsx           # Token distribution visualization
│   ├── roadmap.tsx              # Project roadmap
│   ├── features.tsx             # Key features section
│   ├── contract-address.tsx     # Contract information display
│   ├── snowfall.tsx             # Animated snowfall effect
│   └── theme-provider.tsx       # Dark/light theme provider
├── hooks/
│   ├── use-copy-to-clipboard.tsx # Copy to clipboard utility
│   ├── use-mobile.ts            # Mobile detection
│   └── use-toast.ts             # Toast notification system
├── lib/
│   └── utils.ts                 # Utility functions
├── styles/
│   └── globals.css              # Global Tailwind styles
├── public/                       # Static assets
│   ├── snowball-logo.png        # Project logo
│   ├── snowball-favicon.png     # Favicon
│   ├── vision-coding-logo.png   # Built by attribution
│   └── ...                      # Additional assets
├── package.json                 # Dependencies
├── tsconfig.json                # TypeScript config
├── next.config.mjs              # Next.js config
├── tailwind.config.ts           # Tailwind CSS config
└── postcss.config.mjs           # PostCSS config
```

## 🛠 Technology Stack

### Core Framework
- **Next.js 16.0.3** - React meta-framework with server components
- **React 19.2.0** - UI library
- **TypeScript** - Type safety

### Styling & UI
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **Lucide React** - Icon library

### Forms & Validation
- **React Hook Form** - Performant form handling
- **Zod** - TypeScript-first schema validation

### Components & Features
- **Recharts** - Data visualization for tokenomics
- **Embla Carousel** - Carousel component
- **Sonner** - Toast notifications
- **Next.js Themes** - Dark/light theme switching
- **Vaul** - Drawer component library

### Utilities
- **Date-fns** - Date manipulation
- **Class Variance Authority** - Component style management
- **Tailwind Merge** - Tailwind CSS class merging

## 📖 Key Pages & Sections

### Hero Section
- Eye-catching headline: "Earn While You Hold $SNOWS"
- Call-to-action buttons for trading and charting
- Key metrics display (10% transaction fee breakdown)
- Animated background with snowfall effect

### Tokenomics
- Visual breakdown of token distribution
- Interactive charts showing holder rewards
- Treasury allocation information

### Roadmap
- Project milestones and timeline
- Feature releases and upcoming updates
- Development phases

### Contract Address
- Token contract details
- Easy copy-to-clipboard functionality
- Solana network verification links

### Community Section
- Links to X (Twitter) community
- Telegram group join button
- Network growth information

## 🎨 Features

### Design Elements
- **Snowfall Animation**: Ambient winter-themed background effect
- **Glassmorphism**: Modern frosted glass UI elements
- **Gradient Accents**: Color gradients for emphasis
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Dark/Light Mode**: Theme switching support via next-themes
- **Smooth Animations**: Fade-ins, slides, and floating effects

### Interactive Components
- Animated buttons with hover states
- Copy-to-clipboard functionality for contract addresses
- Smooth scrolling navigation
- Toast notifications for user feedback

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- Mobile devices (< 640px)
- Tablets (640px - 1024px)
- Desktop (> 1024px)

## 🔗 External Integrations

- **Raydium DEX**: Direct token swap integration
  - Link: https://raydium.io/swap/?inputMint=sol&outputMint=3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX
- **DEXScreener**: Live price charts
  - Link: https://dexscreener.com/solana/3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX
- **X (Twitter)**: Community engagement
- **Telegram**: Real-time updates and support

## 🚀 Deployment

### Build for Production
```bash
pnpm build
# or
npm run build
```

### Start Production Server
```bash
pnpm start
# or
npm start
```

### Deploy to Vercel
```bash
vercel
```

The application is optimized for deployment on Vercel or any Node.js hosting platform.

## 🧪 Development

### Linting
```bash
pnpm lint
# or
npm run lint
```

### Code Style
- ESLint configuration included
- TypeScript strict mode enabled
- Tailwind CSS class organization

## 📦 Component Library

The project includes a comprehensive UI component library with 50+ components from Radix UI:

**Inputs**: Button, Input, Textarea, Checkbox, Radio Group, Select, Toggle, Slider, Calendar, Date Picker, Input OTP, etc.

**Display**: Card, Badge, Alert, Progress, Separator, Avatar, Empty State, etc.

**Navigation**: Navigation Menu, Menubar, Breadcrumb, Pagination, Tabs, etc.

**Dialogs**: Dialog, Alert Dialog, Sheet, Drawer, Popover, Hover Card, etc.

**Forms**: Form, Field, Label, etc.

**Tables**: Table component with styling

**Carousels**: Embla-based carousel component

**Charts**: Recharts integration for data visualization

## 🎯 Token Contract

**Contract Address**: `3oXjSdhYiNU5pQbHshmF838Yxym5jwRqDBTgmKzqvTAX`

**Blockchain**: Solana

Visit [Solscan](https://solscan.io/) to view detailed token analytics and transactions.

## 🏗️ Built By

[Vision Coding](https://visioncoding.xyz) - Professional web development and blockchain solutions

## 📄 License

This project is private and proprietary. All rights reserved © 2026 SnowSplit.

## 🤝 Contributing

For development inquiries and feature requests, please reach out through the official community channels on X or Telegram.

## 📞 Support

- **X (Twitter)**: [@SnowSplit Community](https://x.com/i/communities/1995171213744779440)
- **Telegram**: [https://t.me/snow_split](https://t.me/snow_split)

## ⚠️ Disclaimer

This is a community token on the Solana blockchain. Always do your own research (DYOR) before investing. Cryptocurrency investments carry risk. Past performance does not guarantee future results.

---

**Version**: 0.1.0  
**Last Updated**: February 2026
