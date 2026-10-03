import React from 'react';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Phone,
  Eye,
  Feather,
} from 'lucide-react';
import { PRODUCTS, DIVISIONS, COMPANY_CONTACT } from '../data/companyData';

export default function HomeTextilePage({ setActivePage, onOpenProductModal }) {
  const homeProducts = PRODUCTS.filter((p) => p.division === 'home-textile');
  const divisionInfo = DIVISIONS[1];

  const weaveTypes = [
    {
      name: 'Lustrous Sateen',
      tc: '300 TC - 800 TC',
      desc: 'Silky smooth hand-feel with a subtle luminous sheen and elegant, fluid drape.',
    },
    {
      name: 'Crisp Percale',
      tc: '200 TC - 400 TC',
      desc: 'Breathable, cool-to-touch matte finish engineered for year-round crispness.',
    },
    {
      name: 'Textured Waffle & Dobby',
      tc: 'Specialty Weave',
      desc: 'Dimensional honeycomb and geometric motifs for accent throws, coverlets, and cushions.',
    },
    {
      name: 'Garment-Washed Cotton',
      tc: 'Relaxed Living',
      desc: 'Pre-softened for an effortless relaxed texture, gentle skin touch, and zero initial shrinkage.',
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
            src="/assets/division-home.jpg"
            alt="Nexa Home Textile Bedding &amp; Linens"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071322]/95 via-[#0A1C30]/85 to-[#071322]/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30] via-transparent to-black/20"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-teal-300 text-xs font-semibold uppercase tracking-wider">
            Nexa Manufacturing Division 02
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">
            Textiles for Modern Living.
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-2xl leading-relaxed font-normal">
            Versatile home textile collections designed around comfort, quality, texture, and contemporary living for international retailers and bespoke furnishing houses.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                const catalogElem = document.getElementById('home-catalog');
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
      {/* SECTION: COMFORT IN EVERY LAYER                              */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Sensory &amp; Structural Quality
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                Comfort in Every Layer
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Bedding textiles require an intimate balance between tactile luxury and resilient weave integrity. Nexa Textile executes specialized yarn preparations to produce sheeting that feels delightfully soft from the first night and retains its refined luster through continuous washing.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  '100% Long-Staple combed cotton yarns with uniform micronaire',
                  'Mercerized finishing for enhanced luster, tensile strength, and dye affinity',
                  'Deep-pocket fitted sheets with 360-degree reinforced elastication',
                  'Tailored marrow borders, flange pillow headers, and concealed button bands',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0D6E77] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {weaveTypes.map((weave, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#FAFBFD] border border-slate-200 space-y-2 hover:border-[#0D6E77]/50 transition-colors"
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#0D6E77]">
                      {weave.tc}
                    </span>
                    <h3 className="text-base font-bold text-[#0A1C30]">
                      {weave.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {weave.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* PRODUCT CATALOG GRID                                         */}
      {/* ============================================================ */}
      <section id="home-catalog" className="py-24 bg-[#FAFBFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D6E77]">
                Product Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1C30] tracking-tight">
                Home Textile Collections
              </h2>
              <p className="text-sm text-slate-600">
                Linen, duvets, quilts, and decorative cushions crafted for modern lifestyle brands and international home furnishing distributors.
              </p>
            </div>

            <div className="text-xs text-slate-500 font-medium">
              Showing {homeProducts.length} core home textile product lines
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeProducts.map((prod) => (
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
                    <div className="absolute top-3 left-3 bg-[#0A1C30]/90 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                      {prod.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5">
                    <h3 className="text-base font-bold text-[#0A1C30] group-hover:text-[#0D6E77] transition-colors">
                      {prod.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {prod.description}
                    </p>

                    <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                      {prod.specs?.threadCount && (
                        <div>
                          <span className="font-semibold text-slate-700">Thread Count:</span> {prod.specs.threadCount}
                        </div>
                      )}
                      {prod.specs?.material && (
                        <div>
                          <span className="font-semibold text-slate-700">Composition:</span> {prod.specs.material}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenProductModal(prod)}
                    className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0D6E77] hover:bg-[#0A585F] text-white py-2.5 px-3 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Specs &amp; Enquire</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* CUSTOM DEVELOPMENT FOR B2B BUYERS                            */}
      {/* ============================================================ */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0A1C30] text-white rounded-3xl p-8 sm:p-14 overflow-hidden relative">
            <div className="relative z-10 max-w-2xl space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-300">
                Custom Development Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Private Label &amp; Custom Sizing
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Whether you need European standard duvet sizing (140x200cm / 200x200cm), US King bedding suites (108x102 inches), or bespoke embroidered hotel sets, Nexa Textile develops complete custom specifications with private branding bands and poly-bag inserts.
              </p>
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => {
                    setActivePage('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0D6E77] hover:bg-[#0A585F] text-white px-8 py-3.5 rounded-xl font-semibold text-sm transition-colors cursor-pointer"
                >
                  <span>Request Custom Home Textile RFQ</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={COMPANY_CONTACT.phoneTel}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3.5 rounded-xl font-semibold text-sm border border-white/20 transition-all"
                >
                  <Phone className="w-4 h-4 text-teal-300" />
                  <span>Call: {COMPANY_CONTACT.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
