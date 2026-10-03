import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, ArrowUp, Send } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A1C30] text-slate-300 border-t border-slate-800">
      {/* Top Banner / Corporate Trust Strip */}
      <div className="border-b border-slate-800/80 bg-[#071322]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-teal-900/40 border border-[#0D6E77]/30 flex items-center justify-center text-[#138A96] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Export Quality Standards</p>
                <p className="text-xs text-slate-400">Strict batch consistency &amp; laboratory compliance</p>
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-teal-900/40 border border-[#0D6E77]/30 flex items-center justify-center text-[#138A96] shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Direct Production Inquiries</p>
                <p className="text-xs text-slate-400">Rapid turnaround on customized OEM specifications</p>
              </div>
            </div>

            <div className="flex items-center justify-start md:justify-end gap-3">
              <a
                href={COMPANY_CONTACT.phoneTel}
                className="inline-flex items-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call: {COMPANY_CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="relative inline-flex items-center group cursor-pointer" onClick={() => handleNav('home')}>
              <img
                src="/assets/nexa-logo-white.png"
                alt="Nexa Textile"
                className="h-10 sm:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 drop-shadow-[0_0_12px_rgba(20,184,166,0.25)]"
                onError={(e) => {
                  e.currentTarget.src = '/assets/nexa-logo-brand.png';
                }}
              />
            </div>
            
            <p className="text-sm text-slate-300 font-medium">
              Nexa Textile — Seamless Thread Connection.
            </p>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              A modern textile manufacturing company delivering precision bath and home textile collections engineered for global retailers, importers, hospitality brands, and discerning B2B partners worldwide.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700/60 text-xs text-teal-300">
                <span className="w-2 h-2 rounded-full bg-[#138A96] animate-pulse"></span>
                Export Manufacturing Operations Active
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 transform inline-block cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('profile')}
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 transform inline-block cursor-pointer"
                >
                  Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('bath-division')}
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 transform inline-block cursor-pointer"
                >
                  Bath Division
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('home-textile')}
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 transform inline-block cursor-pointer"
                >
                  Home Textile
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-400 hover:text-white transition-colors hover:translate-x-0.5 transform inline-block cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Divisions Overview */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
              Core Divisions
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div>
                <p className="font-semibold text-slate-200 mb-1">Bath Division</p>
                <p>Luxury Towels, Bathrobes, Hotel Ensembles, Heavy-gauge Bath Mats, Jacquard Weaves.</p>
              </div>
              <div className="pt-2">
                <p className="font-semibold text-slate-200 mb-1">Home Textile</p>
                <p>Egyptian Cotton Sateen Bed Linen, Percale Duvets, Fitted Sheets, Throws &amp; Quilts.</p>
              </div>
            </div>
          </div>

          {/* Direct Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 border-b border-slate-800 pb-2">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 uppercase tracking-wider block text-[10px] font-semibold">
                  Official Phone
                </span>
                <a
                  href={COMPANY_CONTACT.phoneTel}
                  className="text-white hover:text-teal-300 font-semibold text-sm transition-colors block mt-0.5"
                >
                  {COMPANY_CONTACT.phone}
                </a>
              </div>

              <div>
                <span className="text-slate-500 uppercase tracking-wider block text-[10px] font-semibold">
                  Official Email
                </span>
                <a
                  href={`mailto:${COMPANY_CONTACT.email}`}
                  className="text-slate-300 hover:text-teal-300 font-medium transition-colors block mt-0.5 break-all"
                >
                  {COMPANY_CONTACT.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => handleNav('contact')}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-2 rounded-lg text-xs font-medium border border-slate-700 transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#138A96]" />
                  <span>Send Inquiries</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; 2026 Nexa Textile. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <span>Seamless Thread Connection</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-teal-300 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
