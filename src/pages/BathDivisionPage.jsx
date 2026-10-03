import React from 'react';
import {
  Droplets,
  ShieldCheck,
  Feather,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  Phone,
  Eye,
} from 'lucide-react';
import { PRODUCTS, DIVISIONS, COMPANY_CONTACT } from '../data/companyData';

export default function BathDivisionPage({ setActivePage, onOpenProductModal }) {
  const bathProducts = PRODUCTS.filter((p) => p.division === 'bath-division');
  const divisionInfo = DIVISIONS[0];

  const performanceFeatures = [
    {
      title: 'Plush Softness',
      desc: 'Selected extra-long-staple cotton fibers and zero-twist loop options create an indulgent cloud-like tactile touch.',
      icon: <Feather className="w-5 h-5 text-[#0D6E77]" />,
    },
    {
      title: 'Rapid Absorbency',
      desc: 'Optimized capillary loop architecture that wicks water immediately without feeling overly heavy or wet.',
      icon: <Droplets className="w-5 h-5 text-[#0D6E77]" />,
    },
    {
      title: 'Long-Term Durability',
      desc: 'Double-needle stitched side hems and ring-spun ground warp yarns withstand heavy institutional laundering cycles.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0D6E77]" />,
    },
    {
      title: 'Flexible GSM Range',
      desc: 'Weights calibrated to buyer requirements from lightweight 400 GSM gym towels up to opulent 900 GSM bath sheets.',
      icon: <Sliders className="w-5 h-5 text-[#0D6E77]" />,
    },
  ];

  return (
    <div className="bg-[#FAFBFD] space-y-0">
      {/* ============================================================ */}
      {/* HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative bg-[#071322] text-white pt-36 pb-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/division-bath.jpg"
            alt="Nexa Textile Bath Division Towels &amp; Bathrobes"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#0A1C30]/85 to-[#071322]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30] via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Nexa Manufacturing Division 01
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">
            Bath Textiles, Refined.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            Thoughtfully crafted bath textiles combining softness, absorbency, durability, and refined finishing for luxury retail brands and 5-star hospitality groups.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const catalogElem = document.getElementById('bath-catalog');
                if (catalogElem) catalogElem.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white px-7 py-3 rounded-xl font-semibold text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={COMPANY_CONTACT.phoneTel}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm border border-white/25 transition-all"
            >
              <Phone className="w-4 h-4 text-teal-300" />
              <span>Call: {COMPANY_CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PERFORMANCE & CRAFT HIGHLIGHTS SECTION                       */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
              Engineering Superiority
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
              Designed for Comfort. Built for Performance.
            </h2>
            <p className="text-sm text-slate-600">
              Balancing sensory indulgence with rigorous commercial durability across every towel and bathrobe we manufacture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {performanceFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#FAFBFD] border border-slate-200 hover:border-[#0D6E77]/50 hover:shadow-md transition-all space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-white shadow-2xs border border-slate-200 flex items-center justify-center">
                  {feat.icon}
                </div>
                <h3 className="text-base font-bold text-[#0A1C30]">
                  {feat.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Detailed Customization Capabilities Overview */}
          <div className="bg-[#FAFBFD] rounded-3xl p-8 sm:p-12 border border-slate-200 space-y-8">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-xl font-bold text-[#0A1C30]">
                Customizable Manufacturing Parameters
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                All technical specifications can be tailored to meet your target cost, tactile feel, and regulatory market guidelines.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
              <div className="space-y-2">
                <span className="font-bold text-[#0A1C30] uppercase tracking-wider text-[11px] block">
                  GSM Options
                </span>
                <p className="text-slate-600">
                  Customizable from 400 to 900 GSM to balance plushness and drying efficiency.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-[#0A1C30] uppercase tracking-wider text-[11px] block">
                  Custom Sizing
                </span>
                <p className="text-slate-600">
                  Washcloths (30x30cm), Hand Towels (50x90cm), Bath Towels (70x140cm), Bath Sheets (100x150cm).
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-[#0A1C30] uppercase tracking-wider text-[11px] block">
                  Color &amp; Dyes
                </span>
                <p className="text-slate-600">
                  Pantone color matching with high wash-fastness reactive dyes, vat-dyed chlorine-resistant shades.
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-bold text-[#0A1C30] uppercase tracking-wider text-[11px] block">
                  Private Labeling
                </span>
                <p className="text-slate-600">
                  Woven jacquard logo headers, custom embroidery, satin care labels, and branded ribbons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCT CATALOG GRID                                         */}
      {/* ============================================================ */}
      <section id="bath-catalog" className="py-24 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Product Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                Bath Textile Collections
              </h2>
              <p className="text-sm text-slate-600">
                Browse our core lines engineered for international export, retail programs, and boutique hotel suites.
              </p>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing {bathProducts.length} core bath product lines
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bathProducts.map((prod) => (
              <div
                key={prod.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-4/3 overflow-hidden bg-slate-100 img-zoom-container">
                    <img
                      src={prod.image}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-[#0A1C30]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-[#0A1C30] group-hover:text-[#0D6E77] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {prod.description}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                      {prod.specs?.material && (
                        <div>
                          <span className="font-semibold text-slate-800">Composition:</span> {prod.specs.material}
                        </div>
                      )}
                      {prod.specs?.gsm && (
                        <div>
                          <span className="font-semibold text-slate-800">GSM Spec:</span> {prod.specs.gsm}
                        </div>
                      )}
                      {prod.specs?.sizes && (
                        <div>
                          <span className="font-semibold text-slate-800">Sizes:</span> {prod.specs.sizes}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onOpenProductModal(prod)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white py-3 px-4 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Enquire &amp; Request Specs</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* B2B INQUIRY STRIP                                            */}
      {/* ============================================================ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
            Institutional &amp; Private Label
          </span>
          <h2 className="text-3xl font-bold text-[#0A1C30]">
            Looking for Custom Bath Textile Manufacturing?
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Our technical team can review your GSM, dobby border motifs, yarn twist, and color requirements to prepare accurate costing and sample swatches.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setActivePage('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#0A1C30] hover:bg-[#0D6E77] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
            >
              <span>Submit Bath Division RFQ</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={COMPANY_CONTACT.phoneTel}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0D6E77] hover:text-[#0A585F] p-2"
            >
              <Phone className="w-4 h-4" />
              <span>Direct Call: {COMPANY_CONTACT.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
