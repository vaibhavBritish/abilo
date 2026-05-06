"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { CalendarBlank, Check, CircleNotch, Truck } from "@phosphor-icons/react";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "sonner";

const API = "/api";

export const QuoteForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    current_address: "",
    new_address: "",
    move_type: "",
    moving_date: null,
    additional_details: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [datePickerOpen, setDatePickerOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = {
        ...formData,
        moving_date: formData.moving_date
          ? format(formData.moving_date, "yyyy-MM-dd")
          : ""
      };

      await axios.post(`${API}/quotes`, payload);
      setSubmitted(true);
      toast.success("Moving quote request submitted! We'll contact you shortly.");
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section
        id="quote-form"
        style={{ padding: "5rem 0" }}
        data-testid="quote-form-section"
      >
        <div className="container-custom" style={{ maxWidth: 640, margin: "0 auto" }}>
          <div
            style={{
              background: "var(--navy)",
              border: "1px solid rgba(255,255,255,0.05)",
              borderRadius: 4,
              padding: "3.5rem 2.5rem",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            }}
          >
            <div
              style={{
                width: 72, height: 72,
                background: "rgba(234, 179, 8, 0.1)",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1.5rem",
                border: "1px solid var(--secondary)",
              }}
            >
              <Check size={36} weight="bold" style={{ color: "var(--secondary)" }} />
            </div>
            <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#FFFFFF", marginBottom: "0.75rem" }}>
              Request Received! 📦
            </h3>
            <p style={{ color: "#D1D5DB", marginBottom: "1.5rem", lineHeight: 1.7 }}>
              Thank you for choosing TMM Logistics Inc. Our logistics experts will review your details and
              contact you within 2 hours with a detailed estimate.
            </p>
            <button
              onClick={() => { setSubmitted(false); setFormData({ full_name: "", phone_number: "", email: "", current_address: "", new_address: "", move_type: "", moving_date: null, additional_details: "" }); }}
              className="btn-primary"
              style={{ background: "var(--secondary)", color: "#000", border: "none", padding: "12px 24px", borderRadius: 4, fontWeight: 700 }}
              data-testid="submit-another-quote-btn"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="quote-form"
      style={{ padding: "0" }}
      data-testid="quote-form-section"
    >
      <div className="container-custom">
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {/* Form Header */}
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div className="section-badge" style={{ background: "rgba(234, 179, 8, 0.1)", color: "var(--secondary)", border: "1px solid rgba(234, 179, 8, 0.2)", justifyContent: "center" }}>
              📝 Free Logistics Quote
            </div>
            <h2 className="section-title" style={{ color: "#111827" }}>Plan Your Move with Precision</h2>
            <div className="divider" style={{ background: "var(--secondary)", margin: "0.75rem auto 1rem" }} />
            <p className="section-subtitle" style={{ color: "#4B5563", margin: "0 auto" }}>
              Fill in the details below and we'll provide you with a customized relocation quote within 2 hours.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} style={{ background: "var(--navy)", borderRadius: 4, padding: "2.5rem", border: "1px solid rgba(255,255,255,0.05)", boxShadow: "0 20px 50px rgba(0,0,0,0.15)", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {/* Name and Phone */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-400 mb-2 block">
                  Full Name *
                </label>
                <Input
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                  className="rounded-sm border-white/10 bg-black/20 text-white focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                  data-testid="quote-full-name-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-400 mb-2 block">
                  Phone Number *
                </label>
                <Input
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleInputChange}
                  placeholder="+1-306-0994-0409"
                  required
                  className="rounded-sm border-white/10 bg-black/20 text-white focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                  data-testid="quote-phone-input"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-xs uppercase tracking-wider font-medium text-gray-400 mb-2 block">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="rounded-sm border-white/10 bg-black/20 text-white focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                data-testid="quote-email-input"
              />
            </div>

            {/* Moving From and To */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-400 mb-2 block">
                  Moving From *
                </label>
                <Input
                  name="current_address"
                  value={formData.current_address}
                  onChange={handleInputChange}
                  placeholder="Street address, City"
                  required
                  className="rounded-sm border-white/10 bg-black/20 text-white focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                  data-testid="quote-departure-input"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-gray-400 mb-2 block">
                  Moving To *
                </label>
                <Input
                  name="new_address"
                  value={formData.new_address}
                  onChange={handleInputChange}
                  placeholder="Street address, City"
                  required
                  className="rounded-sm border-white/10 bg-black/20 text-white focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                  data-testid="quote-destination-input"
                />
              </div>
            </div>

            {/* Move Type and Date */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2 block">
                  Move Type *
                </label>
                <Select
                  value={formData.move_type}
                  onValueChange={(value) => setFormData(prev => ({ ...prev, move_type: value }))}
                >
                  <SelectTrigger
                    className="rounded-sm border-white/10 bg-black/20 text-white"
                    data-testid="quote-trip-type-select"
                  >
                    <SelectValue placeholder="Select move type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">Residential Move</SelectItem>
                    <SelectItem value="trucking">Trucking Services</SelectItem>
                    <SelectItem value="ltl">LTL Transportation</SelectItem>
                    <SelectItem value="commercial">Commercial/Office Move</SelectItem>
                    <SelectItem value="warehousing">Warehousing & Storage</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2 block">
                  Preferred Moving Date
                </label>
                <Popover open={datePickerOpen} onOpenChange={setDatePickerOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal rounded-sm border-white/10 bg-black/20 text-white hover:border-[var(--secondary)]/30 hover:bg-black/40"
                      data-testid="quote-date-picker-btn"
                    >
                      <CalendarBlank className="mr-2 h-4 w-4" />
                      {formData.moving_date ? (
                        format(formData.moving_date, "dd/MM/yyyy")
                      ) : (
                        <span className="text-gray-500">Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.moving_date}
                      onSelect={(date) => {
                        setFormData(prev => ({ ...prev, moving_date: date }));
                        setDatePickerOpen(false);
                      }}
                      disabled={(date) => date < new Date()}
                      initialFocus
                      data-testid="quote-calendar"
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="text-xs uppercase tracking-wider font-medium text-zinc-400 mb-2 block">
                Moving Details
              </label>
              <Textarea
                name="additional_details"
                value={formData.additional_details}
                onChange={handleInputChange}
                placeholder="List major items, floor levels, or special requirements..."
                rows={4}
                className="rounded-sm border-white/10 bg-black/20 text-white focus:border-[var(--secondary)] focus:ring-[var(--secondary)]"
                data-testid="quote-details-textarea"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || !formData.full_name || !formData.phone_number || !formData.email || !formData.current_address || !formData.new_address || !formData.move_type}
              className="btn-primary"
              style={{ width: "100%", background: "var(--secondary)", color: "#000", border: "none", justifyContent: "center", padding: "16px", fontSize: "1rem", fontWeight: 700, borderRadius: 4, opacity: (loading || !formData.full_name || !formData.phone_number || !formData.email || !formData.current_address || !formData.new_address || !formData.move_type) ? 0.6 : 1 }}
              data-testid="quote-submit-btn"
            >
              {loading ? (
                <>
                  <CircleNotch style={{ animation: "spin 1s linear infinite" }} size={20} />
                  Submitting...
                </>
              ) : (
                <span className="flex items-center gap-2">
                  <Truck size={20} weight="fill" /> Get My Free Quote
                </span>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

