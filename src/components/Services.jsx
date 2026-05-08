"use client";

import { House, Truck, Buildings, Package, Warehouse, PianoKeys, Globe, Check, ArrowRight } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Link from "next/link";

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
      href: "/moving-services",
    },
    {
      icon: Truck,
      title: "Long Distance Moving",
      description: "Dedicated relocation services across Western Canada. Safe and on-time transportation for your provincial move.",
      features: ["Alberta routes", "Winnipeg connections", "Scheduled delivery"],
      color: "icon-yellow",
      delay: "delay-200",
      href: "/moving-services",
    },
    {
      icon: Buildings,
      title: "Commercial Moving",
      description: "Professional business and office relocation services. We minimize downtime and ensure a smooth transition.",
      features: ["Office equipment", "After-hours moving", "Asset management"],
      color: "icon-green",
      delay: "delay-300",
      href: "/moving-services",
    },
    {
      icon: Package,
      title: "Packing & Supplies",
      description: "Professional packing services and high-quality moving supplies to protect your valuables during transit.",
      features: ["Custom crating", "Fragile care", "Moving boxes"],
      color: "icon-purple",
      delay: "delay-100",
      href: "/moving-services#packing",
    },
    {
      icon: Warehouse,
      title: "Secure Storage",
      description: "Climate-controlled storage solutions for short-term and long-term needs during your relocation.",
      features: ["24/7 Security", "Climate control", "Inventory tracking"],
      color: "icon-blue",
      delay: "delay-200",
      href: "/moving-services#storage",
    },
    {
      icon: Globe,
      title: "Senior Relocations",
      description: "Compassionate and professional moving services tailored to the unique needs of seniors and their families.",
      features: ["Downsizing help", "Careful handling", "Patient team"],
      color: "icon-yellow",
      delay: "delay-300",
      href: "/moving-services",
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
            Professional Moving & Storage Solutions
          </h2>
          <div className="divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            From local house moves to long-distance relocation and secure storage, TMM Moving 
            provides expert relocation services across Saskatchewan and Winnipeg.
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

              <Link
                href={svc.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "var(--primary)",
                  cursor: "pointer",
                  marginTop: "auto",
                  textDecoration: "none"
                }}
              >
                Learn more <ArrowRight size={14} className="animate-bounce-x" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

