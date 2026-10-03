import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export default function Navbar({ activePage, setActivePage }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'profile', label: 'Profile' },
    { id: 'bath-division', label: 'Bath Division' },
    { id: 'home-textile', label: 'Home Textile' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEnquireClick = () => {
    setActivePage('contact');
    setMobileMenuOpen(false);
    // Smooth scroll to contact form
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  // Determine navbar background styling:
  // On home page at top, subtle dark gradient/glass overlay; after scroll, solid white with border
  const isHeroLight = !isScrolled && activePage === 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : isHeroLight
            ? 'bg-gradient-to-b from-[#071322]/80 via-[#071322]/40 to-transparent py-4 text-white'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Nexa Textile Official Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="group flex items-center gap-3 text-left focus:outline-none"
              aria-label="Nexa Textile Home"
            >
              <div className="relative flex items-center transition-all duration-300 group-hover:scale-105">
                <img
                  src={isHeroLight ? "/assets/nexa-logo-white.png" : "/assets/nexa-logo-brand.png"}
                  alt="Nexa Textile"
                  className="h-9 sm:h-11 w-auto object-contain transition-all duration-300 drop-shadow-sm group-hover:drop-shadow-[0_0_15px_rgba(20,184,166,0.35)]"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/nexa-logo-brand.png';
                  }}
                />
              </div>
              <div className="hidden lg:block border-l border-slate-300/40 pl-3">
                <span
                  className={`text-[10px] uppercase tracking-widest font-semibold block transition-colors ${
                    isHeroLight ? 'text-teal-300' : 'text-[#0D6E77]'
                  }`}
                >
                  Seamless Thread Connection
                </span>
                <span
                  className={`text-xs font-medium transition-colors ${
                    isHeroLight ? 'text-slate-200' : 'text-slate-500'
                  }`}
                >
                  Export Manufacturing
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => {
                const isActive = activePage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? isHeroLight
                          ? 'text-white font-semibold'
                          : 'text-[#0A1C30] font-semibold'
                        : isHeroLight
                        ? 'text-slate-200 hover:text-white hover:bg-white/10'
                        : 'text-slate-600 hover:text-[#0A1C30] hover:bg-slate-100/70'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0.5 left-3.5 right-3.5 h-[2.5px] bg-[#0D6E77] rounded-full"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <a
                href={COMPANY_CONTACT.phoneTel}
                className={`hidden xl:flex items-center gap-2 text-xs font-semibold px-3 py-2 rounded-lg border transition-colors ${
                  isHeroLight
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
                title="Call Nexa Textile Directly"
              >
                <Phone className="w-3.5 h-3.5 text-[#0D6E77]" />
                <span>{COMPANY_CONTACT.phone}</span>
              </a>

              <button
                onClick={handleEnquireClick}
                className="inline-flex items-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={handleEnquireClick}
                className="bg-[#0D6E77] text-white px-3 py-1.5 rounded-md text-xs font-semibold"
              >
                Enquire
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors focus:outline-none ${
                  isHeroLight ? 'text-white hover:bg-white/10' : 'text-slate-800 hover:bg-slate-100'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white text-slate-900 border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="pb-2 border-b border-slate-100 flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider font-bold text-[#0D6E77]">Navigation</span>
              <a
                href={COMPANY_CONTACT.phoneTel}
                className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold"
              >
                <Phone className="w-3.5 h-3.5 text-[#0D6E77]" />
                {COMPANY_CONTACT.phone}
              </a>
            </div>
            {navItems.map((item) => {
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#EBF6F7] text-[#0D6E77] font-semibold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#0D6E77]"></span>}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={handleEnquireClick}
                className="w-full bg-[#0D6E77] hover:bg-[#0A585F] text-white py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
