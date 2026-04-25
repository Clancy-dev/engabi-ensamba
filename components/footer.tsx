import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 bg-background rounded-full p-1">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bD7ZKfdrwveu4I9I0wlvCy1hhcb2bh.jpeg"
                  alt="Engabi Ensamba Clan SACCO Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif font-bold text-lg">Engabi Ensamba</h3>
                <p className="text-sm text-primary-foreground/80">Clan SACCO</p>
              </div>
            </div>
            <p className="text-sm text-background/80 leading-relaxed">
              Pooling resources together as clanmates to create a savings
              culture and support each other financially with affordable
              interest rates on loans.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/blog", label: "Blog & News" },
                { href: "/membership", label: "Membership" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Savings Accounts",
                "Low Interest Loans",
                "Business Support",
                "Financial Advice",
                "Group Formation",
                "Investment Support",
              ].map((service) => (
                <li
                  key={service}
                  className="text-sm text-background/80"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-background/80">
                  Kibuye, Kampala-Uganda
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-background/80">
                  <p>+256 753 244 446 / +256 782 358 125</p>
                  <p>+256 772 401 428 / +256 701 100 988</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:engabiensambaclansacco@gmail.com"
                  className="text-sm text-background/80 hover:text-primary transition-colors break-all"
                >
                  engabiensambaclansacco@gmail.com
                </a>
              </li>
            </ul>

            
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-sm text-background/60">
            <p>
              &copy; {new Date().getFullYear()} Engabi Ensamba Clan SACCO. All
              rights reserved.
            </p>
            <p>Registered with Ministry of Trade and Cooperatives - Uganda</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
