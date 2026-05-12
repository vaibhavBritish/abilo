"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { House, BuildingOffice, Package, Check, ArrowRight, ShieldCheck, Clock, MapPin, Calendar, Truck, Star, Globe, Warehouse, PianoKeys } from "@phosphor-icons/react";

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
          Start Your Move <ArrowRight size={20} weight="bold" />
        </button>
        <a href="tel:+130609940409" style={{ border: "2px solid rgba(255,255,255,0.2)", color: "#fff", padding: "14px 30px", borderRadius: "4px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: 10 }}>
          Call for Estimate
        </a>
      </div>
    </div>
  </section>
);

const MovingFeature = ({ icon: Icon, title, desc, features, id }) => (
  <div id={id} style={{ background: "#fff", borderRadius: 8, padding: "2.5rem", border: "1px solid #F3F4F6", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
    <div style={{ background: "rgba(234,179,8,0.1)", color: "var(--secondary)", width: 56, height: 56, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
      <Icon size={32} weight="duotone" />
    </div>
    <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>{title}</h3>
    <p style={{ color: "#4B5563", fontSize: "1rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>{desc}</p>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem" }}>
      {features.map(f => (
        <li key={f} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#374151", fontWeight: 500 }}>
          <Check size={16} weight="bold" style={{ color: "var(--secondary)" }} /> {f}
        </li>
      ))}
    </ul>
  </div>
);

export default function MovingServicesClient() {
  const router = useRouter();

  return (
    <main style={{ background: "#F9FAFB" }}>
      <PageHero
        title="White-Glove Relocation Solutions"
        subtitle="Saskatoon's most trusted home and office movers. From studio apartments to corporate headquarters, we handle every item with the care it deserves."
        breadcrumb="Moving Services"
      />

      {/* Main Services Grid */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-custom">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", margin: "0 auto 1rem", justifyContent: "center" }}>
              📦 RESIDENTIAL & COMMERCIAL
            </div>
            <h2 className="section-title" style={{ color: "var(--navy)" }}>Everything Related to Moving</h2>
            <div className="divider" style={{ background: "var(--secondary)", margin: "1rem auto" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            <MovingFeature
              icon={House}
              title="Residential Moving"
              id="residential"
              desc="Moving your family shouldn't be stressful. We provide end-to-end residential relocation services across Saskatoon and neighbouring province."
              features={["Full Packing", "Fragile Item Care", "Furniture Setup", "Unpacking Help", "Local Experts", "Long Distance"]}
            />
            <MovingFeature
              icon={BuildingOffice}
              title="Commercial Relocation"
              id="commercial"
              desc="Minimize downtime with our efficient business moving solutions. We handle office furniture, IT equipment, and archives."
              features={["Asset Management", "IT Disconnect", "System Furniture", "After-hours Moves", "Project Lead", "Inventory Logs"]}
            />
            <MovingFeature
              icon={Package}
              title="Packing & Supplies"
              id="packing"
              desc="Professional packing ensures your belongings arrive safely. We use premium materials and proven techniques for maximum protection."
              features={["Custom Crating", "Wardrobe Boxes", "Bubble Wrapping", "Labeling System", "Material Supply", "Art Protection"]}
            />
            <MovingFeature
              icon={Truck}
              title="Long Distance Moving"
              id="long-distance"
              desc="Dedicated relocation services across Western Canada. Safe and on-time transportation for your provincial move."
              features={["Alberta routes", "Winnipeg connections", "Scheduled delivery", "GPS Tracking", "Full Valuation", "Direct Service"]}
            />
            <MovingFeature
              icon={Globe}
              title="Senior Relocations"
              id="senior-relocations"
              desc="Compassionate and professional moving services tailored to the unique needs of seniors and their families."
              features={["Downsizing help", "Careful handling", "Patient team", "Family liaison", "Setup assistance", "Charity drop-offs"]}
            />
            <MovingFeature
              icon={Warehouse}
              title="Secure Storage"
              id="storage"
              desc="Climate-controlled storage solutions for short-term and long-term needs during your relocation."
              features={["24/7 Security", "Climate control", "Inventory tracking", "Easy access", "Fully insured", "Clean facility"]}
            />
          </div>
        </div>
      </section>


      {/* Moving Tips / SEO Section */}
      <section style={{ padding: "6rem 0" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title">Moving Resources</h2>
            <p className="section-subtitle">Everything you need to know before your big day.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {[
              {
                title: "Ultimate Packing Checklist",
                time: "5 min read",
                img: "/tmm-packing.png",
                slug: "packing-checklist"
              },
              {
                title: "Senior Relocation Guide",
                time: "8 min read",
                img: "/tmm-senior-move.png",
                slug: "senior-relocation-guide"
              },
              {
                title: "Province to Province Guide",
                time: "12 min read",
                img: "/tmm-long-distance.png",
                slug: "long-distance-moving-guide"
              }
            ].map((blog, i) => (
              <div key={i} style={{ background: "#fff", borderRadius: 8, overflow: "hidden", border: "1px solid #E5E7EB", transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"} onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}>
                <div style={{ height: 200, background: `url(${blog.img}) center/cover` }} />
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--secondary)", fontWeight: 700, marginBottom: "0.5rem" }}>TIPS & TRICKS • {blog.time}</div>
                  <h4 style={{ fontSize: "1.25rem", fontWeight: 800, marginBottom: "1rem", color: "var(--navy)" }}>{blog.title}</h4>
                  <Link href={`/resources/${blog.slug}`} style={{ color: "var(--secondary)", fontWeight: 700, textDecoration: "none", fontSize: "0.9rem", display: "flex", alignItems: "center", gap: 4 }}>
                    Read More <ArrowRight size={14} weight="bold" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Review Section */}
      <section style={{ background: "#fff", padding: "6rem 0", borderTop: "1px solid #F3F4F6" }}>
        <div className="container-custom">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--navy)", margin: "0 0 1rem" }}>
              Trusted by 5,000+ Families & Businesses
            </h3>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: "0.5rem" }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} weight="fill" style={{ color: "var(--secondary)" }} />)}
            </div>
            <p style={{ color: "#6B7280", fontSize: "0.95rem", fontWeight: 500 }}>Saskatoon's Top-Rated Professional Movers</p>
          </div>

          <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "4rem",
            flexWrap: "wrap",
            background: "#F9FAFB",
            padding: "3rem",
            borderRadius: 12,
            border: "1px solid #F3F4F6"
          }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={{ height: 28, opacity: 0.8 }} />
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#374151", opacity: 0.7, letterSpacing: "-0.01em" }}>Saskatoon's Best Movers</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#374151", opacity: 0.7, letterSpacing: "-0.01em" }}>Winnipeg's Choice</div>
            <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#374151", opacity: 0.7, letterSpacing: "-0.01em" }}>Relocation Certified</div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--secondary)", padding: "4rem 0", textAlign: "center" }}>
        <div className="container-custom">
          <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2.5rem", color: "#000", marginBottom: "1rem" }}>Ready to Relocate?</h2>
          <p style={{ color: "rgba(0,0,0,0.7)", marginBottom: "2.5rem", fontWeight: 600, fontSize: "1.1rem" }}>Get your binding quote today and experience the TMM difference.</p>
          <button onClick={() => router.push("/get-quote")} style={{ background: "#000", color: "#fff", border: "none", padding: "16px 40px", borderRadius: 4, fontWeight: 700, fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 10px 30px rgba(0,0,0,0.15)" }}>
            Get Your Free Quote
          </button>
        </div>
      </section>
    </main>
  );
}
