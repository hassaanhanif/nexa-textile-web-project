import React, { useState } from 'react';
import {
  X,
  Phone,
  MessageSquare,
  Mail,
  Copy,
  Check,
  ShieldCheck,
  ExternalLink,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { COMPANY_CONTACT } from '../data/companyData';

export default function ProductModal({ product, onClose, onInquirySubmitted }) {
  const [copied, setCopied] = useState(false);

  if (!product) return null;

  const whatsappInquiryUrl = `${COMPANY_CONTACT.whatsappUrl}%20regarding%20${encodeURIComponent(
    product.name
  )}%20(${encodeURIComponent(product.divisionName || 'Textile Division')})`;

  const emailSubject = `Export Specification Inquiry: ${product.name} - Nexa Textile`;
  const emailBody = `Hello Nexa Textile Commercial Desk,%0D%0A%0D%0AI would like to inquire about wholesale volume manufacturing for:%0D%0AProduct: ${product.name}%0D%0ADivision: ${product.divisionName || 'Textiles'}%0D%0ASpecifications: ${product.specs?.gsm || product.specs?.threadCount || 'Standard Export Spec'}%0D%0A%0D%0APlease provide available colors, container packing specs, and pricing terms.%0D%0A%0D%0AThank you,`;

  const emailInquiryUrl = `mailto:${COMPANY_CONTACT.email}?subject=${encodeURIComponent(
    emailSubject
  )}&body=${emailBody}`;

  const handleCopySpecs = () => {
    const specDetails = [
      `Product: ${product.name}`,
      `Category: ${product.category}`,
      `Division: ${product.divisionName}`,
      product.specs?.material ? `Material: ${product.specs.material}` : '',
      product.specs?.gsm ? `GSM: ${product.specs.gsm}` : '',
      product.specs?.threadCount ? `Thread Count: ${product.specs.threadCount}` : '',
      product.specs?.sizes ? `Sizes: ${product.specs.sizes}` : '',
      `Contact Nexa Textile: ${COMPANY_CONTACT.email} | ${COMPANY_CONTACT.phone}`,
    ]
      .filter(Boolean)
      .join('\n');

    navigator.clipboard.writeText(specDetails);
    setCopied(true);
    if (onInquirySubmitted) {
      onInquirySubmitted(`Copied specifications for "${product.name}"!`);
    }
    setTimeout(() => {
      setCopied(false);
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-slate-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-slate-100/90 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors cursor-pointer"
          aria-label="Close product modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Column: Product Photo & Specifications */}
          <div className="bg-slate-50 p-6 sm:p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between">
            <div>
              <div className="aspect-4/3 rounded-2xl overflow-hidden shadow-xs mb-5 bg-slate-200 relative group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-xs text-[#0D6E77] shadow-xs">
                    {product.divisionName}
                  </span>
                </div>
              </div>

              <div className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-semibold uppercase tracking-wider bg-[#EBF6F7] text-[#0D6E77] mb-2">
                {product.category}
              </div>

              <h3 className="text-xl font-bold text-[#0A1C30] leading-snug mb-2">
                {product.name}
              </h3>

              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Technical Specifications Overview */}
              <div className="space-y-1.5 pt-3 border-t border-slate-200/80 text-xs">
                <p className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-2">
                  Manufacturing Specifications:
                </p>
                {product.specs?.material && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Material:</span>
                    <span className="text-slate-800 font-medium text-right">{product.specs.material}</span>
                  </div>
                )}
                {product.specs?.gsm && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Weight / GSM:</span>
                    <span className="text-slate-800 font-semibold text-[#0D6E77] text-right">{product.specs.gsm}</span>
                  </div>
                )}
                {product.specs?.threadCount && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Thread Count:</span>
                    <span className="text-slate-800 font-semibold text-[#0D6E77] text-right">{product.specs.threadCount}</span>
                  </div>
                )}
                {product.specs?.sizes && (
                  <div className="flex justify-between py-1 border-b border-slate-200/60">
                    <span className="text-slate-500">Sizing:</span>
                    <span className="text-slate-800 font-medium text-right">{product.specs.sizes}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleCopySpecs}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold py-2 px-3 rounded-xl border border-slate-200 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Specifications Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Full Specifications</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Commercial Inquiry Actions */}
          <div className="p-6 sm:p-8 flex flex-col justify-between bg-white">
            <div className="space-y-5">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-teal-50 text-[#0D6E77] text-[10px] font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3 h-3" />
                  Direct Procurement Desk
                </div>
                <h4 className="text-xl font-bold text-[#0A1C30]">
                  Inquire For Quotation
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Connect directly with our production desk for container load pricing, private branding, lab dips, or custom GSM programs.
                </p>
              </div>

              {/* Direct Communication Action Buttons */}
              <div className="space-y-3 pt-2">
                {/* 1. WhatsApp Button */}
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-between bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4" />
                    <div className="text-left">
                      <span className="block font-bold">Chat on WhatsApp</span>
                      <span className="text-[10px] text-emerald-100 font-normal">Pre-filled with product specifications</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>

                {/* 2. Email Button */}
                <a
                  href={emailInquiryUrl}
                  className="w-full inline-flex items-center justify-between bg-[#0D6E77] hover:bg-[#0A585F] text-white text-xs font-semibold py-3 px-4 rounded-xl shadow-sm transition-all transform hover:-translate-y-0.5 cursor-pointer group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4" />
                    <div className="text-left">
                      <span className="block font-bold">Email Official RFQ</span>
                      <span className="text-[10px] text-teal-100 font-normal">{COMPANY_CONTACT.email}</span>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </a>

                {/* 3. Direct Phone Call */}
                <a
                  href={COMPANY_CONTACT.phoneTel}
                  className="w-full inline-flex items-center justify-between bg-[#FAFBFD] hover:bg-slate-100 text-[#0A1C30] text-xs font-semibold py-2.5 px-4 rounded-xl border border-slate-200 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#0D6E77]" />
                    <div className="text-left">
                      <span className="block font-bold">Direct Call</span>
                      <span className="text-[10px] text-slate-500 font-normal">{COMPANY_CONTACT.phone}</span>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#0D6E77] font-bold">Call Now &rarr;</span>
                </a>
              </div>

              {/* Trust & Guarantee Highlights */}
              <div className="p-4 rounded-2xl bg-[#FAFBFD] border border-slate-200/80 space-y-2 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Custom woven header labels &amp; retail barcoding available.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Lab dips &amp; courier sample swatches dispatched within 48h.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Flexible wholesale quantities for OEM brands &amp; importers.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#0D6E77] shrink-0" />
              <span>Full confidentiality for private-brand specifications.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
