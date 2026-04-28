import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { HeroCarousel } from "@/components/hero-carousel"

export const metadata: Metadata = {
  title: "Engabi Ensamba Clan SACCO | Home - Pooling Resources Together",
  description:
    "Engabi Ensamba Clan SACCO is a registered Savings and Credit Cooperative Organization empowering clan members through savings, affordable loans, and community support. Join over 200+ members today.",
  keywords: [
    "Engabi Ensamba Clan SACCO",
    "Engabi Ensamba Clan",
    "Engabi Ensamba Clan SACCO",
    "SACCO",
    "Uganda SACCO",
    "Clan SACCO",
    "Savings and Credit",
    "Affordable Loans",
    "Buganda Clan",
    "Financial Empowerment",
  ],
  openGraph: {
    title: "Engabi Ensamba Clan SACCO | Pooling Resources Together",
    description:
      "Join our growing community of 200+ clanmates building wealth together through savings and affordable loans.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bD7ZKfdrwveu4I9I0wlvCy1hhcb2bh.jpeg",
    ],
    type: "website",
    locale: "en_UG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engabi Ensamba Clan SACCO",
    description:
      "Empowering clan members through savings and affordable loans.",
  },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  PiggyBank,
  TrendingUp,
  Shield,
  HandCoins,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const features = [
  {
    icon: PiggyBank,
    title: "Savings Culture",
    description:
      "Build a strong savings habit with our flexible savings plans designed for every clan member.",
  },
  {
    icon: HandCoins,
    title: "Low Interest Loans",
    description:
      "Access cheap money with low interest rates to grow your business and meet your needs.",
  },
  {
    icon: Users,
    title: "Community Support",
    description:
      "Join a supportive network of clanmates working together for mutual prosperity.",
  },
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Get financial support to expand your business, from poultry to retail and beyond.",
  },
  {
    icon: Shield,
    title: "Secure Investments",
    description:
      "Your savings are protected and managed by elected, trustworthy board members.",
  },
  {
    icon: Building2,
    title: "Registered SACCO",
    description:
      "Officially registered with the Ministry of Trade and Cooperatives since March 2026.",
  },
]

const stats = [
  { value: "200+", label: "Active Members" },
  { value: "6000+", label: "Shares Owned" },
  { value: "3+", label: "Groups Established" },
  { value: "2025", label: "Year Founded" },
]

const testimonials = [
  {
    quote:
      "The SACCO helped me secure a loan to buy chicks for my broiler business. Now I supply to restaurants across Kampala!",
    author: "Namatovu Oliver",
    role: "A Happy Member",
  },
  {
    quote:
      "With the support of Engabi Ensamba Clan SACCO, I was able to expand my retail shop and increase my income.",
    author: "Lilian Namuyomba",
    role: "Grateful Member",
  }
]

export default function HomePage() {
  return (
    <>
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Welcome Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                Welcome to Our SACCO
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Empowering Clanmates Through Unity and Savings
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Engabi Ensamba Clan SACCO was established on 7th May 2025 by
                dedicated clanmates who came together to create a culture of
                savings and mutual financial support. Today, we have grown to
                over 200 members with close to 6000 shares.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Pool resources for collective growth",
                  "Support businesses with affordable loans",
                  "Build a strong savings culture",
                  "Empower every clan member financially",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image%201-NxiIL1m9QFnD8hikwdnCceOHxDDDGh.jpeg"
                  alt="Engabi Ensamba Clan SACCO Members"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-foreground">200+</p>
                    <p className="text-muted-foreground">Active Members</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </p>
                <p className="text-primary-foreground/80 text-sm md:text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Benefits of Joining Our SACCO
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the advantages of being part of Engabi Ensamba Clan
              SACCO and how we can help you achieve your financial goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card hover:shadow-lg transition-shadow duration-300 border-none"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Testimonials
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              What Our Members Say
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-5 h-5 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-foreground italic mb-4 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Ready to Join Our Growing Family?
          </h2>
          <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Become a member of Engabi Ensamba Clan SACCO today and start your
            journey towards financial empowerment. Together, we can achieve
            more.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8"
              >
                Become a Member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-secondary font-semibold px-8"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
