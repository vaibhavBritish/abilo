"use client";

import { Medal, UsersThree, Headset, Tag, ShieldCheck, Clock, Truck, Star } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const WhyChooseUs = () => {
  const sectionRef = useScrollReveal();

  const stats = [
    { value: "15+", label: "Years Excellence", suffix: "" },
    { value: "5,000", label: "Happy Clients", suffix: "+" },
    { value: "100", label: "Safe Moves", suffix: "%" },
    { value: "24/7", label: "Moving Support", suffix: "" },
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Licensed & Insured",
      desc: "Your move is 100% protected. We are fully licensed, insured, and bonded for local and long-distance moves across Canada.",
      color: "icon-blue",
      delay: "delay-100",
    },
    {
      icon: Clock,
      title: "Real-time Tracking",
      desc: "Stay updated throughout your move. We provide real-time GPS tracking for our moving trucks during long-distance transits.",
      color: "icon-green",
      delay: "delay-200",
    },
    {
      icon: Medal,
      title: "Professional Movers",
      desc: "Our team consists of highly trained, background-checked professional movers who handle your items with extreme care.",
      color: "icon-orange",
      delay: "delay-300",
    },
    {
      icon: Tag,
      title: "Transparent Pricing",
      desc: "No hidden fees. We provide clear, upfront moving quotes so you know exactly what you're paying for from start to finish.",
      color: "icon-purple",
      delay: "delay-400",
    },
    {
      icon: Truck,
      title: "Equipped Fleet",
      desc: "We own a modern fleet of well-maintained moving trucks equipped with ramps, lifts, and padding for maximum safety.",
      color: "icon-blue",
      delay: "delay-100",
    },
    {
      icon: Star,
      title: "Top Rated Service",
      desc: "Trusted by thousands of families and businesses across Canada for our reliable and premium relocation services.",
      color: "icon-orange",
      delay: "delay-200",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      data-testid="why-choose-us-section"
      style={{ background: "var(--navy)", padding: 0 }}
    >
      {/* Stats banner */}
      <div className="stats-banner">
        <div className="container-custom">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "0",
            }}
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="stat-item reveal"
                style={{
                  textAlign: "center",
                  flex: "1 1 180px",
                  maxWidth: 240,
                }}
              >
                <div className="stat-number">
                  {s.value}<span style={{ fontSize: "0.6em" }}>{s.suffix}</span>
                </div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div style={{ padding: "5rem 0" }}>
        <div className="container-custom">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <div className="section-badge">
              <Medal size={14} weight="fill" />
              Canada's Most Trusted Moving Company
            </div>
            <h2 className="section-title" style={{ color: "#FFFFFF" }}>
              Why Choose Abilo
            </h2>
            <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
            <p className="section-subtitle" style={{ margin: "0 auto", color: "#D1D5DB" }}>
              We're committed to making your relocation stress-free, seamless,
              and efficient. Trust the experts for your next move.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {features.map((f) => (
              <div
                key={f.title}
                className={`feature-card reveal ${f.delay}`}
                data-testid={`feature-card-${f.title.toLowerCase().replace(" ", "-")}`}
                style={{ background: "var(--navy-mid)", border: "1px solid rgba(255,255,255,0.05)" }}
              >
                <div className={`icon-box ${f.color}`}>
                  <f.icon size={26} weight="duotone" />
                </div>
                <h3
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1.05rem",
                    color: "#FFFFFF",
                    margin: "0 0 0.5rem",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ color: "#D1D5DB", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

