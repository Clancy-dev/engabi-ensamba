import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: {
    default: "Engabi Ensamba Clan SACCO | Empowering Clanmates Through Savings",
    template: "%s | Engabi Ensamba Clan SACCO",
  },

  description:
    "Engabi Ensamba Clan SACCO is a trusted community savings and credit cooperative empowering clan members in Uganda through affordable loans, financial discipline, and collective growth.",

  keywords: [
    "Engabi Ensamba Clan SACCO",
    "Engabi Ensamba SACCO",
    "SACCO Uganda",
    "Clan SACCO",
    "Savings and Credit Uganda",
    "Buganda SACCO",
    "Community savings Uganda",
    "Affordable loans Uganda",
    "Cooperative financial group",
  ],

  authors: [{ name: "Engabi Ensamba Clan SACCO" }],

  creator: "Engabi Ensamba Clan SACCO",

  metadataBase: new URL("https://engabiensamba.com"),

  openGraph: {
    title: "Engabi Ensamba Clan SACCO | Savings That Empower Our Clan",
    description:
      "Join Engabi Ensamba Clan SACCO and be part of a strong financial community built on trust, savings, and affordable lending for clan members in Uganda.",
    url: "https://engabiensamba.com",
    siteName: "Engabi Ensamba Clan SACCO",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Engabi Ensamba Clan SACCO",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Engabi Ensamba Clan SACCO",
    description:
      "Empowering clan members through savings, loans, and financial growth in Uganda.",
    images: ["/images/og-image.jpg"],
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
      },
    ],
    apple: "/apple-icon.png",
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background">
        <Header />
        <main>{children}</main>
        <Footer />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
