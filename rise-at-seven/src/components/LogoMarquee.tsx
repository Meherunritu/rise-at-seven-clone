'use client'

const clientLogos = [
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=400&q=80&fm=webp', alt: 'Client', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=400&q=80&fm=webp', alt: 'SN', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=400&q=80&fm=webp', alt: 'Red Bull', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=400&q=80&fm=webp', alt: 'Client', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/01J76SW385WN4X1CBJWJV7QSAP.png?w=400&q=80&fm=webp', alt: 'Client', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/SN.webp?w=400&q=80&fm=webp', alt: 'SN', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/red-bull-logo-black.png?w=400&q=80&fm=webp', alt: 'Red Bull', invert: true },
  { src: 'https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/Untitled-design.png?w=400&q=80&fm=webp', alt: 'Client', invert: true },
]

export default function LogoMarquee() {
  // Duplicate for seamless loop
  const doubled = [...clientLogos, ...clientLogos]

  return (
    <section className="py-10 md:py-14 border-y border-white/[0.07] overflow-hidden relative">
      <p className="text-center text-[10px] font-semibold uppercase tracking-[3px] text-white/25 mb-6">
        The Agency Behind
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track">
          {doubled.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center mx-10 md:mx-16"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-6 md:h-8 w-auto object-contain opacity-40 hover:opacity-80 transition-opacity duration-300"
                style={{ filter: 'invert(1) brightness(10)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
