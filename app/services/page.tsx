import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { MiniHero } from "@/components/mini-hero"

export const metadata: Metadata = {
  title: "Our Services | Engabi Ensamba Clan SACCO - Savings & Loans",
  description:
    "Discover our comprehensive financial services including savings accounts, low-interest loans for business, education, agriculture, and retail. Share price at UGX 10,000 each.",
  keywords: [
    "SACCO services",
    "Low interest loans",
    "Savings accounts",
    "Business loans Uganda",
    "Education loans",
    "Agricultural loans",
    "Affordable credit",
  ],
  openGraph: {
    title: "Services | Engabi Ensamba Clan SACCO",
    description:
      "Savings, loans, and investment opportunities for clan members. Low interest rates and flexible terms.",
    images: [
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1920",
    ],
  },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  PiggyBank,
  HandCoins,
  TrendingUp,
  Users,
  Briefcase,
  GraduationCap,
  Home,
  Tractor,
  ShoppingBag,
  ArrowRight,
  CheckCircle2,
} from "lucide-react"

const mainServices = [
  {
    icon: PiggyBank,
    title: "Savings Accounts",
    description:
      "Build a strong financial foundation with our flexible savings plans. Members can save regularly and earn on their deposits while having access to emergency funds when needed.",
    features: [
      "Flexible deposit amounts",
      "Regular savings culture",
      "Emergency access when needed",
      "Earn on your deposits",
    ],
  },
  {
    icon: HandCoins,
    title: "Low Interest Loans",
    description:
      "Access affordable loans with competitive interest rates to support your business ventures, education needs, or personal emergencies. We believe in supporting our clanmates.",
    features: [
      "Competitive interest rates",
      "Flexible repayment terms",
      "Quick approval process",
      "No hidden charges",
    ],
  },
  {
    icon: Users,
    title: "Group Formation",
    description:
      "Form or join groups at different levels - headquarters, Ssiga, Mutuba, Lunyilili, or where you reside. Each group manages its day-to-day operations under the SACCO umbrella.",
    features: [
      "Multiple group levels",
      "Local management",
      "Peer support network",
      "Collective strength",
    ],
  },
  {
    icon: TrendingUp,
    title: "Investment Opportunities",
    description:
      "Purchase shares and invest in the SACCO&apos;s growth. With shares at UGX 10,000 each, every clan member can participate in building collective wealth.",
    features: [
      "Affordable share price",
      "Collective ownership",
      "Growing dividends",
      "Long-term wealth building",
    ],
  },
]

const loanTypes = [
  {
    icon: Briefcase,
    title: "Business Loans",
    description:
      "Expand your business, buy equipment, or increase your stock with our business-focused loans.",
  },
  {
    icon: GraduationCap,
    title: "Education Loans",
    description:
      "Support your children&apos;s or your own education with our affordable education financing.",
  },
  {
    icon: Tractor,
    title: "Agricultural Loans",
    description:
      "Invest in farming - from buying chicks for broilers to coffee processing equipment.",
  },
  {
    icon: ShoppingBag,
    title: "Retail Expansion",
    description:
      "Add items to your shop or start a new retail venture with our retail support loans.",
  },
  {
    icon: Home,
    title: "Emergency Loans",
    description:
      "Access quick funds during emergencies with our fast-track emergency loan facility.",
  },
]

const fundingSources = [
  {
    title: "Membership Fee",
    description: "One-time payment as shown in the by-laws",
  },
  {
    title: "Share Purchase",
    description: "Buy shares at UGX 10,000 each",
  },
  {
    title: "Nsamba Fund",
    description: "Annual contribution for clan development",
  },
  {
    title: "Operations Fee",
    description: "Annual contribution for office operations",
  },
  {
    title: "Regular Savings",
    description: "Monthly or weekly savings deposits",
  },
  {
    title: "Special Mobilization",
    description: "Funds for particular activities or investments",
  },
]

const successStories = [
  {
    title: "Poultry Farming Success",
    description:
      "A member received a loan to buy chicks for broilers and now supplies to restaurants across Kampala.",
    image: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?q=80&w=600",
  },
  {
    title: "Coffee Business Growth",
    description:
      "With our loan, a clanmate purchased coffee grinding machines and sealers, growing their coffee business.",
    image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=600",
  },
  {
    title: "Retail Shop Expansion",
    description:
      "A member added more items to her retail shop, increasing her income and customer base significantly.",
    image: "/shop.png",
  },
]

export default function ServicesPage() {
  return (
    <>
      <MiniHero
        title="Our Services"
        subtitle="Comprehensive financial solutions for every clan member"
        backgroundImage="/services.png"
      />

      {/* Main Services */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              What We Offer
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Core Services
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover how Engabi Ensamba Clan SACCO can help you achieve your
              financial goals
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-lg hover:shadow-xl transition-shadow"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-xl font-bold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                            <span className="text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Loan Types */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Financial Support
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Types of Loans Available
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer various loan types to meet your specific needs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanTypes.map((loan, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <loan.icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {loan.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {loan.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Each group has been given guidelines for loan applications.
              Register as a member to be guided.
            </p>
            <Link href="/membership">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Register to Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                How It Works
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                How We Operate
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Engabi Ensamba Clan SACCO welcomes clanmates from all corners of
                the clan within and outside the country. Each person is free to
                join one group at headquarters, Ssiga, Mutuba, Lunyilili, or
                where they reside.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Each group elects their leaders following guidelines set by the
                Engabi Ensamba Clan SACCO board executive within the Ministry of
                Cooperatives framework.
              </p>

              <div className="bg-muted rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-4">
                  Sources of Funds
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {fundingSources.map((source, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">
                          {index + 1}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-foreground text-sm">
                          {source.title}
                        </p>
                        <p className="text-muted-foreground text-xs">
                          {source.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/register.jpg"
                  alt="Financial planning and support"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-xl shadow-xl hidden md:block">
                <p className="text-3xl font-bold">UGX 10,000</p>
                <p className="text-sm text-primary-foreground/80">Per Share</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-semibold uppercase tracking-wider mb-2 text-secondary-foreground/80">
              Impact
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
              Success Stories
            </h2>
            <p className="text-secondary-foreground/90 text-lg">
              See how our members have benefited from the SACCO
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {story.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {story.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Ready to Access Our Services?
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Join Engabi Ensamba Clan SACCO today and start benefiting from our
            savings and loan programs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground font-semibold px-8"
              >
                Become a Member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
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
