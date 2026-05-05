"use client";

import { House, Truck, Buildings, Package, Warehouse, PianoKeys, Globe, Check, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Services = () => {
  const sectionRef = useScrollReveal();

  const services = [
    {
      icon: House,
      title: "Local Moving",
      description: "Fast and efficient residential moving services within your city. We handle your belongings with care.",
      features: ["House & Apartment", "Same-day service", "Furniture assembly"],
      color: "icon-blue",
      delay: "delay-100",
    },
    {
      icon: Globe,
      title: "Long Distance Moving",
      description: "Provincial and national moving services across Canada. Secure transport for your cross-country move.",
      features: ["Inter-provincial", "GPS tracking", "Scheduled delivery"],
      color: "icon-orange",
      delay: "delay-200",
    },
    {
      icon: Buildings,
      title: "Office Relocation",
      description: "Professional commercial moving services. We minimize downtime for your business during the move.",
      features: ["IT equipment handling", "After-hours moving", "Project management"],
      color: "icon-green",
      delay: "delay-300",
    },
    {
      icon: Package,
      title: "Packing Services",
      description: "Expert packing and unpacking services. We use premium materials to keep your items safe during transit.",
      features: ["Full & partial packing", "Fragile item care", "Packing supplies"],
      color: "icon-purple",
      delay: "delay-100",
    },
    {
      icon: Warehouse,
      title: "Storage Solutions",
      description: "Secure, climate-controlled storage for your short-term or long-term needs during your relocation.",
      features: ["24/7 security", "Climate control", "Flexible terms"],
      color: "icon-blue",
      delay: "delay-200",
    },
    {
      icon: PianoKeys,
      title: "Specialty Moving",
      description: "Specialized handling for heavy or delicate items like pianos, fine art, and high-value equipment.",
      features: ["Piano moving", "Fine art crating", "White glove service"],
      color: "icon-orange",
      delay: "delay-300",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{ background: "#FFFFFF", padding: "5rem 0" }}
      data-testid="services-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-badge">
            <Truck size={14} weight="fill" />
            Our Services
          </div>
          <h2 className="section-title">
            Full-Service Moving Solutions in Canada
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From local apartment moves to cross-country office relocations, Abilo provides 
            end-to-end moving and storage services tailored to your needs.
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className={`reveal service-card-new ${svc.delay}`}
              data-testid={`service-card-${svc.title.toLowerCase().replace(" ", "-")}`}
            >
              <div className={`icon-box ${svc.color}`} style={{ transition: "all 0.3s" }}>
                <svc.icon size={26} weight="duotone" />
              </div>

              <h3
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "var(--text-dark)",
                  margin: 0,
                }}
              >
                {svc.title}
              </h3>

              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
                {svc.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {svc.features.map((f) => (
                  <span key={f} className="service-feature-tag" style={{ background: "rgba(255, 90, 0, 0.05)", color: "#4B5563", border: "1px solid rgba(255, 90, 0, 0.15)" }}>
                    <Check size={11} weight="bold" />
                    {f}
                  </span>
                ))}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  cursor: "pointer",
                  marginTop: "auto",
                }}
              >
                Learn more <ArrowRight size={14} className="animate-bounce-x" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

