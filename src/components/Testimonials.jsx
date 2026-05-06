"use client";

import { Star, Quotes, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const avatarColors = ["#1D4ED8", "#EA580C", "#16a34a", "#9333ea", "#0891b2"];

export const Testimonials = () => {
  const sectionRef = useScrollReveal();

  const testimonials = [
    {
      name: "Sarah Jenkins",
      initial: "S",
      location: "Saskatoon → Winnipeg",
      rating: 5,
      text: "Excellent service! The team was punctual, professional, and handled all my furniture with great care. Highly recommend TMM Logistics for anyone looking for reliable movers in Western Canada.",
      date: "January 2026",
      avatarColor: avatarColors[0],
    },
    {
      name: "Mike Thompson",
      initial: "M",
      location: "Office Relocation – Downtown",
      rating: 5,
      text: "We relocated our entire office with zero downtime. The team worked overnight and had everything set up by morning. Outstanding commercial moving service!",
      date: "December 2025",
      avatarColor: avatarColors[1],
    },
    {
      name: "Emily Rodriguez",
      initial: "E",
      location: "Regina → Saskatoon",
      rating: 5,
      text: "Moved across the province with TMM Logistics. The tracking was really helpful for peace of mind. All items arrived safely and on schedule. Pricing was transparent and fair.",
      date: "January 2026",
      avatarColor: avatarColors[2],
    },
    {
      name: "David Wilson",
      initial: "D",
      location: "Warehouse Distribution",
      rating: 5,
      text: "Reliable LTL service. The team was very professional and handled our freight with care. Best rates I found in Saskatchewan for logistics support.",
      date: "February 2026",
      avatarColor: avatarColors[3],
    },
    {
      name: "Jessica Lee",
      initial: "J",
      location: "Saskatoon Local Move",
      rating: 5,
      text: "Stress-free moving experience. TMM Logistics made it so easy from the initial quote to the final box. Very polite and efficient staff.",
      date: "March 2026",
      avatarColor: avatarColors[4],
    },
    {
      name: "Robert Chen",
      initial: "R",
      location: "Industrial Client",
      rating: 5,
      text: "Great trucking experience. No damage to my freight and the team was incredibly quick. Highly recommended for any logistics in the prairies!",
      date: "February 2026",
      avatarColor: avatarColors[0],
    },
  ];

  return (
    <section
      ref={sectionRef}
      style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}
      data-testid="testimonials-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", justifyContent: "center" }}>
            <Star size={14} weight="fill" />
            Testimonials
          </div>
          <h2 className="section-title" style={{ color: "#111827" }}>What Our Clients Say</h2>
          <div className="divider" style={{ background: "var(--secondary)", margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ color: "#374151", margin: "0 auto" }}>
            Real reviews from real clients across Canada. Your trust is our greatest achievement.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
          style={{ maxWidth: "1200px", margin: "0 auto" }}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((t, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div
                  className={`reveal h-full`}
                  style={{ background: "#FFFFFF", borderRadius: 4, border: "1px solid #F3F4F6", padding: "2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}
                  data-testid={`testimonial-${i}`}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                     <Quotes size={32} weight="fill" style={{ color: "rgba(234, 179, 8, 0.1)" }} />
                    <div style={{ display: "flex", gap: 2 }}>
                      {[...Array(t.rating)].map((_, j) => (
                        <Star key={j} size={15} weight="fill" style={{ color: "var(--secondary)" }} />
                      ))}
                    </div>
                  </div>

                  <p
                    style={{
                      color: "#374151",
                      fontSize: "0.92rem",
                      lineHeight: 1.7,
                      margin: 0,
                      fontStyle: "italic",
                      flexGrow: 1,
                    }}
                  >
                    "{t.text}"
                  </p>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      paddingTop: "1rem",
                      borderTop: "1px solid #F3F4F6",
                    }}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "Poppins", flexShrink: 0, border: "1px solid var(--secondary)" }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.92rem" }}>
                        {t.name}
                      </div>
                      <div style={{ fontSize: "0.78rem", color: "#6B7280" }}>
                        {t.location} · {t.date}
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:flex justify-center gap-4 mt-8">
            <CarouselPrevious className="relative left-0 translate-y-0" />
            <CarouselNext className="relative right-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

