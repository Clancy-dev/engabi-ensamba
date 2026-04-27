import type { Metadata } from "next"
import Link from "next/link"
import { MiniHero } from "@/components/mini-hero"

export const metadata: Metadata = {
  title: "Contact Us | Engabi Ensamba Clan SACCO - Get in Touch",
  description:
    "Contact Engabi Ensamba Clan SACCO at Kibuye, Kampala-Uganda. Call +256 753 244 446 or email engabiensambaclansacco@gmail.com. Visit us or send a message online.",
  keywords: [
    "Contact SACCO",
    "SACCO location",
    "Kibuye Kampala",
    "SACCO phone number",
    "SACCO email",
    "Uganda cooperative contact",
  ],
  openGraph: {
    title: "Contact Engabi Ensamba Clan SACCO",
    description:
      "Get in touch with us at Kibuye, Kampala-Uganda. We are here to help with any inquiries.",
  },
}
import { ContactForm } from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Numbers",
    details: [
      "+256 753 244 446",
      "+256 782 358 125",
      "+256 772 401 428",
      "+256 701 100 988",
    ],
    action: {
      label: "Call Now",
      href: "tel:+256753244446",
    },
  },
  {
    icon: Mail,
    title: "Email Address",
    details: ["engabiensambaclansacco", "@gmail.com"],
    action: {
      label: "Send Email",
      href: "mailto:engabiensambaclansacco@gmail.com",
    },
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Kibuye", "Kampala, Uganda"],
    action: {
      label: "Get Directions",
      href: "https://www.google.com/maps/search/Kibuye+Kampala+Uganda",
    },
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
    action: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <MiniHero
        title="Contact Us"
        subtitle="Get in touch with us for any inquiries or support"
        backgroundImage="/contact.jpg"
      />

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              Reach Out
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Get In Touch With Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We are here to help you with any questions about our SACCO
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <info.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-3">
                    {info.title}
                  </h3>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-muted-foreground text-sm"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                  {info.action && (
                    <a
                      href={info.action.href}
                      target={info.action.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.action.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-primary text-sm font-semibold hover:underline"
                    >
                      {info.action.label}
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Form and Map */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <Card className="bg-card border-none shadow-xl overflow-hidden flex-1">
                <div className="relative h-[300px] lg:h-full min-h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7584892553445!2d32.56066431475393!3d0.2909086997866454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb0f0f3f6a81%3A0x7c1c8f7e7a9d7d4e!2sKibuye%2C%20Kampala%2C%20Uganda!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Engabi Ensamba Clan SACCO Location"
                    className="absolute inset-0"
                  />
                </div>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-primary text-primary-foreground border-none">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-foreground/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Prefer WhatsApp?
                      </h3>
                      <p className="text-primary-foreground/80 text-sm mb-3">
                        Reach us directly on WhatsApp for quick responses
                      </p>
                      <a
                        href="https://wa.me/256772401428"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                      >
                        Chat on WhatsApp
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-wider mb-2">
              FAQ
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "How do I become a member?",
                answer:
                  "You can apply for membership by filling out the membership form on our website or by visiting our office at Kibuye, Kampala. You will need to be a member of the Engabi Ensamba Clan or related through marriage.",
              },
              {
                question: "How much does it cost to join?",
                answer:
                  "The membership fee is as per the by-laws, and each share costs UGX 10,000. You need to purchase at least one share to become a member. Contact us for the current fee structure.",
              },
              {
                question: "Can I join if I live outside Uganda?",
                answer:
                  "Yes! Engabi Ensamba Clan SACCO welcomes clanmates from all corners within and outside Uganda. You can join a group at headquarters or form a group at your place of residence.",
              },
              {
                question: "How do I apply for a loan?",
                answer:
                  "Each group has been given guidelines for loan applications. Once you are a registered member, your group leaders will guide you through the loan application process.",
              },
              {
                question: "What types of loans are available?",
                answer:
                  "We offer various types of loans including business loans, education loans, agricultural loans, retail expansion loans, and emergency loans. All at competitive interest rates.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-card border-none shadow-sm hover:shadow-md transition-shadow"
              >
                <CardContent className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-secondary-foreground mb-4 text-balance">
            Ready to Join Our SACCO?
          </h2>
          <p className="text-secondary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
            Take the first step towards financial empowerment. Become a member
            today and start your savings journey with us.
          </p>
          <Link href="/membership">
            <Button
              size="lg"
              className="bg-foreground hover:bg-foreground/90 text-background font-semibold px-8"
            >
              Apply for Membership
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  )
}
