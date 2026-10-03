// Nexa Textile Centralized Data & Configuration
// All company details, product listings, editable statistics, and contact info are maintained here.

export const COMPANY_CONTACT = {
  // Official Phone & WhatsApp Provided by Client
  phone: "+92 304 0377100",
  phoneFormatted: "+92 304 0377100",
  phoneRaw: "03040377100",
  phoneTel: "tel:+923040377100",
  whatsappUrl: "https://wa.me/923040377100?text=Hello%20Nexa%20Textile%2C%20I%20would%20like%20to%20enquire%20about%20your%20textile%20solutions.",
  
  // Official Company Email
  email: "nexatextile1@gmail.com",
  exportDeskEmail: "nexatextile1@gmail.com",
  
  // Headquarters & Facility Reference
  hours: "Monday - Saturday: 9:00 AM - 6:00 PM (PKT)",
  supportAvailability: "International B2B Desk Available Across Timezones",
  tagline: "Seamless Thread Connection",
};

// EDITABLE PLACEHOLDER COMPANY STATISTICS
// Note: These figures serve as professional placeholders and can be updated easily as needed.
export const COMPANY_STATS = [
  {
    number: "20+",
    label: "Years of Textile Experience",
    subtext: "Deep roots in weaving, finishing, and export craftsmanship",
    isPlaceholder: true,
  },
  {
    number: "50+",
    label: "Product Variations",
    subtext: "Comprehensive catalog across bath and home textile categories",
    isPlaceholder: true,
  },
  {
    number: "100%",
    label: "Quality Focus",
    subtext: "Rigorous laboratory testing and multistep inspection standards",
    isPlaceholder: false,
  },
  {
    number: "2",
    label: "Core Textile Divisions",
    subtext: "Dedicated manufacturing units for Bath and Home textiles",
    isPlaceholder: false,
  },
];

// 5 CORE PILLARS — WHY NEXA
export const WHY_NEXA_FEATURES = [
  {
    id: "01",
    title: "Quality First",
    description: "Every stage of production is approached with consistency, strict yarn selection, and attention to detail.",
    highlight: "Zero Compromise Standards",
  },
  {
    id: "02",
    title: "Modern Manufacturing",
    description: "Contemporary processes, precision weaving looms, and continuous finishing lines support dependable textile solutions.",
    highlight: "Automated Precision",
  },
  {
    id: "03",
    title: "Flexible Solutions",
    description: "Collections, thread counts, weights, and specifications can be developed around diverse international buyer requirements.",
    highlight: "Customized to Spec",
  },
  {
    id: "04",
    title: "Reliable Supply",
    description: "Built around consistency, transparent communication, and dependable order execution for global distribution.",
    highlight: "On-Time Dispatch",
  },
  {
    id: "05",
    title: "Global Outlook",
    description: "Designed to serve international buyers, importers, and hospitality groups with professional export standards.",
    highlight: "Export Readiness",
  },
];

// 6-STEP MANUFACTURING STORY
export const MANUFACTURING_STEPS = [
  {
    step: "01",
    name: "Yarn Selection & Preparation",
    shortName: "Yarn",
    description: "Sourcing premium long-staple combed cotton and specialty blends, tested for tensile strength, elongation, and uniform twist before warping.",
    image: "/assets/craft-yarn.jpg",
    specs: ["100% Combed Cotton", "Ring Spun & Zero Twist Options", "Low Impurity Tolerance"],
  },
  {
    step: "02",
    name: "Precision Weaving",
    shortName: "Weaving",
    description: "High-speed air-jet looms produce even, dense fabrics with flawless dobby and jacquard borders under strictly controlled loom room humidity.",
    image: "/assets/craft-weaving.jpg",
    specs: ["Dobby & Jacquard Capabilities", "Controlled Tension Calibration", "High-Density Weft Insertion"],
  },
  {
    step: "03",
    name: "Dyeing & Finishing",
    shortName: "Dyeing & Finishing",
    description: "Eco-conscious reactive dye recipes yield rich, bleed-free colors, followed by soft-flow tumbling and stenter heat-setting for dimensional stability.",
    image: "/assets/craft-dyeing.jpg",
    specs: ["High Color Fastness", "OEKO-TEX Compliant Dyestuffs", "Anti-Pilling & Soft Finish"],
  },
  {
    step: "04",
    name: "Cutting & Craftsmanship Stitching",
    shortName: "Cutting & Stitching",
    description: "Automated length and cross-cutting systems ensure exact dimensions, assembled with reinforced lock-stitched side hems and clean mitred corners.",
    image: "/assets/craft-cutting.jpg",
    specs: ["Reinforced Double Stitching", "Laser-Guided Alignment", "Bespoke Hem & Border Options"],
  },
  {
    step: "05",
    name: "Quality Inspection & Lab Testing",
    shortName: "Quality Inspection",
    description: "100% illuminated light-table inspection for weave defects, backed by in-house lab checks for GSM, shrinkage, tear resistance, and absorbency.",
    image: "/assets/craft-inspection.jpg",
    specs: ["AQL 1.5 / 2.5 Inspection", "Absorbency & Shrinkage Testing", "Tensile Strength Verification"],
  },
  {
    step: "06",
    name: "Finished Presentation & Packaging",
    shortName: "Finished Product",
    description: "Carefully folded, banded with customized client labels or luxury ribbon ties, and carton-packed according to global export handling guidelines.",
    image: "/assets/craft-packaging.jpg",
    specs: ["Private Label Banding", "Bespoke Gift & Retail Boxes", "Moisture-Barriered Export Cartons"],
  },
];

// DIVISIONS OVERVIEW
export const DIVISIONS = [
  {
    id: "bath-division",
    title: "Bath Division",
    tagline: "Bath Textiles, Refined.",
    description: "Thoughtfully crafted bath textiles combining softness, absorbency, durability, and refined finishing.",
    heroImage: "/assets/division-bath.jpg",
    highlights: [
      "Custom GSM from 400 to 900 GSM",
      "Ring-spun, Zero-twist & Combed Cotton options",
      "Woven Dobby, Jacquard & Ribbed borders",
      "Hospitality & Luxury Retail Collections",
    ],
    productCategories: [
      "Bath Towels",
      "Hand Towels",
      "Face Towels",
      "Bath Mats",
      "Bathrobes",
      "Hotel Towels",
      "Jacquard Towels",
      "Hospitality Collections",
    ],
  },
  {
    id: "home-textile",
    title: "Home Textile",
    tagline: "Textiles for Modern Living.",
    description: "Versatile home textile collections designed around comfort, quality, texture, and contemporary living.",
    heroImage: "/assets/division-home.jpg",
    highlights: [
      "Percale, Sateen, Twill & Dobby weaves",
      "Thread counts from 200 TC to 1000 TC",
      "Fine tailored flange, marrow & piping borders",
      "Private-label packaging and custom sizes",
    ],
    productCategories: [
      "Bed Linen",
      "Duvet Covers",
      "Pillow Covers",
      "Fitted Sheets",
      "Flat Sheets",
      "Quilts",
      "Throws",
      "Cushion Covers",
    ],
  },
];

// ALL PRODUCTS FOR CATALOG & SHOWCASE
export const PRODUCTS = [
  // Bath Division
  {
    id: "bath-luxury-towels",
    division: "bath-division",
    divisionName: "Bath Division",
    name: "Luxury Combed Towels",
    category: "Bath Towels",
    description: "Heavyweight combed cotton towels offering plush density, rapid moisture absorbency, and a refined geometric dobby border.",
    specs: {
      material: "100% Long-Staple Combed Cotton",
      gsm: "550 - 700 GSM (Customizable)",
      sizes: "Bath Sheet (100x150cm), Bath Towel (70x140cm)",
      finishing: "Pre-shrunk, soft-tumbled, double-needle hem",
    },
    image: "/assets/product-luxury-towels.jpg",
    isFeatured: true,
  },
  {
    id: "bath-hotel-towels",
    division: "bath-division",
    divisionName: "Bath Division",
    name: "5-Star Hotel Towel Collection",
    category: "Hotel Towels",
    description: "Engineered specifically for commercial laundry durability, brilliant optical whiteness, and velvety skin touch.",
    specs: {
      material: "100% Ring-Spun Cotton, 20/2 yarn pile",
      gsm: "600 - 750 GSM",
      sizes: "Full hospitality suite (Face, Hand, Bath, Sheet)",
      finishing: "Chlorine-resistant dyeing, reinforced lock-stitch side hems",
    },
    image: "/assets/product-hotel-towels.jpg",
    isFeatured: true,
  },
  {
    id: "bath-bathrobes",
    division: "bath-division",
    divisionName: "Bath Division",
    name: "Executive Shawl & Waffle Bathrobes",
    category: "Bathrobes",
    description: "Sumptuous velour shawl collar robes and breathable lightweight honeycomb waffle robes tailored for resorts and luxury homes.",
    specs: {
      material: "Pure Cotton Velour / Honeycomb Waffle Weave",
      gsm: "380 - 450 GSM",
      sizes: "S, M, L, XL, XXL (Custom unisex sizing)",
      finishing: "Dual patch pockets, reinforced belt loops, custom embroidery",
    },
    image: "/assets/product-bathrobes.jpg",
    isFeatured: true,
  },
  {
    id: "bath-mats",
    division: "bath-division",
    divisionName: "Bath Division",
    name: "Heavy-Gauge Woven Bath Mats",
    category: "Bath Mats",
    description: "Dense, floor-hugging cotton bath mats designed with deep framing and rapid water-wicking properties.",
    specs: {
      material: "100% High-Density Low-Twist Cotton",
      gsm: "800 - 1000 GSM",
      sizes: "50x80cm, 60x100cm (Custom dimensions available)",
      finishing: "Embossed border, quick-dry finishing, anti-skid base option",
    },
    image: "/assets/product-bath-mats.jpg",
    isFeatured: true,
  },
  {
    id: "bath-jacquard-towels",
    division: "bath-division",
    divisionName: "Bath Division",
    name: "Signature Jacquard Towels",
    category: "Jacquard Towels",
    description: "Intricately woven geometric and textured patterns that bring tactile luxury and visual dimension to private label collections.",
    specs: {
      material: "Yarn-dyed 100% combed cotton",
      gsm: "550 - 650 GSM",
      sizes: "Hand & Bath sizes",
      finishing: "Yarn-dyed contrast motifs, soft-touch shearing",
    },
    image: "/assets/product-jacquard-towels.jpg",
    isFeatured: false,
  },
  {
    id: "bath-hospitality-sets",
    division: "bath-division",
    divisionName: "Bath Division",
    name: "Coordinated Hospitality Suite",
    category: "Hospitality Sets",
    description: "Complete bundled bathroom ensembles matching bath sheets, hand towels, washcloths, and bath mats in uniform dye lots.",
    specs: {
      material: "Selected hotel-spec long-staple cotton",
      gsm: "600 GSM towels / 900 GSM mats",
      sizes: "Standard International 4-piece & 6-piece bundles",
      finishing: "High-temperature wash durable, shrink-controlled",
    },
    image: "/assets/division-bath.jpg",
    isFeatured: false,
  },

  // Home Textile Division
  {
    id: "home-bed-linen",
    division: "home-textile",
    divisionName: "Home Textile",
    name: "Premium Sateen Bed Linen",
    category: "Bed Linen",
    description: "Silky, breathable Egyptian cotton sateen sheets and pillowcases woven with a luminous drape and durable smoothness.",
    specs: {
      material: "100% Long-Staple Cotton, Single-Ply Yarns",
      threadCount: "300 TC - 600 TC Sateen Weave",
      sizes: "Single, Double, Queen, King, Super King, Custom",
      finishing: "Mercerized finish, deep-pocket fitted elastication",
    },
    image: "/assets/product-bed-linen.jpg",
    isFeatured: true,
  },
  {
    id: "home-duvet-covers",
    division: "home-textile",
    divisionName: "Home Textile",
    name: "Architectural Duvet Sets",
    category: "Duvet Covers",
    description: "Clean, modern duvet covers and coordinating shams designed with concealed button closures and internal corner ties.",
    specs: {
      material: "Crisp Cotton Percale or Lustrous Sateen",
      threadCount: "250 TC - 400 TC",
      sizes: "Twin, Full, Queen, King, Cal King",
      finishing: "Concealed mother-of-pearl buttons or hidden zippers",
    },
    image: "/assets/product-duvet-covers.jpg",
    isFeatured: true,
  },
  {
    id: "home-quilts-throws",
    division: "home-textile",
    divisionName: "Home Textile",
    name: "Textured Cotton Throws & Quilts",
    category: "Quilts & Throws",
    description: "Layered waffle, herringbone, and matelassé weaves crafted for year-round warmth, relaxed drape, and textural contrast.",
    specs: {
      material: "Pre-washed breathable natural cotton yarns",
      gsm: "350 - 450 GSM",
      sizes: "130x170cm, 150x200cm, 220x240cm",
      finishing: "Garment-washed softness, clean eyelash fringe or tailored hems",
    },
    image: "/assets/product-quilts-throws.jpg",
    isFeatured: true,
  },
  {
    id: "home-cushion-covers",
    division: "home-textile",
    divisionName: "Home Textile",
    name: "Accent Cushion Covers",
    category: "Cushion Covers",
    description: "Tailored decorative cushion casings in linen-cotton blends, textured twills, and rich midnight navy & teal hues.",
    specs: {
      material: "Cotton-Linen and yarn-dyed jacquard blends",
      sizes: "45x45cm, 50x50cm, 40x60cm lumbar",
      finishing: "Concealed YKK zippers, overlocked interior seams",
    },
    image: "/assets/product-cushion-covers.jpg",
    isFeatured: false,
  },
];

// FEATURED EDITORIAL COLLECTIONS
export const FEATURED_COLLECTIONS = [
  {
    title: "Essential Bath Collection",
    subtitle: "Everyday Indulgence",
    description: "A balanced harmony of plush density, fast-drying capillary loops, and timeless understated borders for premium retail markets.",
    image: "/assets/product-luxury-towels.jpg",
    division: "Bath Division",
    tag: "Retail Core",
  },
  {
    title: "Signature Home Collection",
    subtitle: "Serene Sophistication",
    description: "Silky high-thread-count bed linen and matching quilt layers engineered in harmonious coastal navy and crisp alabaster tones.",
    image: "/assets/division-home.jpg",
    division: "Home Textile",
    tag: "Luxury Living",
  },
  {
    title: "Hospitality Collection",
    subtitle: "Enduring Elegance",
    description: "Formulated for 5-star hotel requirements, institutional wash longevity, chlorine resistance, and enduring tactile softness.",
    image: "/assets/collection-hospitality.jpg",
    division: "Bath & Home",
    tag: "Hospitality Grade",
  },
  {
    title: "Contemporary Living Collection",
    subtitle: "Tactile Texture & Warmth",
    description: "Modern waffle weaves, stonewashed organic cotton duvet sets, and relaxed layered throws designed for contemporary spaces.",
    image: "/assets/product-quilts-throws.jpg",
    division: "Home Textile",
    tag: "Design Focused",
  },
];

// CORPORATE PROFILE DATA
export const PROFILE_DATA = {
  vision: "To build a trusted textile brand recognized for quality, innovation, and dependable partnerships.",
  mission: "To deliver thoughtfully manufactured textile products through consistent quality, responsible processes, and customer-focused solutions.",
  values: [
    {
      title: "Quality",
      description: "Unwavering commitment to material purity, weave precision, and stringent testing at every milestone.",
    },
    {
      title: "Integrity",
      description: "Transparent communication, truthful lead times, and steadfast adherence to international business ethics.",
    },
    {
      title: "Reliability",
      description: "Dependable supply chain management, on-time order execution, and consistent batch-to-batch color continuity.",
    },
    {
      title: "Innovation",
      description: "Continuous adoption of modern loom technology, energy-efficient dyeing systems, and smart finishing techniques.",
    },
    {
      title: "Partnership",
      description: "Collaborative product development working as an aligned manufacturing extension of our clients' brands.",
    },
    {
      title: "Responsibility",
      description: "Mindful resource utilization, water stewardship, safe working environments, and progressive sustainability.",
    },
  ],
  qaTimeline: [
    {
      step: "01",
      name: "Material Selection",
      desc: "Strict screening of incoming yarn lots for staple length, micronaire, count deviation, and contamination.",
    },
    {
      step: "02",
      name: "Production Monitoring",
      desc: "In-line warp tension sensors, automated weft scanners, and real-time loom speed surveillance.",
    },
    {
      step: "03",
      name: "Intermediate Inspection",
      desc: "Greige fabric inspection for slubs, pick variations, and mechanical flaws prior to wet processing.",
    },
    {
      step: "04",
      name: "Finishing Quality",
      desc: "Spectrophotometer color-matching to within Delta E < 0.5 tolerances and chemical softener calibration.",
    },
    {
      step: "05",
      name: "Final Quality Check",
      desc: "Comprehensive 100% lighted inspection table review, stitch count audit, and dimensional verification.",
    },
    {
      step: "06",
      name: "Packing & Barcoding",
      desc: "Clean-room folding, metal detection scanning, client barcode scanning, and moisture-controlled cartoning.",
    },
  ],
};
