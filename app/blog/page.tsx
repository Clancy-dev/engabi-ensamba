"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MiniHero } from "@/components/mini-hero"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, Calendar, ArrowRight, Video, X } from "lucide-react"

const videos = [
  {
    id: 1,
    title: "Engabi Ensamba Clan SACCO Launch Event",
    description:
      "Watch the highlights from our official launch ceremony held on May 22, 2026. Join us in celebrating this historic milestone for our clan.",
    videoUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/VID-20260425-WA0005-6LF8rS7ernu3uiVkfWBmDwnJhbJUWL.mp4",
    date: "May 22, 2026",
    duration: "Watch Video",
    poster:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image%201-NxiIL1m9QFnD8hikwdnCceOHxDDDGh.jpeg",
  },
]

export const blogPosts = [
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
    image: null,
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
    image: null,
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
    image: null,
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
    image: "",
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

export default function BlogPage() {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)

  return (
    <>
      <MiniHero
        title="Blog & News"
        subtitle="Stay updated with the latest news, events, and stories from our SACCO"
        backgroundImage="/blogs.png"
      />

      {/* Video Lightbox */}
      {lightboxVideo && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightboxVideo(null)}
        >
          <button
            onClick={() => setLightboxVideo(null)}
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
            aria-label="Close video"
          >
            <X className="h-10 w-10" />
          </button>
          <div 
            className="w-full max-w-5xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={lightboxVideo}
              controls
              autoPlay
              className="w-full h-full rounded-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}

      {/* Featured Videos Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Video className="h-4 w-4" />
              <span className="text-sm font-semibold">Video Gallery</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Watch Our Videos
            </h2>
            <p className="text-muted-foreground text-lg">
              Experience the spirit of Engabi Ensamba Clan SACCO through our
              video content
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
              <Card
                key={video.id}
                className="bg-card border-none shadow-lg overflow-hidden group"
              >
                <div className="relative aspect-video bg-foreground/5">
                  <Image
                    src={video.poster}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setLightboxVideo(video.videoUrl)}
                      className="w-16 h-16 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-transform hover:scale-110"
                      aria-label="Play video"
                    >
                      <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground ml-1" />
                    </button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>{video.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {video.description}
                  </p>
                  <button
                    onClick={() => setLightboxVideo(video.videoUrl)}
                    className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    Watch Video
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Latest Updates
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              News & Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              Read about our milestones, events, and the impact we are making
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-md overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
              >
                {post.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}
                <CardContent className={`p-6 flex flex-col flex-1 ${!post.image ? 'pt-6' : ''}`}>
                  {!post.image && (
                    <div className="mb-3">
                      <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link href={`/blog/${post.slug}`}>
                    <Button
                      variant="ghost"
                      className="text-primary hover:text-primary/90 p-0 h-auto font-semibold"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
            Stay Updated
          </h2>
          <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Want to receive updates about our events and activities? Follow us
            on social media or contact us directly.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-background hover:bg-background/90 text-foreground font-semibold px-8"
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="/membership">
              <Button
                size="lg"
                className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold px-8"
              >
                Join Our SACCO
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
