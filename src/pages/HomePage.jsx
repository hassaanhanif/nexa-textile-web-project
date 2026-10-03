import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
  Truck,
  Globe2,
  CheckCircle2,
  SlidersHorizontal,
  Sparkles,
  Phone,
  Eye,
} from 'lucide-react';
import {
  COMPANY_STATS,
  WHY_NEXA_FEATURES,
  MANUFACTURING_STEPS,
  DIVISIONS,
  PRODUCTS,
  FEATURED_COLLECTIONS,
  COMPANY_CONTACT,
} from '../data/companyData';

export default function HomePage({ setActivePage, onOpenProductModal }) {
  const [selectedDivisionTab, setSelectedDivisionTab] = useState('all');
  const [activeCraftStep, setActiveCraftStep] = useState(0);

  const filteredProducts =
    selectedDivisionTab === 'all'
      ? PRODUCTS.filter((p) => p.isFeatured)
      : PRODUCTS.filter((p) => p.division === selectedDivisionTab);

  const getWhyIcon = (id) => {
    switch (id) {
      case '01':
        return <ShieldCheck className="w-6 h-6 text-[#0D6E77]" />;
      case '02':
        return <Cpu className="w-6 h-6 text-[#0D6E77]" />;
      case '03':
        return <SlidersHorizontal className="w-6 h-6 text-[#0D6E77]" />;
      case '04':
        return <Truck className="w-6 h-6 text-[#0D6E77]" />;
      case '05':
        return <Globe2 className="w-6 h-6 text-[#0D6E77]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#0D6E77]" />;
    }
  };

  return (
    <div className="space-y-0">
      {/* ============================================================ */}
      {/* SECTION 1 — HERO                                             */}
      {/* ============================================================ */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#071322]">
        {/* Background Visual Layer with Vignette & Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/hero-textile.jpg"
            alt="Nexa Textile High-Tech Manufacturing Facility"
            className="w-full h-full object-cover object-center transform scale-102 transition-transform duration-10000"
          />
          {/* Subtle Deep Navy & Charcoal Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#0A1C30]/85 to-[#071322]/75"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30] via-transparent to-black/30"></div>
          {/* Subtle Textile Grid Texture Overlay */}
          <div className="absolute inset-0 textile-grid-dark opacity-30"></div>
        </div>

        {/* Ambient Glowing Orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#0D6E77]/30 rounded-full blur-3xl pointer-events-none animate-pulse-glow"></div>
        <div className="absolute bottom-10 right-0 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Content Box */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl space-y-6">
            {/* Subtle Brand Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs tracking-wider uppercase font-semibold shadow-sm hover:border-teal-400/50 transition-colors">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse"></span>
              <span>Modern Textile Manufacturing &bull; Export Active</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
              Crafting Textiles <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-300 to-white drop-shadow-[0_0_25px_rgba(20,184,166,0.3)]">
                That Connect
              </span>
            </h1>

            {/* Small Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
              Precision bath and home textile solutions engineered with uncompromising quality, modern air-jet looms, and direct mill dependability.
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button
                onClick={() => {
                  const divisionsElem = document.getElementById('our-divisions');
                  if (divisionsElem) divisionsElem.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0D6E77] hover:bg-[#0A585F] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-teal-950/40 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-sm btn-shimmer"
              >
                <span>Explore Our Divisions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActivePage('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl backdrop-blur-md border border-white/25 transition-all duration-200 text-sm cursor-pointer hover:border-teal-400/40"
              >
                <span>Contact Export Desk</span>
              </button>
            </div>

            {/* Official Tagline Badge & Direct Contact Pill */}
            <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400 justify-center md:justify-start">
              <div className="w-8 h-[1px] bg-gradient-to-r from-teal-500 to-transparent"></div>
              <span className="tracking-widest uppercase text-slate-200 font-semibold">
                Seamless Thread Connection
              </span>
              <span className="hidden sm:inline text-slate-600">&bull;</span>
              <a
                href={`mailto:${COMPANY_CONTACT.email}`}
                className="text-teal-300 hover:text-white transition-colors underline font-medium"
              >
                {COMPANY_CONTACT.email}
              </a>
            </div>
          </div>

          {/* Quick Floating Spec Badge for Buyers */}
          <div className="hidden lg:block max-w-xs w-full glass-panel-dark p-6 rounded-3xl text-white shadow-2xl space-y-4 animate-float-slow hover:border-teal-400/50 transition-all">
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="text-xs uppercase tracking-wider font-bold text-teal-300">
                Direct Export Desk
              </span>
              <span className="text-[10px] bg-teal-500/25 text-teal-200 px-2.5 py-0.5 rounded-full font-bold border border-teal-500/30">
                OEM / ODM
              </span>
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Core Focus:</span>
                <span className="font-semibold text-white">Bath &amp; Home</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Loom Precision:</span>
                <span className="font-semibold text-white">High-Speed Air Jet</span>
              </div>
              <div className="flex justify-between py-1 border-b border-white/5">
                <span className="text-slate-400">Direct Phone:</span>
                <a href={COMPANY_CONTACT.phoneTel} className="font-bold text-teal-300 hover:underline">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400">Direct Email:</span>
                <a href={`mailto:${COMPANY_CONTACT.email}`} className="font-medium text-teal-300 hover:underline truncate max-w-[130px]" title={COMPANY_CONTACT.email}>
                  {COMPANY_CONTACT.email}
                </a>
              </div>
            </div>
            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-2.5 bg-gradient-to-r from-teal-500 to-[#0D6E77] hover:from-teal-400 hover:to-[#0A585F] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                Submit Buyer RFQ &rarr;
              </button>
              <a
                href={COMPANY_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 bg-white/10 hover:bg-white/20 text-center rounded-xl text-xs font-semibold text-white transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2 — INTRODUCTION                                     */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left: Large Editorial Textile Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-100 img-zoom-container bg-slate-100">
                <img
                  src="/assets/intro-editorial.jpg"
                  alt="Nexa Textile Showroom & Fabric Selection"
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30]/40 to-transparent"></div>
              </div>

              {/* Decorative Accent Monogram Box */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200 hidden sm:flex items-center gap-3">
                <img
                  src="/assets/nexa-icon.png"
                  alt="Nexa Monogram"
                  className="w-10 h-10 object-contain"
                />
                <div>
                  <p className="text-xs font-bold text-[#0A1C30]">Nexa Textile</p>
                  <p className="text-[11px] text-[#0D6E77] font-semibold">Seamless Thread Connection</p>
                </div>
              </div>
            </div>

            {/* Right: Company Introduction */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#EBF6F7] text-[#0D6E77] text-xs font-bold uppercase tracking-wider">
                About Nexa Textile
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight leading-tight">
                Textiles, Connected by Quality.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Nexa Textile brings together modern textile manufacturing, refined craftsmanship, and a commitment to dependable quality. Our focus spans bath and home textile solutions designed for brands, retailers, hospitality partners, and discerning buyers worldwide.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold text-[#0D6E77]">B2B</span>
                  <p className="text-xs font-semibold text-[#0A1C30] mt-1">Export Readiness</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Rigorous compliance for international shipping</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-bold text-[#0D6E77]">Custom</span>
                  <p className="text-xs font-semibold text-[#0A1C30] mt-1">OEM Capabilities</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Tailored GSM, thread counts, and packaging</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setActivePage('profile');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0D6E77] hover:text-[#0A585F] group cursor-pointer"
                >
                  <span className="border-b-2 border-[#0D6E77] pb-0.5 group-hover:border-[#0A585F]">
                    Discover Nexa Profile
                  </span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3 — OUR DIVISIONS                                    */}
      {/* ============================================================ */}
      <section id="our-divisions" className="py-24 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              Manufacturing Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Our Textile Divisions
            </h2>
            <p className="text-sm text-slate-600">
              Two focused divisions dedicated to material superiority, weaving excellence, and international finish standards.
            </p>
          </div>

          {/* TWO LARGE PREMIUM CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* CARD 1: Bath Division */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100 img-zoom-container">
                  <img
                    src="/assets/division-bath.jpg"
                    alt="Nexa Bath Division Towels &amp; Bathrobes"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-[#0A1C30] shadow-xs">
                    Division 01
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1C30]">
                    Bath Division
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Thoughtfully crafted bath textiles combining softness, absorbency, durability, and refined finishing.
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Products Include:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                      {DIVISIONS[0].productCategories.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D6E77] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-0">
                <button
                  onClick={() => {
                    setActivePage('bath-division');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1C30] hover:bg-[#0D6E77] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>Explore Bath Division</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CARD 2: Home Textile */}
            <div className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between">
              <div>
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100 img-zoom-container">
                  <img
                    src="/assets/division-home.jpg"
                    alt="Nexa Home Textile Bedding &amp; Linens"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-[#0A1C30] shadow-xs">
                    Division 02
                  </div>
                </div>

                <div className="p-8 sm:p-10 space-y-5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0A1C30]">
                    Home Textile
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Versatile home textile collections designed around comfort, quality, texture, and contemporary living.
                  </p>

                  <div className="pt-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Products Include:
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                      {DIVISIONS[1].productCategories.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D6E77] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 sm:p-10 pt-0">
                <button
                  onClick={() => {
                    setActivePage('home-textile');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0A1C30] hover:bg-[#0D6E77] text-white py-3.5 px-6 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>Explore Home Textile</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 4 — WHY NEXA                                         */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              The Manufacturing Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Built Around Quality
            </h2>
            <p className="text-sm text-slate-600">
              Designed from the ground up to provide international buyers with dependability, craftsmanship, and transparent order execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_NEXA_FEATURES.map((item) => (
              <div
                key={item.id}
                className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-slate-200 hover:border-[#0D6E77]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-slate-300 group-hover:text-[#0D6E77] transition-colors">
                      {item.id}
                    </span>
                    <div className="p-2.5 rounded-lg bg-white group-hover:bg-[#EBF6F7] border border-slate-200/80 transition-colors">
                      {getWhyIcon(item.id)}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0A1C30] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60">
                  <span className="text-[11px] font-semibold text-[#0D6E77]">
                    {item.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 5 — MANUFACTURING / CRAFT                             */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Manufacturing Precision
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                From Thread to Finished Textile
              </h2>
              <p className="text-sm text-slate-600">
                A disciplined six-stage manufacturing discipline ensuring every finished piece aligns with international standards.
              </p>
            </div>

            {/* Quick Step Indicators */}
            <div className="flex flex-wrap gap-2">
              {MANUFACTURING_STEPS.map((step, idx) => (
                <button
                  key={step.step}
                  onClick={() => setActiveCraftStep(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCraftStep === idx
                      ? 'bg-[#0D6E77] text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {step.step} {step.shortName}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Visual Spotlight */}
          <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Step Image */}
              <div className="lg:col-span-7 relative aspect-16/10 lg:aspect-auto min-h-[360px] bg-slate-100 img-zoom-container">
                <img
                  src={MANUFACTURING_STEPS[activeCraftStep].image}
                  alt={MANUFACTURING_STEPS[activeCraftStep].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#0A1C30]/90 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                  Stage {MANUFACTURING_STEPS[activeCraftStep].step}
                </div>
              </div>

              {/* Step Information */}
              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#0D6E77]">
                    Stage {MANUFACTURING_STEPS[activeCraftStep].step} of 06
                  </span>
                  <h3 className="text-2xl font-bold text-[#0A1C30]">
                    {MANUFACTURING_STEPS[activeCraftStep].name}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {MANUFACTURING_STEPS[activeCraftStep].description}
                  </p>

                  <div className="pt-4 space-y-2">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Standard Quality Parameters:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {MANUFACTURING_STEPS[activeCraftStep].specs.map((item, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0D6E77] shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <button
                    disabled={activeCraftStep === 0}
                    onClick={() => setActiveCraftStep((prev) => Math.max(0, prev - 1))}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 disabled:opacity-40 cursor-pointer"
                  >
                    &larr; Previous Stage
                  </button>
                  <button
                    disabled={activeCraftStep === MANUFACTURING_STEPS.length - 1}
                    onClick={() =>
                      setActiveCraftStep((prev) => Math.min(MANUFACTURING_STEPS.length - 1, prev + 1))
                    }
                    className="text-xs font-bold text-[#0D6E77] hover:text-[#0A585F] disabled:opacity-40 cursor-pointer"
                  >
                    Next Stage &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 6-Item Visual Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {MANUFACTURING_STEPS.map((step, idx) => (
              <div
                key={step.step}
                onClick={() => setActiveCraftStep(idx)}
                className={`group p-3 rounded-xl border text-left cursor-pointer transition-all ${
                  activeCraftStep === idx
                    ? 'border-[#0D6E77] bg-[#EBF6F7] shadow-xs'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-2 bg-slate-100">
                  <img
                    src={step.image}
                    alt={step.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="text-[11px] font-bold text-slate-400">{step.step}</div>
                <div className="text-xs font-semibold text-[#0A1C30] truncate">{step.shortName}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 6 — PRODUCT SHOWCASE                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Catalog Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                Made for Every Detail
              </h2>
              <p className="text-sm text-slate-600">
                A selection of high-demand textile lines developed for international retail collections and luxury hospitality venues.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200 self-start md:self-auto">
              <button
                onClick={() => setSelectedDivisionTab('all')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedDivisionTab === 'all'
                    ? 'bg-white text-[#0A1C30] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Featured All
              </button>
              <button
                onClick={() => setSelectedDivisionTab('bath-division')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedDivisionTab === 'bath-division'
                    ? 'bg-white text-[#0A1C30] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Bath Textile
              </button>
              <button
                onClick={() => setSelectedDivisionTab('home-textile')}
                className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  selectedDivisionTab === 'home-textile'
                    ? 'bg-white text-[#0A1C30] shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Home Textile
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-[#FAFBFD] rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100 img-zoom-container">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[#0A1C30] text-[11px] font-bold px-2.5 py-1 rounded-md shadow-2xs">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span>{prod.divisionName}</span>
                      <span className="font-semibold text-[#0D6E77]">Customizable</span>
                    </div>

                    <h3 className="text-lg font-bold text-[#0A1C30] group-hover:text-[#0D6E77] transition-colors">
                      {prod.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {prod.description}
                    </p>

                    <div className="pt-2 border-t border-slate-200/60 text-[11px] text-slate-500 space-y-1">
                      {prod.specs?.material && (
                        <div>
                          <span className="font-semibold text-slate-700">Material:</span> {prod.specs.material}
                        </div>
                      )}
                      {prod.specs?.gsm && (
                        <div>
                          <span className="font-semibold text-slate-700">GSM:</span> {prod.specs.gsm}
                        </div>
                      )}
                      {prod.specs?.threadCount && (
                        <div>
                          <span className="font-semibold text-slate-700">Count:</span> {prod.specs.threadCount}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenProductModal(prod)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-[#0D6E77] text-[#0A1C30] hover:text-white border border-slate-300 hover:border-[#0D6E77] py-2.5 px-4 rounded-xl text-xs font-bold transition-all shadow-2xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specifications &amp; Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 7 — QUALITY STATEMENT (DARK NAVY SECTION)            */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0A1C30] text-white relative overflow-hidden">
        {/* Subtle decorative thread line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#0D6E77] to-transparent"></div>
        <div className="absolute inset-0 textile-pattern opacity-10 pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-teal-300 text-xs font-semibold tracking-widest uppercase">
            <span>Commitment to Perfection</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Where Precision Meets Comfort.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            From the first thread to the final finish, every textile reflects our commitment to consistency, craftsmanship, and dependable quality.
          </p>

          <div className="pt-4 flex items-center justify-center gap-4 text-xs tracking-wider uppercase text-teal-200">
            <span className="w-12 h-[1px] bg-teal-500/50"></span>
            <span>Seamless Thread Connection</span>
            <span className="w-12 h-[1px] bg-teal-500/50"></span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 8 — B2B / CUSTOM SOLUTIONS                           */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Tailored Manufacturing
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                Solutions Designed Around You
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Nexa Textile partners closely with retail brands, institutional procurement managers, and international importers to engineer bespoke product programs to exact commercial briefs.
              </p>

              {/* 9 Custom Capabilities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Custom specifications',
                  'Product development',
                  'Fabric selection',
                  'Sizes & dimensions',
                  'GSM requirements (400-900)',
                  'Custom color matching & dyeing',
                  'Specialized finishing',
                  'Bespoke retail packaging',
                  'Private-label branding',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0D6E77] shrink-0" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2.5 bg-[#0D6E77] hover:bg-[#0A585F] text-white px-7 py-3.5 rounded-xl font-semibold text-sm shadow-md transition-all cursor-pointer"
                >
                  <span>Discuss Your Requirements</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Technical Spec Card */}
            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-base font-bold text-[#0A1C30]">OEM Program Support</h3>
                  <p className="text-xs text-slate-500">Structured development for custom programs</p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#EBF6F7] text-[#0D6E77]">
                  B2B Dedicated
                </span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="font-bold text-[#0A1C30] mb-1">1. Concept &amp; Yarn Selection</p>
                  <p className="text-slate-600">Selecting yarn counts, combed cotton fibers, or blended compositions matching target hand-feel.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="font-bold text-[#0A1C30] mb-1">2. Lab Dips &amp; Pre-Production Samples</p>
                  <p className="text-slate-600">Precision Pantone matching and physical hand-loom swatches submitted for client sign-off.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="font-bold text-[#0A1C30] mb-1">3. Bulk Weaving &amp; Container Logistics</p>
                  <p className="text-slate-600">Streamlined manufacturing with full inspection dossiers and containerization for export.</p>
                </div>
              </div>

              <div className="pt-2 text-xs text-slate-500 flex items-center justify-between">
                <span>Direct consultation available:</span>
                <a href={COMPANY_CONTACT.phoneTel} className="font-bold text-[#0D6E77] hover:underline">
                  {COMPANY_CONTACT.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 9 — FEATURED COLLECTIONS                             */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              Curated Ensembles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Featured Collections
            </h2>
            <p className="text-sm text-slate-600">
              Complete coordinated sets developed for international retail distribution, boutique hotels, and catalog programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_COLLECTIONS.map((col, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100 img-zoom-container">
                    <img
                      src={col.image}
                      alt={col.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1C30]/90 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                      {col.tag}
                    </div>
                  </div>

                  <div className="p-6 space-y-2">
                    <span className="text-[11px] font-semibold text-[#0D6E77]">
                      {col.division}
                    </span>
                    <h3 className="text-base font-bold text-[#0A1C30]">
                      {col.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {col.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => setActivePage('contact')}
                    className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-bold text-[#0D6E77] hover:text-[#0A585F] pt-3 border-t border-slate-100 cursor-pointer"
                  >
                    <span>Request Collection Book</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 10 — COMPANY STATS                                   */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            {COMPANY_STATS.map((stat, idx) => (
              <div
                key={idx}
                className={`pt-6 lg:pt-0 ${idx > 0 ? 'lg:pl-8' : ''} space-y-2 text-center lg:text-left group`}
              >
                <div className="text-4xl sm:text-5xl font-bold text-[#0A1C30] tracking-tight group-hover:text-[#0D6E77] transition-colors">
                  {stat.number}
                </div>
                <div className="text-sm font-bold text-slate-800">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 11 — CALL TO ACTION                                  */}
      {/* ============================================================ */}
      <section className="py-24 bg-gradient-to-br from-[#071322] via-[#0A1C30] to-[#0D233A] text-white relative overflow-hidden">
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-teal-300 text-xs font-semibold backdrop-blur-md border border-white/20">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Partner With Nexa Textile
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
            Let's Build Something Exceptional Together.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Looking for a dependable textile partner for your next collection or sourcing requirement? Connect directly with Nexa Textile.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a
              href={`mailto:${COMPANY_CONTACT.email}`}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0D6E77] hover:bg-[#0A585F] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition-all cursor-pointer text-sm btn-shimmer"
            >
              <span>Email: {COMPANY_CONTACT.email}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={COMPANY_CONTACT.phoneTel}
              className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/25 transition-all text-sm backdrop-blur-md"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call: {COMPANY_CONTACT.phone}</span>
            </a>

            <a
              href={COMPANY_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-3.5 rounded-xl transition-all text-sm shadow-md"
            >
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
