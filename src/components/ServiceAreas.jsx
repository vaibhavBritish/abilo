"use client";

import { MapPin, Phone, Clock, NavigationArrow, ShieldCheck } from "@phosphor-icons/react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export const ServiceAreas = () => {
  const sectionRef = useScrollReveal();

  const areas = [
    "Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "Swift Current",
    "Yorkton", "North Battleford", "Estevan", "Weyburn", "Melfort",
    "Humboldt", "Martensville", "Warman", "Lloydminster", "Kindersley",
  
  ];

  const intercity = [
    "Saskatoon → Winnipeg", "Regina → Calgary", "Saskatoon → Edmonton",
    "Winnipeg → Regina", "Prince Albert → Saskatoon", "Moose Jaw → Regina",
    "Calgary → Vancouver", "Edmonton → Vancouver", "Saskatoon → Calgary",
    "Regina → Edmonton", "Winnipeg → Calgary", "Brandon → Winnipeg",
    "Medicine Hat → Swift Current", "Lethbridge → Calgary", "Saskatoon → Toronto (Express)",
    "Regina → Montreal (FTL)", "Winnipeg → Vancouver (Reefer)", "Saskatoon → Brandon (Daily)",
  ];

  return (
    <section
      id="service-areas"
      ref={sectionRef}
      className="bg-black py-10 md:py-16 px-4 border-t border-zinc-900"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2 text-sm text-primary mb-2 font-semibold">
            <MapPin size={14} weight="fill" />
            Coverage
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Areas We Serve
          </h2>
          <p className="text-zinc-400 mt-3 max-w-xl mx-auto text-sm md:text-base">
            We provide professional moving and trucking services across Saskatoon and neighbouring province with reliable regional logistics.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Local Areas */}
          <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8 border border-zinc-800/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="bg-primary/10 text-primary p-3 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                <MapPin size={22} weight="fill" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">Saskatoon</div>
                <div className="text-xs text-zinc-500 font-medium">Serving all major prairie municipalities</div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-center md:text-left">
              {areas.map((a) => {
                const slugMap = {
                  "Saskatoon": "/locations/sk/saskatoon-movers",
                  "Regina": "/locations/sk/regina-movers",
                  "Winnipeg": "/locations/mb/winnipeg-movers",
                  "Prince Albert": "/locations/sk/prince-albert-movers",
                  "Moose Jaw": "/locations/sk/moose-jaw-movers",
                  "Swift Current": "/locations/sk/swift-current-movers",
                };
                const href = slugMap[a] || "#";

                return (
                  <a
                    key={a}
                    href={href}
                    className="bg-black/40 text-zinc-400 px-3 py-2 rounded-xl text-[11px] font-medium border border-zinc-800/50 hover:border-primary/40 hover:text-white hover:bg-black/60 transition-all duration-300 flex items-center gap-2 group decoration-none"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-primary transition-colors flex-shrink-0" />
                    <span className="truncate">{a}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Intercity */}
          <div className="bg-zinc-900/50 rounded-2xl p-6 md:p-8 border border-zinc-800/50 backdrop-blur-sm shadow-xl">
            <div className="flex items-center gap-4 mb-7">
              <div className="bg-primary/10 text-primary p-3 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(234,179,8,0.1)]">
                <Phone size={22} weight="fill" />
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">Long Distance Routes</div>
                <div className="text-xs text-zinc-500 font-medium">Provincial and Nationwide coverage</div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {intercity.map((r) => (
                <div
                  key={r}
                  className="group flex items-center gap-3 p-3 bg-black/40 rounded-xl border border-zinc-800/50 text-[13px] font-medium text-zinc-300 hover:border-primary/40 hover:bg-black/60 transition-all duration-300"
                >
                  <div className="text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                    🚚
                  </div>
                  <span className="truncate">{r}</span>
                </div>
              ))}
            </div>

            {/* Working Hours */}
            <div className="mt-6 p-[2px] rounded-xl bg-gradient-to-r from-primary to-secondary">
              <div className="bg-[#0f1115] rounded-[10px] p-4 flex items-center justify-center gap-3">
                <Clock size={18} weight="fill" className="text-primary" />
                <div className="text-xs font-bold text-white uppercase tracking-wider">
                  Available 24/7 · Mon – Sun
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Coverage Highlights */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Cities Served", value: "50+", icon: MapPin },
            { label: "Primary Routes", value: "15+", icon: NavigationArrow },
            { label: "Dispatch Support", value: "24/7", icon: Clock },
            { label: "Safety Rating", value: "100%", icon: ShieldCheck },
          ].map((stat, i) => (
            <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 rounded-2xl p-5 text-center hover:bg-zinc-800/30 transition-all duration-300">
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-primary/10 rounded-lg text-primary">
                  <stat.icon size={20} weight="fill" />
                </div>
              </div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};