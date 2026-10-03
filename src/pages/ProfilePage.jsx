import React from 'react';
import {
  ShieldCheck,
  Target,
  Compass,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ArrowRight,
  Leaf,
  Phone,
} from 'lucide-react';
import { PROFILE_DATA, COMPANY_CONTACT } from '../data/companyData';

export default function ProfilePage({ setActivePage }) {
  const values = PROFILE_DATA.values;
  const qaSteps = PROFILE_DATA.qaTimeline;

  return (
    <div className="bg-[#FAFBFD] space-y-0">
      {/* ============================================================ */}
      {/* 1. HERO & COMPANY INTRODUCTION                               */}
      {/* ============================================================ */}
      <section className="relative bg-[#071322] text-white pt-36 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/assets/hero-textile.jpg"
            alt="Nexa Textile Facilities"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071322] via-[#0A1C30]/90 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Corporate Profile
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">
            Modern Craftsmanship. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-white">
              Enduring Partnerships.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            Nexa Textile is a modern textile manufacturing enterprise structured to fulfill the demanding quality and export criteria of international buyers, hospitality chains, and premier retail brands.
          </p>

          <div className="pt-4 flex items-center gap-4 text-xs text-slate-400">
            <span className="tracking-widest uppercase font-semibold text-teal-300">
              Seamless Thread Connection
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
            <span>Bath Division &bull; Home Textile</span>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 2. OUR STORY                                                 */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Our Evolution
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Nexa Textile was established with a singular focus: to elevate textile manufacturing through disciplined process control, high-grade yarn selection, and dependable export execution. Recognizing the evolving requirements of international markets, we invested strategically in precision weaving systems and sustainable finishing techniques.
                </p>
                <p>
                  Today, Nexa Textile operates two dedicated divisions — Bath Division and Home Textile — each engineered to handle customized specifications from conceptual prototyping to high-volume container shipments.
                </p>
                <p>
                  Our tagline, <span className="font-semibold text-[#0A1C30]">"Seamless Thread Connection,"</span> embodies both our technical capability in weaving uninterrupted, resilient fabrics and our enduring commitment to transparent commercial partnerships across continents.
                </p>
              </div>

              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-100">
                <div>
                  <p className="text-2xl font-bold text-[#0D6E77]">Bath</p>
                  <p className="text-xs text-slate-500 font-medium">Plush Towels &amp; Robes</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0D6E77]">Home</p>
                  <p className="text-xs text-slate-500 font-medium">Sateen &amp; Percale Linens</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-[#0D6E77]">Global</p>
                  <p className="text-xs text-slate-500 font-medium">Export Compliance</p>
                </div>
              </div>
            </div>

            {/* Right Editorial Image */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 img-zoom-container">
                <img
                  src="/assets/intro-editorial.jpg"
                  alt="Nexa Textile Heritage &amp; Quality"
                  className="w-full h-[420px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 3 & 4. OUR VISION & MISSION                                  */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#FAFBFD] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6F7] text-[#0D6E77] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Guiding Purpose
              </span>
              <h3 className="text-2xl font-bold text-[#0A1C30]">
                Our Vision
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                "{PROFILE_DATA.vision}"
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Striving continuously toward higher benchmarks in yarn engineering, customer satisfaction, and international brand trust.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xs space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#EBF6F7] text-[#0D6E77] flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Actionable Commitment
              </span>
              <h3 className="text-2xl font-bold text-[#0A1C30]">
                Our Mission
              </h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                "{PROFILE_DATA.mission}"
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                Empowering international partners with agile manufacturing runs, unyielding quality assurance, and reliable dispatch timelines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 5. OUR VALUES                                                */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              The Core Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Our Values
            </h2>
            <p className="text-sm text-slate-600">
              The fundamental standards that govern every meter of fabric we weave and every business agreement we honor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#0D6E77]/50 hover:shadow-md transition-all duration-300 space-y-3"
              >
                <div className="text-sm font-bold text-[#0D6E77]">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-[#0A1C30]">
                  {val.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 6. MANUFACTURING PHILOSOPHY                                  */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#0A1C30] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                Operating Doctrine
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Manufacturing Philosophy
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                At Nexa Textile, we view manufacturing as a science of repeatability. A high-end towel or bed sheet is only truly luxurious when the 10,000th unit possesses the identical tensile strength, color consistency, and skin softness as the pre-production sample.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Tension-monitored warp beam preparation to prevent selvedge pull',
                  'Calibrated soft-flow washing systems preserving fiber longevity',
                  'Continuous stenter temperature regulation for dimensional stability',
                  'Reinforced industrial hems that withstand institutional laundering',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800 img-zoom-container">
                <img
                  src="/assets/craft-weaving.jpg"
                  alt="Modern Precision Weaving Looms"
                  className="w-full h-[380px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 7. QUALITY ASSURANCE (VISUAL TIMELINE)                        */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              Multi-Point Verification
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Quality Assurance Timeline
            </h2>
            <p className="text-sm text-slate-600">
              A chronological overview of our quality control gates from incoming raw cotton to sealed export packing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative">
            {qaSteps.map((qa, idx) => (
              <div
                key={qa.step}
                className="relative bg-[#FAFBFD] p-6 rounded-2xl border border-slate-200 flex flex-col justify-between space-y-4 hover:border-[#0D6E77] hover:shadow-md transition-all"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#0D6E77] text-white font-bold flex items-center justify-center text-sm mb-3">
                    {qa.step}
                  </div>
                  <h3 className="text-base font-bold text-[#0A1C30] mb-2">
                    {qa.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {qa.desc}
                  </p>
                </div>
                <div className="pt-2">
                  <span className="text-[10px] font-semibold text-[#0D6E77] uppercase tracking-wider">
                    Stage Passed &check;
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* 8. SUSTAINABILITY                                            */}
      {/* ============================================================ */}
      <section className="py-24 bg-[#FAFBFD] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold">
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Responsible Practices</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1C30] tracking-tight">
                  Sustainable Textile Stewardship
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  Responsible textile manufacturing is an important part of the industry's future. Nexa Textile continues to explore more efficient processes, responsible material choices, and improved production practices.
                </p>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Our operational priorities include minimizing dye bath water consumption through low-liquor-ratio machinery, utilizing biodegradable processing aids, and optimizing factory thermal efficiency through heat recovery exchangers.
                </p>

                <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Water Recovery Focus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Safe Dyestuffs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Efficient Thermal Energy</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden aspect-4/3 bg-slate-100 img-zoom-container">
                  <img
                    src="/assets/profile-sustainability.jpg"
                    alt="Sustainable Textile Manufacturing Practices"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA on Profile */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1C30]">
            Interested in partnering with Nexa Textile?
          </h2>
          <p className="text-sm text-slate-600">
            Connect with our corporate export desk to request capability briefings, mill credentials, or fabric swatches.
          </p>
          <div className="pt-2 flex items-center justify-center gap-4">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white px-7 py-3 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>Contact Corporate Desk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
