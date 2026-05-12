"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Medal, UsersThree, ShieldCheck, Globe, ArrowRight, Truck, Package, Warehouse, Headset } from "@phosphor-icons/react";

const PageHero = ({ title, subtitle, breadcrumb }) => (
  <section style={{ background: "var(--navy)", padding: "5rem 0 4rem", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.82rem", color: "#D1D5DB", marginBottom: "1rem" }}>
        <Link href="/" style={{ color: "var(--secondary)", textDecoration: "none", fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: "#9CA3AF" }}>{breadcrumb}</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 6vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.25rem", lineHeight: 1.1 }}>{title}</h1>
      <p style={{ color: "#E5E7EB", fontSize: "1.1rem", maxWidth: 600, lineHeight: 1.7, margin: 0 }}>{subtitle}</p>
    </div>
  </section>
);

const Story = () => (
  <section className="bg-white py-10 md:py-16 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <div className="text-sm text-primary mb-2">📖 Our Story</div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">Saskatoon's Trusted Moving Partner</h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
            Based in Saskatoon, we have built a reputation for excellence in white-glove relocation and specialized household transportation.
          </p>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            We handle everything from local studio moves to complex corporate relocations with precision and care.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Licensed & Insured", "BBB Accredited", "Certified Packers", "5-Star Rated"].map((b) => (
              <span key={b} className="bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full text-xs font-semibold">✓ {b}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
          {[
            { value: "10+", label: "Years Experience", icon: <Truck size={32} weight="fill" />, bg: "bg-gray-50", color: "text-primary" },
            { value: "100%", label: "Safe Handling", icon: <Package size={32} weight="fill" />, bg: "bg-gray-50", color: "text-yellow-600" },
            { value: "Local", label: "Moving Experts", icon: <Warehouse size={32} weight="fill" />, bg: "bg-gray-50", color: "text-green-600" },
            { value: "24/7", label: "Client Support", icon: <Headset size={32} weight="fill" />, bg: "bg-gray-50", color: "text-purple-600" },
          ].map((s, idx) => (
            <div key={idx} className={`${s.bg} border border-gray-100 rounded-xl p-4 md:p-6 text-center flex flex-col items-center`}>
              <div className={`mb-2 ${s.color}`}>{s.icon}</div>
              <div className={`text-xl md:text-2xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-xs text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Values = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", justifyContent: "center" }}>💡 Our Values</div>
        <h2 className="section-title" style={{ color: "#fff" }}>Reliable Moving, Every Time</h2>
        <div className="divider" style={{ background: "var(--secondary)", margin: "0.75rem auto 0" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
        {[
          { icon: ShieldCheck, title: "Honest Pricing", desc: "We provide detailed, binding estimates with no hidden fees. Transparency is at the core of our moving model.", color: "icon-yellow" },
          { icon: Medal, title: "Expert Handling", desc: "From fragile household items to high-value antiques, we ensure only the best for your belongings.", color: "icon-yellow" },
          { icon: UsersThree, title: "Client First", desc: "Our team is dedicated to ensuring you're never alone during your relocation or shipping process.", color: "icon-yellow" },
          { icon: Globe, title: "Regional Network", desc: "Based in Saskatoon, our reach extends across Saskatoon and neighbouring province, ensuring a smooth delivery.", color: "icon-yellow" },
        ].map((v, i) => (
          <div key={v.title} className={`feature-card reveal delay-${(i + 1) * 100}`} style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div className={`icon-box ${v.color}`} style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", margin: "0 auto 1.25rem" }}><v.icon size={26} weight="duotone" /></div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "1rem", color: "#FFFFFF", margin: "0 0 0.5rem" }}>{v.title}</h3>
            <p style={{ color: "#D1D5DB", fontSize: "0.875rem", lineHeight: 1.65, margin: 0 }}>{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section style={{ background: "#FFFFFF", padding: "5rem 0", borderTop: "1px solid #F3F4F6" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", justifyContent: "center" }}>📅 Milestones</div>
        <h2 className="section-title" style={{ color: "#111827" }}>Our Journey</h2>
        <div className="divider" style={{ background: "var(--secondary)", margin: "0.75rem auto 0" }} />
      </div>
      <div style={{ maxWidth: 700, margin: "0 auto", display: "flex", flexDirection: "column", gap: 0 }}>
        {[
          { year: "2014", title: "Inception", desc: "TMM Logistics INC started operations with a focus on local residential relocations in Saskatoon." },
          { year: "2017", title: "Full-Service Expansion", desc: "Launched comprehensive packing and climate-controlled storage solutions." },
          { year: "2019", title: "Winnipeg Expansion", desc: "Expanded our reach to serve the Winnipeg area with weekly schedules." },
          { year: "2021", title: "Freight Services", desc: "Introduced Less-Than-Truckload services for warehouses and small businesses." },
          { year: "2023", title: "Fleet Modernization", desc: "Upgraded our fleet with advanced GPS tracking and eco-friendly transport options." },
          { year: "2024", title: "A Trusted Name", desc: "Proudly recognized as a leading moving partner for families and warehouses alike." },
        ].map((m, i) => (
          <div key={m.year} className={`reveal delay-${(i % 3 + 1) * 100}`} style={{ display: "flex", gap: "1.5rem", paddingBottom: "2rem", position: "relative" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--secondary)", color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "0.75rem", flexShrink: 0, zIndex: 1 }}>{m.year}</div>
              {i < 5 && <div style={{ width: 2, flex: 1, background: "#F3F4F6", marginTop: 4 }} />}
            </div>
            <div style={{ background: "#FFFFFF", borderRadius: 12, padding: "1.25rem 1.5rem", border: "1px solid #F3F4F6", flex: 1, marginTop: 6, boxShadow: "0 4px 15px rgba(0,0,0,0.03)" }}>
              <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, color: "#111827", marginBottom: 4 }}>{m.title}</div>
              <p style={{ color: "#4B5563", fontSize: "0.875rem", margin: 0, lineHeight: 1.65 }}>{m.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Team = () => (
  <section style={{ background: "var(--navy)", padding: "5rem 0", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
    <div className="container-custom">
      <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", justifyContent: "center" }}>👥 Our Team</div>
        <h2 className="section-title" style={{ color: "#fff" }}>Meet Our Logistics Experts</h2>
        <div className="divider" style={{ background: "var(--secondary)", margin: "0.75rem auto 0" }} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {[
          { name: "Management Team", role: "TMM Logistics INC Leaders", exp: "5+ years", color: "var(--secondary)", init: "TMM" },
          { name: "Logistics Team", role: "Freight Specialists", exp: "10+ years", color: "var(--secondary)", init: "LT" },
          { name: "Support Team", role: "Client Success", exp: "8+ years", color: "var(--secondary)", init: "ST" },
          { name: "Field Team", role: "Professional Movers", exp: "12+ years", color: "var(--secondary)", init: "FT" },
        ].map((t, i) => (
          <div key={t.name} className={`card reveal delay-${(i + 1) * 100}`} style={{ textAlign: "center", background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.4rem", margin: "0 auto 1rem", border: "2px solid var(--secondary)" }}>{t.init}</div>
            <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#FFFFFF", marginBottom: 4 }}>{t.name}</div>
            <div style={{ color: "var(--secondary)", fontSize: "0.82rem", fontWeight: 600, marginBottom: 4 }}>{t.role}</div>
            <div style={{ color: "#D1D5DB", fontSize: "0.78rem" }}>{t.exp} experience</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default function AboutClient() {
  const router = useRouter();
  return (
    <main>
      <PageHero
        title="About TMM Logistics INC "
        subtitle="Saskatoon's premier partner for residential moving, long-distance relocation, and secure storage. Discover our commitment to Western Canada."
        breadcrumb="About"
      />
      <Story />
      <Values />
      <Timeline />
      <Team />
      <section style={{ background: "var(--primary)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <div className="reveal">
            <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2rem)", color: "#000000", margin: "0 0 1rem" }}>
              Join Thousands of Happy Clients
            </h2>
            <p style={{ color: "rgba(0,0,0,0.7)", marginBottom: "2rem", fontWeight: 500 }}>Experience the TMM Logistics INC difference — where your transport is our priority.</p>
            <button onClick={() => router.push("/get-quote")} className="btn-secondary" style={{ background: "#000814", color: "#fff", display: "inline-flex", alignItems: "center", gap: 8, border: "none", padding: "12px 24px", borderRadius: "4px", fontWeight: 600 }}>
              Get Your Free Quote <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

