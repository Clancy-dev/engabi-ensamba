import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { MiniHero } from "@/components/mini-hero"

export const metadata: Metadata = {
  title: "About Us | Engabi Ensamba Clan SACCO - Our Story & Leadership",
  description:
    "Learn about Engabi Ensamba Clan SACCO's journey from founding in May 2025 to official registration in March 2026. Meet our board members and discover our mission to empower clanmates financially.",
  keywords: [
    "Engabi Ensamba Clan history",
    "SACCO leadership",
    "Board members",
    "Clan cooperative",
    "Uganda SACCO",
    "Financial empowerment",
  ],
  openGraph: {
    title: "About Engabi Ensamba Clan SACCO",
    description:
      "Our journey from May 2025 to becoming a registered SACCO serving 200+ members.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image%201-NxiIL1m9QFnD8hikwdnCceOHxDDDGh.jpeg",
    ],
  },
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Eye,
  CheckCircle2,
  ArrowRight,
  Users,
  Calendar,
  Award,
} from "lucide-react"

const founders = [
  {
    name: "Aloysius Lubega Magandazi",
    role: "Jajja Nsamba • Clan Leader",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Aloysius%20Lubega%20Magandazi-HWJA6SuvwBP3Aogug8l3OwiBXGAXfY.jpg",
  },
  {
    name: "Kasozi Charles",
    role: "The Katikiro of Ssiga lya Yiga",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/kasozi%20charles-GGYAEkqSgwrVRyjo9rpKwnaJCQBhQW.jpg",
  },
  {
    name: "Salongo James Bukenya",
    role: "Viva Hardware • Ministry of Cooperatives & Trade at clan level",
    image:
      "/Salongo James Bukenya.png",
  },
  {
    name: "Katikiro Salongo Balilonda",
    role: "The Katikiro of our Clan",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Katikiro%20Salongo%20Balilonda-kUAoOGjE2Hz0DigIpwawP8i0Fm4MNC.jpg",
  },
  
]

const boardMembers = [
  { name: "Juliet Nakanwagi Lutakome", role: "Chairperson" },
  { name: "Lubega John", role: "Vice Chairperson" },
  { name: "Kigemuzi Ibrahim", role: "Treasurer" },
  { name: "Ssalongo Kamya Linda Bukenya", role: "Board Member" },
  { name: "Lubega Joel", role: "Board Member" },
  { name: "Namatovu Oliver", role: "Board Member" },
  { name: "Nabukeera Agnes", role: "Board Member" },
  { name: "Lwanga Joseph", role: "Board Member" },
  { name: "Kamoga Badru", role: "Board Member" },
]

const supervisoryMembers = [
  { name: "Ssalongo Saava", role: "Supervisory Member" },
  { name: "Nanziri Aisha", role: "Supervisory Member" },
  { name: "Lukonge Zaake", role: "Supervisory Member" },
]

const objectives = [
  "Ensure existing groups run smoothly as new ones are formed at different convenient levels",
  "Pool savings and shares from individuals and lend at low interests",
  "Generate income from loan applications, interests on loans, and investments",
  
]

const affiliates = [
  {
    name: "Buganda Kingdom",
    image: "/images/buganda logo.png",
    description: "Our proud heritage and cultural foundation",
  },
  {
    name: "CBS FM",
    image: "/images/cbs.png",
    description: "Our media partner for community outreach",
  },
  {
    name: "BBS Terefayina",
    image: "/images/bbs-tv.jpg",
    description: "Television partner for clan visibility",
  },
]

const timeline = [
  {
    date: "May 7, 2025",
    title: "SACCO Founded",
    description:
      "First meeting held at the invitation of Minister of Cooperatives Ssalongo Viva Bukenya",
  },
  {
    date: "Year One",
    title: "First Loans Disbursed",
    description:
      "Supported members with loans for poultry, coffee machines, retail shops, and education",
  },
  {
    date: "March 27, 2026",
    title: "Official Registration",
    description:
      "Registered by the Ministry of Trade and Cooperatives to operate countrywide",
  },
  {
    date: "April 18, 2026",
    title: "Board Elections",
    description: "First election of top leaders with clan executive endorsement",
  },
  {
    date: "May 22, 2026",
    title: "Official Launch",
    description: "Grand launch ceremony with participation from clan leadership",
  },
]

export default function AboutPage() {
  return (
    <>
      <MiniHero
        title="About Us"
        subtitle="Learn about our journey, mission, and the people who make it happen"
        backgroundImage="/about.jpg"
      />

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-primary font-semibold uppercase tracking-wider mb-2">
                Our Story
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                How Engabi Ensamba Clan SACCO Began
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  It all started in a meeting held on 7th May 2025 by attendants
                  who had been invited by the Clan Minister of Cooperatives,
                  Ssalongo Viva Bukenya, through the then coordinator (Katikiro
                  wa Ssiga lya Yiga) Mr. Charles Kasozi.
                </p>
                <p>
                  The purpose was to discuss ways to help clan members save
                  money while supporting local businesses to grow. At the end of
                  that historic meeting, Engabi Ensamba Clan SACCO was
                  established.
                </p>
                <p>
                  By the end of year one, three groups had been established, the
                  Jjaja&apos;s joined including Jjaja Nsamba Omutaaka Magandazi, the
                  total membership had grown to over 200 members with close to
                  6000 shares at UGX 10,000 each.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/og-image.jpg"
                  alt="Founding members of Engabi Ensamba Clan SACCO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To be the most dependable financial institution that empowers
                  every Engabi Ensamba clan member to achieve financial
                  prosperity and security.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card border-none shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  We are pooling resources together as clanmates to create a
                  savings culture and support each other financially by offering
                  affordable interest rates on loans.
                </p>
              </CardContent>
            </Card>  
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Our Goals
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Objectives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {objectives.map((objective, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm"
              >
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <p className="text-foreground leading-relaxed">{objective}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-semibold uppercase tracking-wider mb-2 text-primary-foreground/80">
              Our Journey
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-balance">
              Milestones & Achievements
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-foreground/20 hidden md:block" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="hidden md:flex w-16 h-16 bg-primary-foreground/10 rounded-full items-center justify-center flex-shrink-0 z-10">
                      <Calendar className="h-6 w-6" />
                    </div>
                    <div className="flex-1 bg-primary-foreground/10 rounded-xl p-6">
                      <p className="text-sm text-primary-foreground/70 mb-1">
                        {item.date}
                      </p>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-primary-foreground/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Our Roots
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              The Founders
            </h2>
            <p className="text-muted-foreground text-lg">
              Visionary leaders who brought Engabi Ensamba Clan SACCO to life and set its foundation
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {founders.map((founder, index) => (
              <div
                key={index}
                className="group text-center"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-square overflow-hidden bg-muted">
                    <Image
                      src={founder.image}
                      alt={founder.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">
                  {founder.name}
                </h3>
                <p className="text-primary text-sm font-medium">{founder.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board Members */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Leadership
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Our Board Members
            </h2>
            <p className="text-muted-foreground text-lg">
              Elected on April 18, 2026 to guide and lead our SACCO
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {boardMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Supervisory Committee */}
          <div className="mt-12">
            <h3 className="font-serif text-2xl font-bold text-foreground text-center mb-8">
              Supervisory Committee
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {supervisoryMembers.map((member, index) => (
                <Card
                  key={index}
                  className="bg-muted border-none shadow-sm text-center"
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="h-8 w-8 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {member.role}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Join Engabi Ensamba Clan SACCO today and become part of a growing
            community of clanmates supporting each other.
          </p>
          <Link href="/membership">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8"
            >
              Join Us Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
