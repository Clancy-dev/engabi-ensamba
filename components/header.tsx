"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Phone, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/membership", label: "Membership" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="tel:+256782358125"
              className="flex items-center gap-1 hover:underline"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+256 782 358 125</span>
            </a>
            <a
              href="mailto:engabiensambaclansacco@gmail.com"
              className="flex items-center gap-1 hover:underline"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden md:inline">
                engabiensambaclansacco@gmail.com
              </span>
            </a>
          </div>
          <p className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            <span className="hidden sm:inline">Kibuye, Makindye - Jjuuko zone</span>
            <span className="sm:hidden">Kibuye Makindye</span>
          </p>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-card/95 backdrop-blur-md shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 md:w-16 md:h-16">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-bD7ZKfdrwveu4I9I0wlvCy1hhcb2bh.jpeg"
                  alt="Engabi Ensamba Clan SACCO Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="font-serif font-bold text-sm sm:text-lg md:text-xl text-foreground leading-tight">
                  Engabi Ensamba
                </h1>
                <p className="text-xs md:text-sm text-primary font-semibold">
                  Clan SACCO
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10 hover:text-primary"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/membership" className="ml-2">
                <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Join Us
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-fade-in">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    pathname === link.href
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-primary/10"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/membership"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2"
              >
                <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
