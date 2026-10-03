import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Clock,
  ShieldCheck,
  Globe2,
  Sparkles,
  PackageCheck,
  FileText,
  CheckCircle2,
  Truck,
  ArrowRight,
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export default function ContactPage({ onInquirySubmitted }) {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type, label) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    if (onInquirySubmitted) {
      onInquirySubmitted(`Copied ${label} to clipboard!`);
    }
    setTimeout(() => {
      setCopiedType(null);
    }, 2500);
  };

  // Pre-formatted one-click export inquiry templates
  const quickInquiries = [
    {
      id: 'bath',
      title: 'Bath Division Inquiry',
      category: 'Towels, Bathrobes, Bath Mats',
      description: 'Request GSM catalogs, terry weave samples, or volume pricing for hospitality & retail.',
      subject: 'Export Inquiry: Bath Division Collections - Nexa Textile',
      body: 'Hello Nexa Textile Team,%0D%0A%0D%0AI would like to receive catalog specifications and wholesale volume pricing for the Bath Division (Towels / Bathrobes).%0D%0A%0D%0AMy Requirements:%0D%0A- Target GSM:%0D%0A- Estimated Quantity:%0D%0A- Destination Country / Port:%0D%0A%0D%0AThank you,',
      color: 'from-teal-600 to-cyan-700',
    },
    {
      id: 'home',
      title: 'Home Textile Inquiry',
      category: 'Bed Linen, Duvets, Cushion Covers',
      description: 'Inquire about percale, sateen, dyed fabrics, and custom private-label home programs.',
      subject: 'Export Inquiry: Home Textile Program - Nexa Textile',
      body: 'Hello Nexa Textile Team,%0D%0A%0D%0AI am interested in sourcing from your Home Textile Division (Bedding / Linen / Throws).%0D%0A%0D%0AMy Requirements:%0D%0A- Thread Count (TC) / Fabric:%0D%0A- Order Volume:%0D%0A- Packaging Needs (Retail / Bulk):%0D%0A%0D%0AThank you,',
      color: 'from-blue-600 to-indigo-700',
    },
    {
      id: 'oem',
      title: 'Private Label & OEM Packaging',
      category: 'Custom Brand Tags, Weaves, Box Sets',
      description: 'Discuss custom jacquard headers, woven labels, polybag packaging, and barcode inserts.',
      subject: 'OEM & Private Label Inquiry - Nexa Textile',
      body: 'Hello Nexa Textile Commercial Desk,%0D%0A%0D%0AWe are looking for an OEM textile manufacturing partner for our private brand.%0D%0A%0D%0AProgram Details:%0D%0A- Brand Name:%0D%0A- Target Products:%0D%0A- Packaging & Labeling Requirements:%0D%0A%0D%0APlease let us know the next steps for sample development.%0D%0A%0D%0ARegards,',
      color: 'from-amber-600 to-orange-700',
    },
    {
      id: 'samples',
      title: 'Sample Swatch Kit Request',
      category: 'Quality Validation & Laboratory Testing',
      description: 'Request courier dispatch of fabric hand-feel swatches, yarn cards, and finished samples.',
      subject: 'Sample Swatch Kit Request - Nexa Textile',
      body: 'Hello Nexa Textile Team,%0D%0A%0D%0APlease arrange a sample swatch kit dispatched to our office.%0D%0A%0D%0ACompany / Importer Name:%0D%0AShipping Address:%0D%0AInterested Product Specs:%0D%0A%0D%0AThank you,',
      color: 'from-emerald-600 to-teal-700',
    },
  ];

  return (
    <div className="bg-[#FAFBFD] space-y-0 text-slate-800">
      {/* ============================================================ */}
      {/* 1. CONTACT HERO                                              */}
      {/* ============================================================ */}
      <section className="relative bg-[#071322] text-white pt-36 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-25">
          <img
            src="/assets/hero-textile.jpg"
            alt="Nexa Textile Contact Desk"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#0A1C30]/90 to-transparent"></div>
        </div>

        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0D6E77]/25 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-10 right-0 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
            Direct Commercial &amp; Production Desk
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Connect Directly With <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-300 to-white">
              Nexa Textile
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            Direct mill communications with our commercial managers. We provide rapid responses, transparent lead times, and tailored wholesale quotes.
          </p>

          {/* Quick Direct Actions in Hero */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#0D6E77] to-[#138A96] hover:from-[#0A585F] hover:to-[#0D6E77] text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-lg shadow-teal-950/40 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email: {COMPANY_CONTACT.email}</span>
            </a>

            <a
              href={COMPANY_CONTACT.phoneTel}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm backdrop-blur-md border border-white/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call: {COMPANY_CONTACT.phone}</span>
            </a>

            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600/90 hover:bg-emerald-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Instant Chat</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. DUAL MAIN CONTACT PILLARS (EMAIL & PHONE / WHATSAPP)      */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              Zero Friction Communication
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Direct Production &amp; Export Contact
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              No forms or delays. Reach our commercial manufacturing team directly via official email, direct phone line, or WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* PILLAR 1: OFFICIAL EMAIL */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#071322] to-[#0D233A] p-8 sm:p-10 text-white shadow-xl border border-slate-700/50 flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-500 to-[#0D6E77] flex items-center justify-center text-white shadow-lg shadow-teal-900/40">
                    <Mail className="w-7 h-7" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold tracking-wide border border-teal-500/30">
                    <Clock className="w-3.5 h-3.5" />
                    Response &lt; 4 Hours
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-teal-300 font-bold block mb-1">
                    Official Commercial &amp; Inquiries Email
                  </span>
                  <a
                    href={`mailto:${COMPANY_CONTACT.email}`}
                    className="text-2xl sm:text-3xl font-bold text-white hover:text-teal-200 transition-colors block break-all font-mono"
                  >
                    {COMPANY_CONTACT.email}
                  </a>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Send detailed RFQs, spec sheets, lab dips, purchase orders, or technical queries. Checked round-the-clock by our commercial desk.
                  </p>
                </div>

                {/* Email Features */}
                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Comprehensive quotation with FOB / CIF terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Technical specs, yarn composition &amp; GSM breakdown</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Strict OEM &amp; client confidentiality protected</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-3 relative z-10">
                <a
                  href={`mailto:${COMPANY_CONTACT.email}?subject=Export%20Inquiry%20-%20Nexa%20Textile`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0D6E77] hover:bg-[#138A96] text-white py-3 px-5 rounded-xl font-semibold text-xs tracking-wide uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Compose Email</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.email, 'email', 'Official Email')}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-5 rounded-xl font-semibold text-xs transition-colors border border-white/20 cursor-pointer"
                >
                  {copiedType === 'email' ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-300" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* PILLAR 2: OFFICIAL PHONE & WHATSAPP */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#0F2844] to-[#0A1C30] p-8 sm:p-10 text-white shadow-xl border border-slate-700/50 flex flex-col justify-between overflow-hidden group hover:shadow-2xl transition-all duration-300">
              {/* Subtle Background Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-all duration-500"></div>

              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-950/40">
                    <Phone className="w-7 h-7" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold tracking-wide border border-emerald-500/30">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Direct Hotline Active
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-emerald-300 font-bold block mb-1">
                    Official Production &amp; Export Hotline
                  </span>
                  <a
                    href={COMPANY_CONTACT.phoneTel}
                    className="text-2xl sm:text-3xl font-bold text-white hover:text-emerald-200 transition-colors block font-mono"
                  >
                    {COMPANY_CONTACT.phone}
                  </a>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                    Direct dial for urgent order dispatch queries, production status updates, sample requests, or instant WhatsApp business chat.
                  </p>
                </div>

                {/* Phone & Availability Details */}
                <div className="space-y-2 pt-2 border-t border-slate-700/60 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{COMPANY_CONTACT.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{COMPANY_CONTACT.supportAvailability}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Instant WhatsApp messaging with photo/video sample previews</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row gap-3 relative z-10">
                <a
                  href={COMPANY_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white py-3 px-5 rounded-xl font-semibold text-xs tracking-wide uppercase transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </a>

                <a
                  href={COMPANY_CONTACT.phoneTel}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-5 rounded-xl font-semibold text-xs transition-colors border border-white/20 cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call Now</span>
                </a>

                <button
                  onClick={() => handleCopy(COMPANY_CONTACT.phone, 'phone', 'Phone Number')}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white py-3 px-4 rounded-xl font-semibold text-xs transition-colors border border-white/20 cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4 text-slate-300" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3. ONE-CLICK SPECIFICATION INQUIRY LAUNCHER                  */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              Instant RFQ Templates
            </span>
            <h2 className="text-3xl font-bold text-[#0A1C30] tracking-tight">
              One-Click Program Inquiries
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
              Select your interested textile category below to launch a pre-structured export inquiry directly in your email client or WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickInquiries.map((inq) => {
              const mailHref = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(inq.subject)}&body=${inq.body}`;
              const waHref = `https://wa.me/923040377100?text=${encodeURIComponent(
                `Hello Nexa Textile, I am inquiring regarding the ${inq.title}. Please provide catalog details and pricing.`
              )}`;

              return (
                <div
                  key={inq.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-xl hover:border-teal-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#0D6E77] bg-[#EBF6F7] px-2.5 py-1 rounded-md">
                        {inq.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A1C30] group-hover:text-[#0D6E77] transition-colors">
                      {inq.title}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {inq.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-4 border-t border-slate-100 flex flex-col gap-2">
                    <a
                      href={mailHref}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white py-2.5 px-3 rounded-xl text-xs font-semibold shadow-xs transition-colors cursor-pointer"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Email Template</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-80" />
                    </a>

                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-emerald-50 hover:text-emerald-700 text-slate-700 py-2 px-3 rounded-xl text-xs font-medium transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                      <span>WhatsApp Quick Ask</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 4. EXPORT DESK CREDENTIALS & GUARANTEES                      */}
      {/* ============================================================ */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D6E77] flex items-center justify-center">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0A1C30]">
                Rapid Courier Sample Dispatch
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard quality swatches and finished article samples dispatched internationally via DHL / FedEx within 48–72 hours of inquiry confirmation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D6E77] flex items-center justify-center">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0A1C30]">
                OEM Non-Disclosure Guarantee
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Strict confidential handling of client-exclusive weaves, custom GSM formulations, dye formulas, and proprietary packaging artwork.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-[#0D6E77] flex items-center justify-center">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-[#0A1C30]">
                Worldwide Port Logistics
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                FOB Karachi, CIF European / North American / Gulf Ports with full export documentation, SGS inspection coordination, and custom clearance support.
              </p>
            </div>
          </div>

          {/* Direct Mill Banner */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#071322] via-[#0A1C30] to-[#0D6E77] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                Direct Mill Relationship
              </span>
              <h3 className="text-2xl font-bold text-white">
                Ready to Discuss Your Next Textile Program?
              </h3>
              <p className="text-xs text-slate-300 max-w-xl">
                Call our direct line or drop us an email with your specifications. We are ready to weave your vision.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={COMPANY_CONTACT.phoneTel}
                className="inline-flex items-center gap-2 bg-white text-[#0A1C30] hover:bg-slate-100 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#0D6E77]" />
                <span>Call {COMPANY_CONTACT.phone}</span>
              </a>

              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="inline-flex items-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
