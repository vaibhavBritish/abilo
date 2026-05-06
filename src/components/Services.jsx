"use client";

import { House, Truck, Buildings, Package, Warehouse, PianoKeys, Globe, Check, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const Services = () => {
  const sectionRef = useScrollReveal();

  const services = [
    {
      icon: House,
      title: "Residential Moving",
      description: "Fast and efficient residential moving services in Saskatchewan and Winnipeg. We handle your family's belongings with utmost care.",
      features: ["House & Apartment", "Local expertise", "Furniture assembly"],
      color: "icon-green",
      delay: "delay-100",
    },
    {
      icon: Truck,
      title: "Regional Trucking",
      description: "Dedicated trucking services across Western Canada. Reliable and on-time transportation for your regional needs.",
      features: ["Saskatchewan routes", "Winnipeg connections", "Scheduled freight"],
      color: "icon-yellow",
      delay: "delay-200",
    },
    {
      icon: Buildings,
      title: "Commercial Moving",
      description: "Professional business and office relocation services. We minimize downtime and ensure a smooth transition.",
      features: ["Office equipment", "After-hours moving", "Asset management"],
      color: "icon-green",
      delay: "delay-300",
    },
    {
      icon: Package,
      title: "LTL Transportation",
      description: "Efficient Less-Than-Truckload services for warehouses and businesses needing regional transportation.",
      features: ["Cost-effective", "Regular schedules", "Small load specialists"],
      color: "icon-purple",
      delay: "delay-100",
    },
    {
      icon: Warehouse,
      title: "Warehousing & Storage",
      description: "Secure warehousing solutions for regional distribution and long-term storage needs.",
      features: ["Secure facility", "Flexible storage", "Inventory support"],
      color: "icon-blue",
      delay: "delay-200",
    },
    {
      icon: Globe,
      title: "Specialized Logistics",
      description: "Custom logistics solutions tailored to organizations and high-volume transportation needs.",
      features: ["Project logistics", "Dedicated support", "Western Canada reach"],
      color: "icon-yellow",
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
            Professional Moving & Trucking Solutions
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From residential relocation to regional trucking and LTL freight, TMM Logistics Inc 
            provides expert transportation services across Saskatchewan and Winnipeg.
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
                  <span key={f} className="service-feature-tag" style={{ background: "var(--primary-light)", color: "var(--primary-dark)", border: "1px solid var(--primary-light)" }}>
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

