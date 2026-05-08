"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Star, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const PageHero = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--secondary)", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>Testimonials</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>What Our Clients Say About TMM Moving & Storage</h1>
      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>
        Read what our clients say about their experience with TMM Moving in Saskatchewan and Winnipeg.
      </p>
    </div>
  </section>
);

const RatingBar = ({ label, count, total, color }) => (
  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
    <div style={{ fontSize: "0.82rem", color: "#D1D5DB", width: 40, fontWeight: 500 }}>{label}</div>
    <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 4 }}>
      <div style={{ width: `${(count / total) * 100}%`, height: "100%", background: color, borderRadius: 4, transition: "width 1s ease" }} />
    </div>
    <div style={{ fontSize: "0.78rem", color: "#71717a", width: 36, textAlign: "right" }}>{count}</div>
  </div>
);

const allTestimonials = [
  { name: "Sarah Jenkins", loc: "Saskatoon → Winnipeg", rating: 5, service: "Home", date: "Jan 2026", color: "var(--secondary)", text: "Outstanding service from start to finish! The team arrived on time, packed everything professionally and delivered safely. Highly recommend TMM Moving to anyone." },
  { name: "Business Owner", loc: "Corporate Relocation", rating: 5, service: "Business", date: "Dec 2025", color: "var(--secondary)", text: "We moved our entire office with zero downtime. The team was organized, fast, and very professional with our IT equipment." },
  { name: "John Miller", loc: "Regina → Saskatoon", rating: 5, service: "Long Distance", date: "Jan 2026", color: "var(--secondary)", text: "Moved across the province and I was worried about my antiques. They wrapped each piece individually and everything arrived perfect. GPS tracking gave me peace of mind." },
  { name: "Local Family", loc: "Saskatoon Local", rating: 5, service: "Home", date: "Nov 2025", color: "var(--secondary)", text: "Best moving service in the prairies! They wrapped my TV and glass items so carefully. The final bill matched the quote exactly." },
  { name: "Senior Resident", loc: "Saskatoon Local", rating: 5, service: "Home", date: "Feb 2026", color: "var(--secondary)", text: "The team was so patient with my mother during her move to the care facility. They handled her fragile items with extreme care." },
  { name: "Robert Chen", loc: "Winnipeg Local Move", rating: 4, service: "Home", date: "Dec 2025", color: "var(--secondary)", text: "Good experience overall. Minor delay due to traffic but they kept me updated throughout. Everything arrived safe." },
];

export default function TestimonialsClient() {
  const [filter, setFilter] = useState("All");
  const router = useRouter();
  const sectionRef = useScrollReveal();
  
  const filters = ["All", "Home", "Business", "Long Distance"];
  const filtered = filter === "All" ? allTestimonials : allTestimonials.filter((t) => t.service === filter);

  return (
    <main>
      <PageHero />

      <section style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}>
        <div className="container-custom">
          {/* Rating summary */}
          <div
            className="reveal"
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "3rem",
              background: "var(--navy)",
              borderRadius: 4,
              padding: "2.5rem",
              border: "1px solid rgba(255,255,255,0.05)",
              marginBottom: "3.5rem",
              alignItems: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "5rem", color: "var(--secondary)", lineHeight: 1 }}>4.9</div>
              <div style={{ display: "flex", gap: 3, justifyContent: "center", marginBottom: 6 }}>
                {[...Array(5)].map((_, i) => <Star key={i} size={20} weight="fill" style={{ color: "var(--secondary)" }} />)}
              </div>
              <div style={{ fontSize: "0.82rem", color: "#D1D5DB" }}>Based on Recent Client Feedback</div>
            </div>
            <div>
              <RatingBar label="5 ★" count={2100} total={2400} color="var(--secondary)" />
              <RatingBar label="4 ★" count={220} total={2400} color="#22c55e" />
              <RatingBar label="3 ★" count={60} total={2400} color="#3f3f46" />
              <RatingBar label="2 ★" count={15} total={2400} color="#ef4444" />
              <RatingBar label="1 ★" count={5} total={2400} color="#ef4444" />
            </div>
          </div>

          {/* Filters */}
          <div className="reveal" style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", justifyContent: "center", marginBottom: "2.5rem" }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} style={{ padding: "8px 22px", borderRadius: 4, border: "1px solid", borderColor: filter === f ? "var(--secondary)" : "#F3F4F6", background: filter === f ? "var(--secondary)" : "#FFFFFF", color: filter === f ? "#000" : "#6B7280", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", transition: "all 0.2s" }}>
                {f} Moves
              </button>
            ))}
          </div>

          {/* Cards grid */}
          <div ref={sectionRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
            {filtered.map((t, i) => (
              <div key={t.name + i} className="reveal" style={{ background: "#FFFFFF", border: "1px solid #F3F4F6", borderRadius: 8, padding: "2rem", display: "flex", flexDirection: "column", boxShadow: "0 10px 30px rgba(0,0,0,0.02)", transition: "transform 0.3s ease" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", gap: 2 }}>
                    {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} weight="fill" style={{ color: "var(--secondary)" }} />)}
                  </div>
                  <span style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", padding: "3px 10px", borderRadius: 4, fontSize: "0.7rem", fontWeight: 600 }}>{t.service}</span>
                </div>
                <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", margin: "0.5rem 0 0" }}>"{t.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", borderTop: "1px solid #F3F4F6", paddingTop: "0.75rem", marginTop: "1rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontFamily: "Poppins", flexShrink: 0, border: "1px solid var(--secondary)" }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: "#111827", fontSize: "0.88rem" }}>{t.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#6B7280" }}>{t.loc} · {t.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="reveal" style={{ textAlign: "center", marginTop: "3.5rem" }}>
            <p style={{ color: "#4B5563", marginBottom: "1.25rem" }}>Ready to add your own success story?</p>
            <button onClick={() => router.push("/get-quote")} className="btn-primary" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#000814", color: "#fff", border: "none", padding: "12px 24px", borderRadius: "4px", fontWeight: 600 }}>
              Book Your Move Today <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
