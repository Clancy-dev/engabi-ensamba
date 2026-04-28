"use client"

import { useEffect, useCallback, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero%20image%201-NxiIL1m9QFnD8hikwdnCceOHxDDDGh.jpeg",
    title: "Together We Grow",
    subtitle: "Engabi Ensamba Clan SACCO",
    description:
      "Pooling resources together as clanmates to create a savings culture and support each other financially.",
  },
  {
    image:
      "/hero 2.jpeg",
    title: "Building Stronger Communities",
    subtitle: "Unity in Savings",
    description:
      "Over 200 members and 6000 shares strong. Join us in building a prosperous future for our clan.",
  },
  {
    image:
      "/hero 3.jpg",
    title: "Affordable Loans",
    subtitle: "Supporting Your Dreams",
    description:
      "Access low-interest loans to grow your business, support education, and achieve your goals.",
  },
]

export function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
    
    return () => {
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section className="relative w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="relative min-w-full h-[500px] md:h-[600px] lg:h-[700px]"
            >
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl animate-fade-in-up">
                    <p className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-2">
                      {slide.subtitle}
                    </p>
                    <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-4 text-balance">
                      {slide.title}
                    </h1>
                    <p className="text-background/90 text-lg md:text-xl mb-8 leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <Link href="/membership">
                        <Button
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8"
                        >
                          Join Us Today
                        </Button>
                      </Link>
                      <Link href="/about">
                        <Button
                          size="lg"
                          className="bg-transparent border-2 border-background text-background hover:bg-background hover:text-foreground font-semibold px-8"
                        >
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-background/50 hover:bg-background/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === selectedIndex ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  )
}
