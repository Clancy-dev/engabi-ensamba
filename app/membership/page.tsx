import type { Metadata } from "next"
import { MiniHero } from "@/components/mini-hero"
import { MembershipForm } from "@/components/membership-form"

export const metadata: Metadata = {
  title: "Become a Member | Engabi Ensamba Clan SACCO - Join Today",
  description:
    "Join Engabi Ensamba Clan SACCO today. Apply for membership online, access savings accounts, low-interest loans, and be part of a supportive community of over 200 clanmates.",
  keywords: [
    "SACCO membership",
    "Join SACCO",
    "Membership application",
    "Clan membership",
    "Savings cooperative",
    "Uganda cooperative",
  ],
  openGraph: {
    title: "Join Engabi Ensamba Clan SACCO",
    description:
      "Apply for membership and start your journey towards financial empowerment with our growing community.",
    images: [
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920",
    ],
  },
}
import { Card, CardContent } from "@/components/ui/card"
import {
  CheckCircle2,
  Users,
  PiggyBank,
  HandCoins,
  Shield,
  Phone,
} from "lucide-react"

const benefits = [
  {
    icon: PiggyBank,
    title: "Build Savings",
    description: "Develop a strong savings culture with flexible deposit options",
  },
  {
    icon: HandCoins,
    title: "Access Loans",
    description: "Get affordable loans with low interest rates for your needs",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a network of clanmates supporting each other",
  },
  {
    icon: Shield,
    title: "Secure Investment",
    description: "Your funds are managed by elected, trustworthy leaders",
  },
]

const requirements = [
  "Be a member of Engabi Ensamba Clan or related through marriage",
  "Pay the membership fee as per the by-laws",
  "Purchase at least one share at UGX 10,000",
  "Agree to abide by the SACCO&apos;s by-laws and regulations",
  "Provide valid identification (National ID)",
  "Be willing to participate in group activities",
]

const fees = [
  { name: "Membership Fee", amount: "As per by-laws" },
  { name: "Share Price", amount: "UGX 10,000 per share" },
  { name: "Annual Nsamba Fund", amount: "As determined annually" },
  { name: "Annual Operations Fee", amount: "As determined annually" },
]

export default function MembershipPage() {
  return (
    <>
      <MiniHero
        title="Become a Member"
        subtitle="Join our growing family of clanmates building wealth together"
        backgroundImage="/members.jpg"
      />

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Why Join Us
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Member Benefits
            </h2>
            <p className="text-muted-foreground text-lg">
              Joining Engabi Ensamba Clan SACCO opens doors to financial
              empowerment and community support
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Requirements and Fees */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Requirements */}
            <Card className="bg-muted border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                  Membership Requirements
                </h3>
                <ul className="space-y-3">
                  {requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground text-sm">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Fees */}
            <Card className="bg-primary text-primary-foreground border-none">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-bold mb-4">
                  Membership Fees
                </h3>
                <ul className="space-y-4">
                  {fees.map((fee, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center pb-3 border-b border-primary-foreground/20 last:border-0"
                    >
                      <span className="text-primary-foreground/80">
                        {fee.name}
                      </span>
                      <span className="font-semibold">{fee.amount}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 pt-4 border-t border-primary-foreground/20">
                  <p className="text-sm text-primary-foreground/80">
                    Contact us for detailed fee structure and payment options.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Apply Now
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Membership Application
            </h2>
            <p className="text-muted-foreground text-lg">
              Complete the form below to start your journey with Engabi Ensamba
              Clan SACCO
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <MembershipForm />
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-secondary-foreground/10 rounded-full flex items-center justify-center">
              <Phone className="h-8 w-8 text-secondary-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-secondary-foreground mb-1">
                Need Help With Your Application?
              </h3>
              <p className="text-secondary-foreground/80">
                Call us at{" "}
                <a
                  href="tel:+256753244446"
                  className="font-semibold hover:underline"
                >
                  +256 753 244 446
                </a>{" "}
                or{" "}
                <a
                  href="tel:+256772401428"
                  className="font-semibold hover:underline"
                >
                  +256 772 401 428
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
