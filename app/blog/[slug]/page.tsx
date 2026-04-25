import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { MiniHero } from "@/components/mini-hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

const blogPosts = [
  {
    slug: "sacco-officially-registered",
    title: "SACCO Officially Registered",
    excerpt:
      "Engabi Ensamba Clan SACCO was officially registered by the Ministry of Trade and Cooperatives on March 27, 2026, marking a significant milestone in our journey.",
    content: `Engabi Ensamba Clan SACCO was officially registered by the Ministry of Trade and Cooperatives on March 27, 2026, marking a significant milestone in our journey.

This registration means we can now operate countrywide, serving clan members from all corners of Uganda and even those abroad. The registration process involved rigorous documentation and compliance with the Ministry's requirements.

Our leadership worked tirelessly to ensure all by-laws were in place and that our governance structure met the standards set by the Ministry of Trade and Cooperatives.

With this official recognition, members can now have full confidence in the SACCO's operations, knowing that we are regulated and supervised by the relevant government authorities.`,
    date: "March 27, 2026",
    category: "Milestone",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200",
  },
  {
    slug: "first-board-elections-held",
    title: "First Board Elections Held",
    excerpt:
      "On April 18, 2026, the clan executive endorsed Engabi Ensamba Clan SACCO and attended the first election of board members, solidifying our governance structure.",
    content: `On April 18, 2026, the clan executive endorsed Engabi Ensamba Clan SACCO and attended the first election of board members, solidifying our governance structure.

The elections were conducted in a transparent and democratic manner, with all registered members having the opportunity to vote for their preferred candidates.

The elected board members include:
- Juliet Nakanwagi Lutakome (Chairperson)
- Lubega John (Vice Chairperson)
- Kigemuzi Ibrahim (Treasurer)
- And several other dedicated board members

The supervisory committee was also elected to ensure proper oversight of the SACCO's operations.

This election marked a crucial step in establishing proper governance and accountability within our SACCO.`,
    date: "April 18, 2026",
    category: "Governance",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200",
  },
  {
    slug: "grand-launch-ceremony",
    title: "Grand Launch Ceremony",
    excerpt:
      "The official launch of Engabi Ensamba Clan SACCO was held on May 22, 2026, with participation from clan leadership and members from across Uganda.",
    content: `The official launch of Engabi Ensamba Clan SACCO was held on May 22, 2026, with participation from clan leadership and members from across Uganda.

The ceremony was graced by the Ssiga lya Yiga leadership, including Jjaja Nsamba Omutaaka Magandazi, who gave their blessings and support to this important initiative.

The event featured:
- Speeches from clan leaders
- Presentation of the SACCO's vision and mission
- Recognition of founding members
- Cultural performances
- Fellowship and networking

Members from various parts of Uganda and even those abroad attended this historic event, demonstrating the unity and commitment of the Engabi Ensamba clan to support each other financially.`,
    date: "May 22, 2026",
    category: "Event",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image%201-NxiIL1m9QFnD8hikwdnCceOHxDDDGh.jpeg",
  },
  {
    slug: "supporting-local-businesses",
    title: "Supporting Local Businesses",
    excerpt:
      "Within our first year, we supported members with loans for broilers, coffee processing, retail shops, education, and agriculture. Read about our impact.",
    content: `Within our first year, Engabi Ensamba Clan SACCO has made a significant impact by supporting members with loans for various business ventures.

Our loan disbursements have supported:

**Poultry Farming**
Several members received loans to purchase chicks for broiler farming. Today, some of these members supply chicken to restaurants across Kampala.

**Coffee Processing**
We supported a clanmate to purchase coffee grinding machines and sealers, enabling them to add value to coffee and increase their income.

**Retail Shops**
Members have received loans to add more items to their retail shops, increasing their product range and customer base.

**Education**
Education loans have helped families pay school fees and support their children's academic journey.

**Agriculture**
Agricultural loans have supported farming activities including crop farming and livestock keeping.

These success stories demonstrate the power of pooling resources together as a community.`,
    date: "May 2026",
    category: "Impact",
    image: null,
  },
  {
    slug: "membership-grows-to-200",
    title: "Membership Grows to 200+",
    excerpt:
      "We are proud to announce that our membership has grown to over 200 clanmates with close to 6000 shares, demonstrating the strength of our community.",
    content: `We are proud to announce that our membership has grown to over 200 clanmates with close to 6000 shares, demonstrating the strength of our community.

This remarkable growth shows the trust and confidence that clan members have in Engabi Ensamba Clan SACCO. With shares priced at UGX 10,000 each, we have mobilized significant resources that are now being used to support members through loans.

Our membership spans:
- Members at headquarters
- Members from various Ssiga levels
- Members from Mutuba levels
- Members residing in different parts of Uganda
- Clanmates living abroad

We welcome all Engabi Ensamba clan members to join us and be part of this growing family. Together, we can achieve more than we ever could individually.`,
    date: "March 2026",
    category: "Growth",
    image: null,
  },
  {
    slug: "three-groups-established",
    title: "Three Groups Established",
    excerpt:
      "By the end of year one, three groups had been established at headquarters, Ssiga level, and Mutuba level, providing accessible support to members.",
    content: `By the end of year one, three groups had been established, providing accessible support to members at different levels of the clan structure.

**Groups Established:**

1. **Headquarters Group** - Based at Kibuye, Kampala, this group serves as the main coordination center for the SACCO.

2. **Ssiga Level Group** - Operating at the Ssiga lya Yiga level, this group serves members in this administrative unit.

3. **Mutuba Level Group** - This group was established to serve members at the Mutuba level, bringing services closer to members.

Each group:
- Elects their own leaders
- Manages day-to-day operations
- Follows guidelines set by the SACCO board
- Reports to the central leadership

Members are free to join the group most convenient for them, whether at headquarters, their Ssiga, Mutuba, Lunyilili, or where they reside.`,
    date: "May 2026",
    category: "Expansion",
    image: null,
  },
]

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Post Not Found | Engabi Ensamba Clan SACCO",
    }
  }

  return {
    title: `${post.title} | Engabi Ensamba Clan SACCO Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null
  const nextPost =
    currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null

  const formatContent = (content: string) => {
    return content.split("\n\n").map((paragraph, index) => {
      if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
        return (
          <h3 key={index} className="font-semibold text-xl text-foreground mt-6 mb-3">
            {paragraph.replace(/\*\*/g, "")}
          </h3>
        )
      }
      if (paragraph.startsWith("- ")) {
        const items = paragraph.split("\n").filter((item) => item.startsWith("- "))
        return (
          <ul key={index} className="list-disc list-inside space-y-2 my-4">
            {items.map((item, i) => (
              <li key={i} className="text-muted-foreground">
                {item.replace("- ", "")}
              </li>
            ))}
          </ul>
        )
      }
      if (paragraph.includes("**")) {
        const parts = paragraph.split(/(\*\*[^*]+\*\*)/g)
        return (
          <p key={index} className="text-muted-foreground leading-relaxed mb-4">
            {parts.map((part, i) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={i} className="text-foreground font-semibold">
                  {part.replace(/\*\*/g, "")}
                </strong>
              ) : (
                part
              )
            )}
          </p>
        )
      }
      return (
        <p key={index} className="text-muted-foreground leading-relaxed mb-4">
          {paragraph}
        </p>
      )
    })
  }

  return (
    <>
      <MiniHero
        title={post.title}
        subtitle={post.category}
        backgroundImage={
          post.image ||
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1920"
        }
      />

      <article className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back Link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-primary hover:underline mb-8"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            {/* Post Meta */}
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {post.title}
            </h1>

            {/* Featured Image */}
            {post.image && (
              <div className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden mb-8">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {formatContent(post.content)}
            </div>

            {/* Navigation */}
            <div className="border-t border-border mt-12 pt-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {prevPost ? (
                  <Link href={`/blog/${prevPost.slug}`}>
                    <Card className="bg-muted border-none hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground mb-1">
                          Previous Post
                        </p>
                        <p className="font-semibold text-foreground flex items-center gap-2">
                          <ArrowLeft className="h-4 w-4" />
                          {prevPost.title}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost && (
                  <Link href={`/blog/${nextPost.slug}`}>
                    <Card className="bg-muted border-none hover:shadow-md transition-shadow h-full">
                      <CardContent className="p-4 text-right">
                        <p className="text-sm text-muted-foreground mb-1">
                          Next Post
                        </p>
                        <p className="font-semibold text-foreground flex items-center justify-end gap-2">
                          {nextPost.title}
                          <ArrowRight className="h-4 w-4" />
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-secondary-foreground mb-4 text-balance">
            Want to Be Part of Our Story?
          </h2>
          <p className="text-secondary-foreground/90 max-w-xl mx-auto mb-6">
            Join Engabi Ensamba Clan SACCO today and become part of our growing
            community.
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
