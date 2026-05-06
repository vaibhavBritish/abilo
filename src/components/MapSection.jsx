export const MapSection = () => {
  return (
    <section
      className="bg-white"
      data-testid="map-section"
      style={{ margin: "3rem 0" }}
    >
      <div className="container-custom">
        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", justifyContent: "center" }}>📍 Find Us</div>
          <h2 className="section-title">Our Presence in Saskatchewan</h2>
          <div className="divider" style={{ background: "var(--secondary)", margin: "0.75rem auto 0" }} />
        </div>

        <div
          className="map-container animate-fade-in-up"
          data-testid="map-container"
          style={{ 
            borderRadius: 16, 
            overflow: "hidden", 
            border: "1px solid #E5E7EB", 
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            background: "#111" // Dark background for the loading state/filter
          }}
        >
          {/* Toronto, Ontario Location */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d164132.86858348984!2d-106.7181404123519!3d52.1181556631835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f6bf47ed992d%3A0x5049e3295772690!2sSaskatoon%2C%20SK!5e0!3m2!1sen!2sca!4v1714470000000!5m2!1sen!2sca"
            className="w-full h-[250px] md:h-[450px] border-0"
            loading="lazy"
            style={{ 
              filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)",
              display: "block"
            }}
            title="TMM Logistics Inc Location"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

