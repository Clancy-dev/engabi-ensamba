import Image from "next/image"

interface MiniHeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function MiniHero({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1920",
}: MiniHeroProps) {
  return (
    <section className="relative h-[250px] md:h-[300px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/50" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl animate-fade-in-up">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-background mb-2 text-balance">
              {title}
            </h1>
            {subtitle && (
              <p className="text-background/80 text-lg md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
    </section>
  )
}
