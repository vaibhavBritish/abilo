"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  CheckCircle, 
  Info,
  Warning,
  ListChecks,
  House,
  Truck,
  Heart
} from "@phosphor-icons/react";

const resourceData = {
  "packing-checklist": {
    title: "Ultimate Packing Checklist",
    category: "Tips & Tricks",
    readTime: "5 min read",
    image: "/tmm-packing.png",
    content: [
      {
        type: "intro",
        text: "Moving can be overwhelming, but a systematic approach to packing can save you hours of stress and ensure your belongings arrive safely. This guide breaks down the essential steps for an efficient move."
      },
      {
        type: "section",
        title: "Phase 1: Preparation (4 Weeks Before)",
        items: [
          "Declutter every room: Donate, sell, or discard items you no longer need.",
          "Gather supplies: Get high-quality boxes, packing tape, bubble wrap, and markers.",
          "Create an inventory list: Track your high-value items for insurance purposes.",
          "Start with off-season items: Pack winter clothes in summer or vice versa."
        ]
      },
      {
        type: "section",
        title: "Phase 2: Packing Strategy",
        items: [
          "Label everything: Mark boxes with the destination room and a brief list of contents.",
          "Heavier items in small boxes: Avoid overpacking large boxes with books or heavy tools.",
          "Use plenty of padding: Protect fragile items with layers of bubble wrap or packing paper.",
          "The 'Essentials' box: Pack a separate box with daily necessities for the first night."
        ]
      },
      {
        type: "tip",
        text: "Professional Tip: Use your towels and linens as padding for fragile items to save space and reduce waste!"
      }
    ]
  },
  "senior-relocation-guide": {
    title: "Senior Relocation Guide",
    category: "Specialized Moving",
    readTime: "8 min read",
    image: "/tmm-senior-move.png",
    content: [
      {
        type: "intro",
        text: "Moving later in life requires a specialized approach that prioritizes comfort, safety, and emotional well-being. At TMM, we specialize in helping seniors transition to new homes with dignity and care."
      },
      {
        type: "section",
        title: "The Emotional Transition",
        items: [
          "Take it slow: Give yourself or your loved one time to process the change.",
          "Focus on memories: Keep meaningful items that make the new space feel like home.",
          "Involve family: Make the moving process a collaborative family effort.",
          "Professional support: Consider hiring senior move managers for complex relocations."
        ]
      },
      {
        type: "section",
        title: "Practical Steps for Downsizing",
        items: [
          "Floor plan mapping: Visualize where furniture will fit in the new space.",
          "Safety first: Ensure the new home is accessible and free of trip hazards.",
          "Document management: Securely organize important health and financial records.",
          "Coordinate donations: Arrange for pick-ups of larger items being donated."
        ]
      }
    ]
  },
  "long-distance-moving-guide": {
    title: "Province to Province Guide",
    category: "Long Distance",
    readTime: "12 min read",
    image: "/tmm-long-distance.png",
    content: [
      {
        type: "intro",
        text: "Moving across provincial lines involves unique challenges, from logistics coordination to understanding different regulations. This guide helps you navigate the complexities of long-distance relocation."
      },
      {
        type: "section",
        title: "Logistics and Timing",
        items: [
          "Book early: Long-distance moves require more planning and vehicle coordination.",
          "Flexible delivery windows: Understand that arrival times may vary across long hauls.",
          "Insurance verification: Ensure your transit insurance covers inter-provincial transport.",
          "Vehicle transport: Plan if you need your personal car shipped separately."
        ]
      },
      {
        type: "section",
        title: "Setting Up in a New Province",
        items: [
          "Update documentation: Health cards, driver's licenses, and registrations.",
          "Utility coordination: Schedule shut-offs and new hook-ups in advance.",
          "School registrations: If moving with children, start the enrollment process early.",
          "Local orientation: Map out the nearest hospitals, grocery stores, and services."
        ]
      }
    ]
  }
};

export default function ResourceClient({ slug }) {
  const resource = resourceData[slug];

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-navy mb-4">Resource Not Found</h1>
          <Link href="/moving-services" className="text-primary font-bold flex items-center justify-center gap-2">
            <ArrowLeft size={20} /> Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main style={{ background: "#FFFFFF" }}>
      {/* Article Header */}
      <section style={{ background: "var(--navy)", padding: "6rem 0 4rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: `url(${resource.image}) center/cover` }} />
        <div className="container-custom" style={{ position: "relative", zIndex: 1 }}>
          <Link 
            href="/moving-services" 
            style={{ 
              display: "flex", 
              items: "center", 
              gap: 8, 
              color: "var(--secondary)", 
              textDecoration: "none", 
              fontSize: "0.9rem", 
              fontWeight: 700,
              marginBottom: "2rem" 
            }}
          >
            <ArrowLeft size={18} weight="bold" /> BACK TO RESOURCES
          </Link>
          
          <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
            <span style={{ background: "rgba(234, 179, 8, 0.2)", color: "var(--secondary)", padding: "4px 12px", borderRadius: "100px", fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", border: "1px solid rgba(234, 179, 8, 0.3)" }}>
              {resource.category}
            </span>
          </div>

          <h1 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 900, fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#FFFFFF", margin: "0 0 1.5rem", lineHeight: 1.1, maxWidth: "800px" }}>
            {resource.title}
          </h1>

          <div style={{ display: "flex", gap: "2rem", color: "#9CA3AF", fontSize: "0.9rem", fontWeight: 500 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Clock size={18} weight="fill" style={{ color: "var(--secondary)" }} />
              {resource.readTime}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Calendar size={18} weight="fill" style={{ color: "var(--secondary)" }} />
              Published May 2026
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container-custom">
          <div style={{ display: "grid", gridTemplateColumns: "1fr lg:350px", gap: "5rem", alignItems: "start" }}>
            
            {/* Main Content */}
            <div className="article-body">
              {resource.content.map((block, i) => {
                if (block.type === "intro") {
                  return (
                    <p key={i} style={{ fontSize: "1.25rem", color: "#4B5563", lineHeight: 1.8, marginBottom: "3rem", fontWeight: 500 }}>
                      {block.text}
                    </p>
                  );
                }
                if (block.type === "section") {
                  return (
                    <div key={i} style={{ marginBottom: "3.5rem" }}>
                      <h2 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "var(--navy)", marginBottom: "1.5rem" }}>
                        {block.title}
                      </h2>
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {block.items.map((item, j) => (
                          <div key={j} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                            <CheckCircle size={24} weight="fill" style={{ color: "var(--secondary)", flexShrink: 0, marginTop: 2 }} />
                            <p style={{ margin: 0, color: "#374151", fontSize: "1.05rem", lineHeight: 1.6 }}>{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                }
                if (block.type === "tip") {
                  return (
                    <div key={i} style={{ background: "#FDFCF0", borderLeft: "4px solid var(--secondary)", padding: "2rem", borderRadius: "0 8px 8px 0", marginBottom: "3rem" }}>
                      <div style={{ display: "flex", items: "center", gap: 8, color: "var(--secondary)", fontWeight: 800, fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                        <Info size={20} weight="fill" /> EXPERT TIP
                      </div>
                      <p style={{ margin: 0, color: "#854D0E", fontWeight: 600, lineHeight: 1.6 }}>{block.text}</p>
                    </div>
                  );
                }
                return null;
              })}

              <hr style={{ border: "none", borderTop: "1px solid #E5E7EB", margin: "4rem 0" }} />

              <div style={{ background: "#F9FAFB", padding: "3rem", borderRadius: 16, textAlign: "center" }}>
                <h3 style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>Need Professional Help?</h3>
                <p style={{ color: "#6B7280", marginBottom: "2rem" }}>Our expert team is ready to handle the heavy lifting for you.</p>
                <Link 
                  href="/get-quote" 
                  style={{ 
                    background: "var(--navy)", 
                    color: "#fff", 
                    padding: "16px 32px", 
                    borderRadius: 8, 
                    fontWeight: 700, 
                    textDecoration: "none",
                    display: "inline-block"
                  }}
                >
                  Get Your Free Quote
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <aside style={{ position: "sticky", top: "150px" }}>
              <div style={{ background: "#fff", border: "1px solid #F3F4F6", borderRadius: 16, padding: "2rem", boxShadow: "0 10px 30px rgba(0,0,0,0.03)" }}>
                <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--navy)", marginBottom: "1.5rem" }}>More Resources</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {Object.entries(resourceData)
                    .filter(([s]) => s !== slug)
                    .map(([s, r]) => (
                      <Link key={s} href={`/resources/${s}`} style={{ textDecoration: "none", display: "flex", gap: "1rem", group: "true" }}>
                        <div style={{ width: 60, height: 60, borderRadius: 8, background: `url(${r.image}) center/cover`, flexShrink: 0 }} />
                        <div>
                          <div style={{ fontSize: "0.85rem", fontWeight: 800, color: "var(--navy)", lineHeight: 1.3 }}>{r.title}</div>
                          <div style={{ fontSize: "0.75rem", color: "#9CA3AF", marginTop: 4 }}>{r.readTime}</div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>

              <div style={{ marginTop: "2rem", background: "var(--secondary)", borderRadius: 16, padding: "2rem", color: "#000" }}>
                <h4 style={{ fontWeight: 800, fontSize: "1.25rem", marginBottom: "0.5rem" }}>Saskatoon Support</h4>
                <p style={{ fontSize: "0.9rem", fontWeight: 600, opacity: 0.8, marginBottom: "1.5rem" }}>Have questions about your upcoming move? Call us directly.</p>
                <a href="tel:+130609940409" style={{ display: "block", background: "#000", color: "#fff", textAlign: "center", padding: "12px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: "0.9rem" }}>
                  Call Specialist
                </a>
              </div>
            </aside>

          </div>
        </div>
      </section>
    </main>
  );
}
