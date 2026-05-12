"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Phone, List, X, MapPin, EnvelopeSimple, FacebookLogo, InstagramLogo } from "@phosphor-icons/react";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Moving Services", href: "/moving-services" },
    { label: "Trucking", href: "/trucking-services" },
    { label: "About", href: "/about" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] w-full">
        {/* Top Info Bar - Hides on Scroll */}
        <div 
          className={`bg-navy text-white/80 py-2 transition-all duration-500 overflow-hidden ${
            scrolled ? "max-h-0 opacity-0" : "max-h-20 opacity-100"
          }`}
        >
          <div className="container-custom flex items-center justify-between text-[0.75rem] font-bold tracking-wider uppercase">
             <div className="flex items-center gap-6">
               <span className="flex items-center gap-2">
                 <MapPin size={14} weight="fill" className="text-primary" />
                 Saskatoon
               </span>
               <a href="mailto:movemate@tmmgroup.ca" className="hidden sm:flex items-center gap-2 text-white/80 no-underline hover:text-primary">
                 <EnvelopeSimple size={14} weight="fill" className="text-primary" />
                 movemate@tmmgroup.ca
               </a>
             </div>
             <div className="flex items-center gap-4">
               <a href="#" className="text-white/60 hover:text-primary transition-colors"><FacebookLogo size={16} weight="fill" /></a>
               <a href="#" className="text-white/60 hover:text-primary transition-colors"><InstagramLogo size={16} weight="fill" /></a>
             </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div 
          className={`transition-all duration-500 ${
            scrolled 
              ? "bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.08)] py-3" 
              : "bg-white py-5 border-b border-gray-50"
          }`}
        >
          <div className="container-custom flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-2.5 no-underline">
               <div className="flex flex-col">
                 <span className={`font-black tracking-tighter uppercase leading-none transition-all duration-500 ${
                   scrolled ? "text-lg text-navy" : "text-xl text-navy"
                 }`}>
                   TMM <span className="text-primary">Logictics</span>
                 </span>
                 <span className={`font-extrabold uppercase tracking-[0.25em] mt-0.5 transition-all duration-500 ${
                   scrolled ? "text-[7px] text-navy/30" : "text-[9px] text-navy/40"
                 }`}>
                   Moving and Trucking
                 </span>
               </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-2.5 py-1.5 rounded-lg text-[0.8rem] xl:text-[0.85rem] font-bold no-underline transition-all duration-300 relative whitespace-nowrap ${
                    isActive(item.href) ? "text-primary bg-primary/5" : "text-navy hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4">
              <a 
                href="tel:+130609940409" 
                className={`flex items-center gap-2 text-navy no-underline font-bold transition-all duration-500 ${
                  scrolled ? "text-[0.7rem]" : "text-[0.8rem]"
                }`}
              >
                <div className={`rounded-full bg-primary/10 flex items-center justify-center text-primary transition-all duration-500 ${
                  scrolled ? "w-6 h-6" : "w-8 h-8"
                }`}>
                  <Phone size={scrolled ? 12 : 16} weight="fill" />
                </div>
                +1-306-0994-0409
              </a>
              <button
                onClick={() => router.push("/get-quote")}
                className={`bg-navy text-white rounded-full font-bold transition-all duration-300 shadow-lg shadow-navy/10 hover:bg-primary hover:text-navy hover:shadow-primary/20 ${
                  scrolled ? "px-5 py-2 text-[0.7rem]" : "px-7 py-3 text-[0.8rem]"
                }`}
              >
                Get Quote
              </button>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50 text-navy hover:bg-primary/10 hover:text-primary transition-all"
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[110] transition-all duration-500 lg:hidden ${mobileOpen ? "visible" : "invisible"}`}>
        <div 
          className={`absolute inset-0 bg-navy/60 backdrop-blur-sm transition-opacity duration-500 ${mobileOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setMobileOpen(false)}
        />
        <div className={`absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ease-out flex flex-col ${mobileOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="p-6 flex items-center justify-between border-b border-gray-50">
            <span className="text-xl font-black text-navy tracking-tighter uppercase leading-none">
              TMM <span className="text-primary">Moving</span>
            </span>
            <button onClick={() => setMobileOpen(false)} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-navy"><X size={20} weight="bold" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`p-4 rounded-2xl font-bold text-lg transition-all ${
                    isActive(item.href) ? "bg-primary/10 text-primary" : "text-navy hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-6 border-t border-gray-50 bg-gray-50/50 flex flex-col gap-4">
            <a href="tel:+130609940409" className="flex items-center justify-center gap-3 p-4 bg-white border border-gray-100 rounded-2xl font-bold text-navy no-underline shadow-sm">
              <Phone size={20} weight="fill" className="text-primary" />
              Call Specialist
            </a>
            <button onClick={() => router.push("/get-quote")} className="w-full bg-navy text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-navy/20">Get Free Quote</button>
          </div>
        </div>
      </div>

      {/* Dynamic Spacer */}
      <div className="h-[90px] lg:h-[130px] transition-all duration-500" />
    </>
  );
};