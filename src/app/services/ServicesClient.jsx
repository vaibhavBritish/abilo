"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { House, BuildingOffice, Truck, Package, Warehouse, PianoKeys, Check, ArrowRight, ShieldCheck, Clock } from "@phosphor-icons/react";

const PageHero = ({ title, subtitle, breadcrumb }) => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "#ff5a00", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>{breadcrumb}</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>{title}</h1>
      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>{subtitle}</p>
    </div>
  </section>
);

const services = [
  {
    icon: House, title: "Residential Moving", color: "icon-blue",
    desc: "Comprehensive home relocation services. We handle everything from studio apartments to large family estates with care.",
    features: ["Expert packing", "Furniture assembly", "Fragile item care", "Unpacking services", "Local expertise"],
    price: "From $299",
  },
  {
    icon: BuildingOffice, title: "Commercial Relocation", color: "icon-orange",
    desc: "Efficient office and business moving solutions designed to minimize downtime and ensure business continuity.",
    features: ["IT equipment handling", "Office furniture", "After-hours moving", "Project management", "Modular setup"],
    price: "Expert Planning",
  },
  {
    icon: Truck, title: "Long Distance Moving", color: "icon-green",
    desc: "Cross-province and nationwide moving services with real-time tracking and guaranteed delivery windows.",
    features: ["Coast-to-coast reach", "Shipment tracking", "Direct delivery", "Dedicated trucks", "Full insurance"],
    price: "Custom Quotes",
  },
  {
    icon: Package, title: "Packing & Crating", color: "icon-purple",
    desc: "Professional packing services using high-quality materials to ensure the safety of your belongings during transit.",
    features: ["Custom crating", "Eco-friendly boxes", "Labeling system", "Partial packing", "Supply delivery"],
    price: "Full/Partial",
  },
  {
    icon: Warehouse, title: "Storage Solutions", color: "icon-blue",
    desc: "Secure, climate-controlled storage facilities for short-term and long-term needs with 24/7 security.",
    features: ["Climate control", "24/7 monitoring", "Clean & dry units", "Easy access", "Flexible terms"],
    price: "Secure Units",
  },
  {
    icon: PianoKeys, title: "Specialty Moving", color: "icon-orange",
    desc: "Expert handling of high-value and oversized items including pianos, fine art, and antiques.",
    features: ["Piano moving", "Art installation", "Antique handling", "Safe relocation", "Oversized items"],
    price: "Precision Care",
  },
];

const PricingTable = () => {
  const router = useRouter();
  const plans = [
    {
      name: "Basic Move",
      price: "Best Value",
      desc: "Perfect for local apartment moves",
      features: ["2 Professional movers", "Standard moving truck", "Basic insurance", "Furniture protection", "Local GTA travel"],
      highlight: false,
    },
    {
      name: "Full Service",
      price: "Most Popular",
      desc: "Ideal for family home moves",
      features: ["3 Professional movers", "Full packing services", "Large moving truck", "Furniture assembly", "Priority scheduling", "Valuation coverage"],
      highlight: true,
    },
    {
      name: "Premium Relocation",
      price: "Complete",
      desc: "White-glove moving experience",
      features: ["4 Senior movers", "Packing & Unpacking", "Multiple trucks", "Climate-controlled storage", "Art & Piano handling", "Dedicated coordinator"],
      highlight: false,
    },
  ];

  return (
    <section style={{ background: "var(--navy)", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <div className="container-custom">
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)", justifyContent: "center" }}>💰 Transparent Pricing</div>
          <h2 className="section-title" style={{ color: "#fff" }}>Relocation Packages</h2>
          <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ color: "#D1D5DB", margin: "0 auto" }}>No hidden fees. What you see is what you pay. All plans include a free on-site survey.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={`reveal delay-${(i + 1) * 100}`}
              style={{
                background: p.highlight ? "#ff5a00" : "var(--navy-mid)",
                color: p.highlight ? "#000" : "#fff",
                borderRadius: 4, padding: "2rem",
                border: p.highlight ? "none" : "1px solid rgba(255,255,255,0.05)",
                boxShadow: p.highlight ? "0 20px 60px rgba(255, 90, 0, 0.2)" : "none",
                transition: "all 0.3s",
                transform: p.highlight ? "scale(1.04)" : "scale(1)",
              }}
            >
              {p.highlight && <div style={{ background: "var(--navy)", color: "#fff", fontSize: "0.72rem", fontWeight: 700, padding: "4px 12px", borderRadius: 4, display: "inline-block", marginBottom: "0.75rem" }}>MOST POPULAR</div>}
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", marginBottom: "0.25rem" }}>{p.name}</div>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2rem", marginBottom: "0.25rem", color: p.highlight ? "var(--navy)" : "#ff5a00" }}>{p.price}</div>
              <div style={{ fontSize: "0.82rem", color: p.highlight ? "rgba(0,8,20,0.6)" : "#D1D5DB", marginBottom: "1.5rem" }}>{p.desc}</div>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {p.features.map((f) => (
                  <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.875rem", color: p.highlight ? "rgba(0,8,20,0.8)" : "#E5E7EB" }}>
                    <Check size={16} weight="bold" style={{ color: p.highlight ? "var(--navy)" : "#ff5a00", flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => router.push("/get-quote")}
                style={{
                  width: "100%", border: p.highlight ? "2px solid var(--navy)" : "2px solid rgba(255,255,255,0.1)",
                  background: p.highlight ? "var(--navy)" : "transparent",
                  color: "#fff", borderRadius: 4, padding: "12px",
                  fontWeight: 600, cursor: "pointer", fontSize: "0.9rem", transition: "all 0.2s",
                }}
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "How far in advance should I book my move?", a: "We recommend booking at least 2-4 weeks in advance, especially during the peak summer moving season. However, we always try to accommodate last-minute requests." },
    { q: "Are my belongings insured during the move?", a: "Yes! We provide basic valuation coverage as standard and offer comprehensive insurance options for full replacement value protection." },
    { q: "Do you provide packing materials?", a: "Absolutely. We can supply all necessary materials including specialized boxes, tape, bubble wrap, and wardrobe boxes, or provide full packing services." },
    { q: "Can you move specialized items like pianos or art?", a: "Yes, we have a specialty moving team trained in handling high-value, fragile, and oversized items using custom crating and specialized equipment." },
    { q: "Do you offer climate-controlled storage?", a: "Yes, our Toronto storage facilities are fully climate-controlled and monitored 24/7 to ensure your items remain in perfect condition." },
    { q: "How are your moving rates calculated?", a: "Local moves are typically hourly-based, while long-distance moves are calculated based on weight/volume and distance. We provide transparent, binding estimates." },
  ];

  return (
    <section className="bg-white py-10 md:py-16 px-4 border-t border-gray-100">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <div className="text-sm text-orange-600 mb-2 font-semibold">❓ FAQ</div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((f, i) => (
            <div
              key={f.q}
              className="bg-gray-50 border border-gray-100 rounded-xl p-5 md:p-6 hover:border-orange-600/30 transition-colors"
            >
              <div className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                <span className="text-orange-600 mr-2">Q.</span>
                {f.q}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function ServicesClient() {
  const router = useRouter();
  return (
    <main>
      <PageHero
        title="Premium Moving Services in Canada"
        subtitle="From local residential moves to nationwide commercial relocations — we have a moving solution for every need and budget."
        breadcrumb="Services"
      />

      <section style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}>
        <div className="container-custom">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
            <div className="section-badge" style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", border: "1px solid rgba(255, 90, 0, 0.2)", justifyContent: "center" }}>🚚 What We Offer</div>
            <h2 className="section-title" style={{ color: "#111827" }}>Comprehensive Relocation Solutions</h2>
            <div className="divider" style={{ background: "#ff5a00", margin: "0.75rem auto 1rem" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.75rem" }}>
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`reveal delay-${(i % 3 + 1) * 100}`}
                style={{ background: "#FFFFFF", borderRadius: 4, border: "1px solid #F3F4F6", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem", boxShadow: "0 4px 20px rgba(0,0,0,0.02)" }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                  <div className={`icon-box ${svc.color}`} style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", justifyContent: "center" }}><svc.icon size={26} weight="duotone" /></div>
                  <span style={{ background: "rgba(255, 90, 0, 0.1)", color: "#ff5a00", padding: "4px 12px", borderRadius: 4, fontSize: "0.78rem", fontWeight: 600 }}>{svc.price}</span>
                </div>
                <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#111827", margin: 0 }}>{svc.title}</h3>
                <p style={{ color: "#4B5563", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{svc.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {svc.features.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.82rem", color: "#374151" }}>
                      <Check size={14} weight="bold" style={{ color: "#ff5a00", flexShrink: 0 }} />{f}
                    </li>
                  ))}
                </ul>
                <button onClick={() => router.push("/get-quote")} style={{ marginTop: "auto", display: "flex", alignItems: "center", gap: 6, background: "none", border: "none", color: "#ff5a00", fontWeight: 600, fontSize: "0.875rem", cursor: "pointer", padding: 0 }}>
                  Book This Service <ArrowRight size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTable />
      <FAQ />

      <section style={{ background: "#ff5a00", padding: "4rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <div className="reveal">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 4vw, 2.2rem)", color: "var(--navy)", margin: "0 0 1rem" }}>Need a Custom Plan?</h2>
            <p style={{ color: "rgba(0,8,20,0.7)", marginBottom: "2rem", fontWeight: 500 }}>We offer tailored relocation packages for unique requirements. Contact us for a personalized estimate.</p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => router.push("/get-quote")} className="btn-secondary" style={{ background: "var(--navy)", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8, border: "none", padding: "14px 28px", borderRadius: "4px", fontWeight: 600 }}>
                Get Free Estimate <ArrowRight size={16} />
              </button>
              <a href="tel:+1800555ABIL" style={{ background: "rgba(0,8,20,0.1)", color: "var(--navy)", border: "2px solid rgba(0,8,20,0.2)", borderRadius: 4, padding: "14px 28px", fontWeight: 600, textDecoration: "none" }}>
                📞 +1-800-555-ABIL
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

