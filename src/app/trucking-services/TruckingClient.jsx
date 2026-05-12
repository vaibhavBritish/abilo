"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Truck,
  Package,
  Check,
  ArrowRight,
  ShieldCheck,
  Clock,
  MapPin,
  Calendar,
  Star,
  HardHat,
  Barcode,
  NavigationArrow,
  Warehouse
} from "@phosphor-icons/react";

const PageHero = ({ title, subtitle, breadcrumb }) => (
  <section style={{ background: "var(--navy)", padding: "6rem 0 5rem", position: "relative", overflow: "hidden" }}>
    {/* Decorative Elements */}
    <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "40%", height: "120%", background: "radial-gradient(circle, rgba(234,179,8,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

    <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
      <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", fontSize: "0.85rem", color: "var(--secondary)", marginBottom: "1.5rem", fontWeight: 600 }}>
        <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
        <span style={{ opacity: 0.5 }}>›</span>
        <span style={{ color: "#fff", opacity: 0.8 }}>{breadcrumb}</span>
      </div>
      <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "clamp(2.5rem, 8vw, 4.5rem)", color: "#FFFFFF", margin: "0 0 1.5rem", lineHeight: 1.05, letterSpacing: "-0.02em" }}>
        {title.split(" ").map((word, i) => i === 1 ? <span key={i} style={{ color: "var(--secondary)" }}>{word} </span> : word + " ")}
      </h1>
      <p style={{ color: "#D1D5DB", fontSize: "1.2rem", maxWidth: 650, lineHeight: 1.8, margin: 0 }}>{subtitle}</p>

      <div style={{ display: "flex", gap: "1.25rem", marginTop: "2.5rem", flexWrap: "wrap" }}>
        <button onClick={() => window.location.href = '/get-quote'} style={{ background: "var(--secondary)", color: "#000", border: "none", padding: "16px 32px", borderRadius: "4px", fontWeight: 700, fontSize: "1rem", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
          Get Freight Quote <ArrowRight size={20} weight="bold" />
        </button>
        <a href="tel:+130609940409" style={{ border: "2px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 30px", borderRadius: "4px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          Dispatch Support
        </a>
      </div>
    </div>
  </section>
);

const TruckingFeature = ({ icon: Icon, title, desc, features }) => (
  <div style={{ background: "#fff", borderRadius: 8, padding: "2.5rem", border: "1px solid #F3F4F6", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
    <div style={{ background: "rgba(234,179,8,0.1)", color: "var(--secondary)", width: 56, height: 56, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
      <Icon size={32} weight="duotone" />
    </div>
    <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>{title}</h3>
    <p style={{ color: "#4B5563", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{desc}</p>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr", gap: "0.75rem" }}>
      {features.map(f => (
        <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#374151", fontWeight: 500 }}>
          <Check size={16} weight="bold" style={{ color: "var(--secondary)" }} /> {f}
        </li>
      ))}
    </ul>
  </div>
);

export default function TruckingClient() {
  const router = useRouter();

  return (
    <main style={{ background: "#F9FAFB" }}>
      <PageHero
        title="Regional Freight & Logistics Solutions"
        subtitle="Safe, reliable, and efficient trucking services across Saskatoon and Western Canada. We keep your supply chain moving with precision."
        breadcrumb="Trucking Services"
      />

      {/* Main Services Grid */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-custom">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", margin: "0 auto 1rem", justifyContent: "center" }}>
              🚚 FREIGHT & LOGISTICS
            </div>
            <h2 className="section-title" style={{ color: "var(--navy)" }}>Expert Trucking Solutions</h2>
            <div className="divider" style={{ background: "var(--secondary)", margin: "1rem auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            <TruckingFeature
              icon={Truck}
              title="Full Truckload (FTL)"
              desc="Dedicated equipment for your high-volume shipments. Optimal for large-scale cargo requiring direct transportation."
              features={["Dedicated Trailers", "Regional & Long-Haul", "Sealed Cargo Security", "Priority Delivery"]}
            />
            <TruckingFeature
              icon={Package}
              title="Less-Than-Truckload (LTL)"
              desc="Cost-effective solutions for smaller freight shipments. We optimize routes to save you money on provincial transport."
              features={["Consolidated Shipping", "Flexible Pickup", "Real-time Tracking", "Competitive Pricing"]}
            />
            <TruckingFeature
              icon={Warehouse}
              title="Logistics Management"
              desc="End-to-end supply chain support. We handle the planning, storage, and execution of your complex logistics needs."
              features={["Route Optimization", "Inventory Control", "Cross-Docking", "Last-Mile Delivery"]}
            />
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section style={{ background: "var(--navy)", padding: "6rem 0", color: "#fff" }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", marginBottom: "1.5rem" }}>
                🛡️ SAFETY FIRST
              </div>
              <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2.5rem", marginBottom: "1.5rem", lineHeight: 1.2 }}>
                The Standard for <span style={{ color: "var(--secondary)" }}>Safe Freight</span>
              </h2>
              <p style={{ fontSize: "1.1rem", color: "#D1D5DB", marginBottom: "2rem", lineHeight: 1.7 }}>
                TMM Logistics INC maintains a fleet of modern, meticulously serviced vehicles. Our drivers are trained in advanced safety protocols to ensure your cargo arrives on time and in perfect condition.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                {[
                  { icon: HardHat, title: "Certified Drivers", text: "Background checked and professionally trained logistics experts." },
                  { icon: NavigationArrow, title: "Advanced Fleet Tracking", text: "Real-time GPS monitoring for every shipment in our network." },
                  { icon: Barcode, title: "Precision Inventory", text: "Digital scanning and tracking for error-free cargo management." },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ color: "var(--secondary)", marginTop: 4 }}><item.icon size={24} weight="fill" /></div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "1.1rem", marginBottom: 2 }}>{item.title}</div>
                      <div style={{ color: "#9CA3AF", fontSize: "0.9rem" }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal" style={{ position: "relative" }}>
              <img
                src="/tmm-trucking-hero.png"
                alt="TMM Trucking Fleet"
                style={{ width: "100%", borderRadius: 20, boxShadow: "0 20px 50px rgba(0,0,0,0.5)" }}
              />
              <div style={{ position: "absolute", bottom: -20, left: 40, background: "var(--secondary)", padding: "1.5rem 2rem", borderRadius: 12, color: "#000", fontWeight: 800, boxShadow: "0 10px 30px rgba(234,179,8,0.3)" }}>
                <div style={{ fontSize: "2rem", lineHeight: 1 }}>99.9%</div>
                <div style={{ fontSize: "0.8rem", opacity: 0.8 }}>ON-TIME DELIVERY</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Showcase */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title">Our Modern Fleet</h2>
            <p className="section-subtitle">Diverse equipment to handle any transportation challenge.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {[
              { title: "Dry Van Trailers", text: "Standard 53' trailers for general palletized goods.", icon: Truck },
              { title: "Flatbed Solutions", text: "Specialized for oversized or side-loading cargo.", icon: HardHat },
              { title: "Refrigerated (Reefer)", text: "Temperature-controlled for sensitive shipments.", icon: ShieldCheck },
              { title: "Straight Trucks", text: "Ideal for city delivery and last-mile logistics.", icon: NavigationArrow }
            ].map((fleet, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 8, padding: "2rem", border: "1px solid #E5E7EB", textAlign: "center" }}>
                <div style={{ color: "var(--secondary)", marginBottom: "1rem" }}><fleet.icon size={48} weight="duotone" /></div>
                <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "0.75rem", color: "var(--navy)" }}>{fleet.title}</h4>
                <p style={{ color: "#6B7280", fontSize: "0.9rem", lineHeight: 1.6 }}>{fleet.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "var(--secondary)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#000", marginBottom: "1rem" }}>Streamline Your Logistics</h2>
          <p style={{ color: "rgba(0,0,0,0.7)", marginBottom: "2.5rem", fontWeight: 600, fontSize: "1.1rem" }}>Partner with Saskatoon's most reliable trucking network.</p>
          <button onClick={() => router.push("/get-quote")} style={{ background: "#000", color: "#fff", border: "none", padding: "16px 40px", borderRadius: 4, fontWeight: 700, fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
            Request Freight Quote
          </button>
        </div>
      </section>
    </main>
  );
}
