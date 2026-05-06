"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Phone, ArrowRight, CheckCircle, Star } from "@phosphor-icons/react";

export const Hero = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const checks = ["Licensed & Insured", "LTL Transportation", "Saskatchewan & Winnipeg"];

  return (
    <section
      id="home"
      className="hero-section"
      data-testid="hero-section"
      style={{ padding: "3.5rem 0 4rem" }}
    >
      <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>

        {/* ── Two-column: Text LEFT | GIF RIGHT ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >

          {/* ════ LEFT: Text Content ════ */}
          <div
            className="flex flex-col items-center text-center md:items-start md:text-left"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateY(20px)",
              transition: "opacity 0.85s ease, transform 0.85s ease",
            }}
          >
            {/* Top badge */}
            <div className="hero-badge" style={{ marginBottom: "1.25rem", fontSize: "0.78rem" }}>
              <Star size={14} weight="fill" />
              &nbsp;#1 Logistics Partner in Saskatchewan · 10+ Years Experience
            </div>

            {/* Heading */}
            <h1 className="hero-title" style={{ marginBottom: "1.1rem" }}>
              Reliable Moving &<br />
              <span className="gradient-text">Trucking Services</span><br />
            </h1>

            {/* Sub-text */}
            <p style={{ fontSize: "1.05rem", color: "#E5E7EB", lineHeight: 1.75, marginBottom: "1.5rem", maxWidth: 480 }}>
              TMM Logistics Inc provides expert residential moving and regional trucking solutions. 
              Specializing in families, organizations, and LTL freight across Saskatchewan and Winnipeg.
            </p>

            {/* Check list */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem", marginBottom: "1.75rem" }}>
              {checks.map((c) => (
                <span key={c} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.875rem", color: "#FFFFFF", fontWeight: 500 }}>
                  <CheckCircle size={18} weight="fill" style={{ color: "#16a34a" }} />
                  {c}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem", marginBottom: "2.25rem" }}>
              <button
                onClick={() => router.push("/get-quote")}
                className="btn-primary"
                data-testid="hero-get-quote-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "#000814", borderColor: "#000814" }}
              >
                Get Free Quote <ArrowRight size={17} weight="bold" />
              </button>
              <a
                href="tel:+130609940409"
                className="btn-outline"
                data-testid="hero-call-btn"
                style={{ display: "inline-flex", alignItems: "center", gap: 7, color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}
              >
                <Phone size={17} weight="fill" />
                Call 306-0994-0409
              </a>
            </div>

            {/* Stat pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.85rem" }}>
              {[
                { value: "15+",   label: "Years Experience" },
                { value: "5K+",   label: "Moves Completed" },
                { value: "100%",  label: "Safe & Insured" },
                { value: "10+",   label: "City Locations" },
              ].map(({ value, label }) => (
                <div key={label} className="hero-stat-pill">
                  <div>
                    <div style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.25rem", color: "var(--secondary)", lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: "0.72rem", color: "#D1D5DB", marginTop: 2 }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ════ RIGHT: Animated Illustration ════ */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(50px)",
              transition: "opacity 0.85s ease 0.2s, transform 0.85s ease 0.2s",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Decorative ring behind image */}
            <div
              style={{
                position: "absolute",
                width: "90%",
                height: "90%",
                top: "5%",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
              }}
            />

            {/* Main illustration */}
            <div
              style={{
                position: "relative",
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
                background: "var(--navy-mid)",
                width: "100%",
                animation: "float 5s ease-in-out infinite",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <img
                src="/tmm-hero-truck.png"
                alt="Professional TMM Logistics truck serving Saskatchewan and Winnipeg"
                style={{ width: "100%", height: "auto", display: "block" }}
                data-testid="hero-image"
              />

              {/* Verified badge */}
              <div
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "var(--navy-mid)",
                  borderRadius: 12,
                  padding: "8px 14px",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  animation: "float 3.5s ease-in-out infinite 0.5s",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>🛡️</span>
                <div>
                  <div style={{ fontSize: "0.65rem", color: "var(--text-muted)" }}>Fully</div>
                  <div style={{ fontWeight: 700, color: "#16a34a", fontSize: "0.82rem", fontFamily: "Poppins" }}>Insured</div>
                </div>
              </div>

              {/* Support badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: 16,
                  left: 16,
                  background: "var(--secondary)",
                  borderRadius: 12,
                  padding: "8px 14px",
                  boxShadow: "0 4px 16px rgba(234, 179, 8, 0.3)",
                  animation: "float 4s ease-in-out infinite 1s",
                }}
              >
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.75)" }}>Reliable</div>
                <div style={{ fontWeight: 700, color: "#000", fontSize: "0.82rem", fontFamily: "Poppins" }}>📦 LTL Freight</div>
              </div>
            </div>

            {/* Reviews row below image */}
            <div
              style={{
                marginTop: "1.25rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "#111",
                borderRadius: 14,
                padding: "12px 20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                border: "1px solid #222",
                width: "100%",
                justifyContent: "center",
              }}
            >
              <div style={{ display: "flex", gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" style={{ color: "var(--secondary)" }} />
                ))}
              </div>
              <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#fff" }}>4.9/5</div>
              <div style={{ width: 1, height: 20, background: "#222" }} />
              <div style={{ fontSize: "0.82rem", color: "#D1D5DB" }}>Top Rated Logistics in Saskatchewan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

