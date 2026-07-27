

export const products = [
  {
    slug: "rigid-boxes",
    title: "Premium Rigid Boxes",
    category: "Luxury Packaging",
    description:
      "High-quality rigid boxes that offer premium protection and elegant presentation for your valuable products.",
    gallery: [
      "/images/rigid/1.png",
      "/images/rigid/2.png",
      "/images/rigid/3.png",
      "/images/rigid/4.png",
    ],
    specs: [
      { label: "Material", value: "Premium Rigid Board" },
      { label: "Box Type", value: "Rigid Box with Lid" },
      { label: "Size Options", value: "Customizable" },
      { label: "Printing", value: "Available (Custom)" },
      { label: "Finishing", value: "Matte / Glossy / UV" },
      { label: "Usage", value: "Gifting, Packaging, Branding" },
    ],
  },
  {
    slug: "mono-cartons",
    title: "Mono Carton Boxes",
    category: "Retail Packaging",
    description:
      "Lightweight folding mono cartons ideal for retail, FMCG and pharma products with crisp custom printing.",
    gallery: [
      "/images/mono/5.png",
      "/images/mono/6.png",
      "/images/mono/7.png",
      "/images/mono/8.png",
    ],
    specs: [
      { label: "Material", value: "Duplex / Kraft Board" },
      { label: "Box Type", value: "Folding Mono Carton" },
      { label: "Size Options", value: "Customizable" },
      { label: "Printing", value: "Offset & Digital" },
      { label: "Finishing", value: "Matte / Gloss Lamination" },
      { label: "Usage", value: "Retail, FMCG, Pharma" },
    ],
  },
  {
    slug: "labels",
    title: "Product Labels",
    category: "Branding Labels",
    description:
      "Custom die-cut adhesive labels that strengthen brand identity across bottles, jars and product packaging.",
    gallery: [
      "/images/lb1.jpg",
      "/images/lb2.webp",
      "/images/lb3.jpg",
      "/images/lb4.jpg",
    ],
    specs: [
      { label: "Material", value: "Art Paper / Vinyl" },
      { label: "Type", value: "Adhesive Labels" },
      { label: "Size Options", value: "Custom Die-Cut" },
      { label: "Printing", value: "Full Colour Custom" },
      { label: "Finishing", value: "Matte / Gloss / Foil" },
      { label: "Usage", value: "Branding, Bottles, Products" },
    ],
  },
  {
    slug: "jewellery-boxes",
    title: "Jewellery Boxes",
    category: "Premium Packaging",
    description:
      "Elegant velvet-lined jewellery boxes designed to present rings, necklaces and sets in a luxurious way.",
    gallery: [
      "/images/jewellery/9.png",
      "/images/jewellery/10.png",
      "/images/jewellery/11.png",
      "/images/jewellery/12.png",
    ],
    specs: [
      { label: "Material", value: "Rigid Board + Velvet" },
      { label: "Box Type", value: "Lid & Base / Flap" },
      { label: "Size Options", value: "Ring / Necklace / Set" },
      { label: "Printing", value: "Foil & Embossing" },
      { label: "Finishing", value: "Velvet / Matte / Satin" },
      { label: "Usage", value: "Jewellery, Gifting" },
    ],
  },
  {
    slug: "gift-boxes",
    title: "Gift Boxes",
    category: "Luxury Packaging",
    description:
      "Premium magnetic and lid gift boxes that turn everyday products into a memorable unboxing experience.",
    gallery: [
      "/images/gift/13.png",
      "/images/gift/14.png",
      "/images/gift/15.png",
      "/images/gift/16.png",
    ],
    specs: [
      { label: "Material", value: "Premium Rigid Board" },
      { label: "Box Type", value: "Magnetic / Lid Box" },
      { label: "Size Options", value: "Customizable" },
      { label: "Printing", value: "Available (Custom)" },
      { label: "Finishing", value: "Matte / Glossy / UV" },
      { label: "Usage", value: "Gifting, Hampers, Events" },
    ],
  },
  {
    slug: "sweet-boxes",
    title: "Sweet Boxes",
    category: "Food Packaging",
    description:
      "Food-grade sweet boxes with compartments and windows, perfect for sweets, bakery items and dry fruits.",
    gallery: [
      "/images/sweet/17.png",
      "/images/sweet/18.png",
      "/images/sweet/19.png",
      "/images/sweet/20.png",
    ],
    specs: [
      { label: "Material", value: "Food-Grade Board" },
      { label: "Box Type", value: "Compartment / Window" },
      { label: "Size Options", value: "250g / 500g / 1kg" },
      { label: "Printing", value: "Custom Branding" },
      { label: "Finishing", value: "Matte / Gloss / Foil" },
      { label: "Usage", value: "Sweets, Bakery, Dry Fruits" },
    ],
  },
  {
    slug: "window-boxes",
    title: "Window Boxes",
    category: "Display Packaging",
    description:
      "Attractive PVC window boxes that showcase the product inside while keeping it protected on the shelf.",
    gallery: [
      "/images/wn2.jpg",
      "/images/wn3.jpg",
      "/images/wn4.webp",
    ],
    specs: [
      { label: "Material", value: "Kraft / Rigid Board" },
      { label: "Box Type", value: "PVC Window Box" },
      { label: "Size Options", value: "Customizable" },
      { label: "Printing", value: "Available (Custom)" },
      { label: "Finishing", value: "Matte / Gloss Lamination" },
      { label: "Usage", value: "Retail Display, Gifting" },
    ],
  },
  {
    slug: "luxury-packaging",
    title: "Luxury Packaging",
    category: "Signature Range",
    description:
      "Bespoke luxury packaging with premium finishes crafted to elevate high-end brands and signature products.",
    gallery: [
      "/images/luxury/21.png",
      "/images/luxury/22.png",
      "/images/luxury/23.png",
      "/images/luxury/24.png",


    ],
    specs: [
      { label: "Material", value: "Premium Rigid Board" },
      { label: "Box Type", value: "Custom Luxury Box" },
      { label: "Size Options", value: "Bespoke" },
      { label: "Printing", value: "Foil / Emboss / Custom" },
      { label: "Finishing", value: "Soft-Touch / UV / Foil" },
      { label: "Usage", value: "Premium Brands, Gifting" },
    ],
  },
];

export function getProduct(slug) {
  return products.find((p) => p.slug === slug);
}
