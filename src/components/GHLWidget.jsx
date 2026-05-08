"use client";

import { useEffect } from "react";

/**
 * GHLWidget Component
 * 
 * To integrate your GoHighLevel form or calendar:
 * 1. Replace the placeholder div with the iframe or script provided by GHL.
 * 2. If using a script, ensure it's loaded in useEffect.
 */
export const GHLWidget = ({ title = "Book a Consultation", subtitle = "Integrated with GoHighLevel CRM" }) => {
  return (
    <div className="ghl-widget-container" style={{ width: "100%", maxWidth: "800px", margin: "0 auto", padding: "2rem", background: "#fff", borderRadius: "12px", boxShadow: "0 20px 50px rgba(0,0,0,0.1)", textAlign: "center" }}>
      <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "var(--navy)", marginBottom: "0.5rem" }}>{title}</h3>
      <p style={{ color: "#6B7280", marginBottom: "2rem", fontSize: "0.95rem" }}>{subtitle}</p>
      
      {/* 
          REPLACE THIS BOX WITH YOUR GHL EMBED CODE 
          Example: 
          <iframe 
            src="https://link.msgsndr.com/widget/booking/YOUR_CALENDAR_ID" 
            style={{ width: '100%', border: 'none', overflow: 'hidden' }} 
            scrolling="no" 
            id="ghl-calendar-embed"
          ></iframe>
      */}
      <div style={{ background: "#F9FAFB", border: "2px dashed #D1D5DB", borderRadius: "8px", padding: "4rem 2rem", color: "#9CA3AF" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📅</div>
        <p style={{ fontWeight: 600 }}>GHL / Google Calendar Integration Ready</p>
        <p style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Contact your administrator to add the calendar ID</p>
      </div>
      
      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#16a34a", fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, background: "#16a34a", borderRadius: "50%" }}></span> Google Calendar Sync
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.85rem", color: "#16a34a", fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, background: "#16a34a", borderRadius: "50%" }}></span> CRM Integration
        </div>
      </div>
    </div>
  );
};
