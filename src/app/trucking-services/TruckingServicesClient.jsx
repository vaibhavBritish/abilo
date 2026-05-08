"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Truck, Warehouse, Globe, ShieldCheck, Clock, MapPin, ArrowRight, Kanban, ChartLineUp } from "@phosphor-icons/react";

const PageHero = ({ title, subtitle, breadcrumb }) => (
  <section style={{ background: "var(--navy)", padding: "6rem 0 5rem", position: "relative", overflow: "hidden" }}>
    <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "50%", height: "150%", background: "radial-gradient(circle, rgba(234,179,8,0.03) 0%, transparent 60%)", pointerEvents: "none" }} />
    <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", color: "var(--secondary)", marginBottom: "1.5rem", fontWeight: 600 }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
        <span style={{ opacity: 0.5 }}>›</span>
        <span style={{ color: "#fff", opacity: 0.8 }}>{breadcrumb}</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 8vw, 4.5rem)", color: "#FFFFFF", margin: "0 0 1.5rem", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
        {title.split(" ").map((word, i) => i === 0 ? <span key={i} style={{ color: "var(--secondary)" }}>{word} </span> : word + " ")}
      </h1>
      <p style={{ color: "#D1D5DB", fontSize: "1.2rem", maxWidth: 650, lineHeight: 1.8, margin: 0 }}>{subtitle}</p>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, desc, highlights }) => (
  <div style={{ background: "#fff", borderRadius: 12, padding: "3rem", border: "1px solid #F3F4F6", boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}>
    <div style={{ background: "var(--navy)", color: "var(--secondary)", width: 64, height: 64, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "2rem" }}>
      <Icon size={36} weight="duotone" />
    </div>
    <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "var(--navy)", marginBottom: "1.25rem" }}>{title}</h3>
    <p style={{ color: "#4B5563", fontSize: "1.05rem", lineHeight: 1.7, marginBottom: "2rem" }}>{desc}</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
      {highlights.map(h => (
        <div key={h} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "0.9rem", color: "#111827", fontWeight: 600 }}>
          <div style={{ width: 6, height: 6, background: "var(--secondary)", borderRadius: "50%" }} /> {h}
        </div>
      ))}
    </div>
  </div>
);

export default function LongDistanceMovingClient() {
  const router = useRouter();

  return (
    <main style={{ background: "#F9FAFB" }}>
      <PageHero 
        title="Provincial & Long Distance Moving"
        subtitle="Bridging the distance with secure, bonded relocation solutions. Specialized household transportation from Saskatchewan to Winnipeg and across Western Canada."
        breadcrumb="Long Distance Moving"
      />

      <section style={{ padding: "6rem 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem" }}>
            <ServiceCard 
              icon={Truck}
              title="Inter-Provincial Moving"
              desc="Our specialized long-distance team ensures your belongings travel safely across provincial lines. We offer dedicated trucks for your family's peace of mind."
              highlights={["Direct Routes", "Door-to-Door", "Inventory Tracking", "Climate Protection", "Scheduled Delivery", "Binding Quotes"]}
            />
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
              <div style={{ background: "var(--navy)", color: "#fff", borderRadius: 12, padding: "3rem" }}>
                <Warehouse size={48} weight="duotone" style={{ color: "var(--secondary)", marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem" }}>Secure Storage Hubs</h3>
                <p style={{ opacity: 0.8, lineHeight: 1.7, marginBottom: "1.5rem" }}>Safe storage facilities in Saskatoon and Winnipeg to bridge the gap between your old and new home.</p>
                <Link href="/moving-services#storage" style={{ color: "var(--secondary)", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
                  Explore Storage Options <ArrowRight size={18} />
                </Link>
              </div>
              <div style={{ background: "#fff", border: "1px solid #E5E7EB", borderRadius: 12, padding: "3rem" }}>
                <Globe size={48} weight="duotone" style={{ color: "var(--navy)", marginBottom: "1.5rem" }} />
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1rem", color: "var(--navy)" }}>Western Canada Network</h3>
                <p style={{ color: "#6B7280", lineHeight: 1.7, marginBottom: "1.5rem" }}>Comprehensive coverage across Saskatchewan, Manitoba, and Alberta with regular moving schedules.</p>
                <div style={{ display: "flex", gap: "1.5rem" }}>
                   <div style={{ textAlign: "center" }}>
                     <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--navy)" }}>50+</div>
                     <div style={{ fontSize: "0.75rem", color: "#9CA3AF", textTransform: "uppercase" }}>Cities Served</div>
                   </div>
                   <div style={{ textAlign: "center" }}>
                     <div style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--navy)" }}>100%</div>
                     <div style={{ fontSize: "0.75rem", color: "#9CA3AF", textTransform: "uppercase" }}>Safe Delivery</div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration & Tech Section */}
      <section style={{ background: "#fff", padding: "6rem 0", borderTop: "1px solid #F3F4F6" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div style={{ position: "relative" }}>
              <img 
                src="/tmm-long-distance.png" 
                alt="Modern Long Distance Moving" 
                style={{ width: "100%", borderRadius: 20, boxShadow: "0 30px 60px rgba(0,0,0,0.1)" }}
              />
              <div style={{ position: "absolute", bottom: -30, right: -30, background: "var(--secondary)", padding: "2rem", borderRadius: 16, boxShadow: "0 10px 30px rgba(0,0,0,0.1)", maxWidth: 200 }}>
                <div style={{ fontSize: "2rem", fontWeight: 900, color: "#000" }}>4.9/5</div>
                <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "rgba(0,0,0,0.6)" }}>Average Google Rating</div>
              </div>
            </div>
            <div>
              <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", marginBottom: "1.5rem" }}>
                🚀 TECH-DRIVEN MOVING
              </div>
              <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "var(--navy)", marginBottom: "1.5rem", lineHeight: 1.1 }}>
                Smart Systems for <span style={{ color: "var(--secondary)" }}>Total Peace of Mind</span>
              </h2>
              <p style={{ color: "#4B5563", fontSize: "1.1rem", lineHeight: 1.8, marginBottom: "2rem" }}>
                We use advanced tracking and GHL-integrated workflows to keep you informed at every stage of your long-distance move.
              </p>
              
              <div style={{ display: "grid", gap: "1.5rem" }}>
                {[
                  { icon: Kanban, title: "Status Updates", desc: "Instantly receive booking confirmations and moving updates via GHL." },
                  { icon: ChartLineUp, title: "Arrival Estimates", desc: "Real-time updates on when our team will reach your new home." },
                  { icon: ShieldCheck, title: "Verified Crew", desc: "Background-checked and certified professional moving experts." }
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1.25rem" }}>
                    <div style={{ color: "var(--secondary)", marginTop: 4 }}><item.icon size={28} weight="fill" /></div>
                    <div>
                      <h4 style={{ fontSize: "1.2rem", fontWeight: 800, color: "var(--navy)", marginBottom: 4 }}>{item.title}</h4>
                      <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--navy)", padding: "5rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontSize: "2.5rem", fontWeight: 900, color: "#fff", marginBottom: "1rem" }}>Ready for the Big Move?</h2>
          <p style={{ color: "#D1D5DB", marginBottom: "2.5rem", fontSize: "1.1rem" }}>Get your binding long-distance quote today and experience a stress-free relocation.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <button onClick={() => router.push("/get-quote")} style={{ background: "var(--secondary)", color: "#000", padding: "16px 40px", borderRadius: 4, fontWeight: 700, border: "none", cursor: "pointer" }}>
              Get Moving Quote
            </button>
            <Link href="/contact" style={{ border: "2px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 40px", borderRadius: 4, fontWeight: 700, textDecoration: "none" }}>
              Speak with a Move Coordinator
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
