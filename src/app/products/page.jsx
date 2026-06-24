import ProductsHero from "@/components/products/ProductsHero";
import ProductsGrid from "@/components/products/ProductsGrid";
import ProductsCTA from "@/components/products/ProductsCTA";

export const metadata = {
  title:
    "Premium Packaging Products | Rigid Boxes, Mono Cartons & Labels | JSK Packaging",

  description:
    "Explore JSK Packaging's premium range of rigid boxes, mono cartons, product labels, jewellery boxes, gift boxes and custom packaging solutions designed to elevate your brand.",

  keywords: [
    "Rigid Boxes",
    "Mono Carton Boxes",
    "Product Labels",
    "Jewellery Boxes",
    "Gift Boxes",
    "Sweet Boxes",
    "Custom Packaging",
    "Luxury Packaging",
    "Packaging Manufacturer Jaipur",
    "JSK Packaging",
  ],

  alternates: {
    canonical: "https://www.jskpackaging.com/products",
  },

  openGraph: {
    title:
      "Premium Packaging Products | JSK Packaging",

    description:
      "Discover luxury rigid boxes, mono cartons, labels, jewellery boxes and custom packaging solutions from JSK Packaging.",

    url: "https://www.jskpackaging.com/products",

    siteName: "JSK Packaging",

    images: [
      {
        url: "/og-products.jpg",
        width: 1200,
        height: 630,
        alt: "JSK Packaging Products",
      },
    ],

    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Premium Packaging Products | JSK Packaging",

    description:
      "Explore premium packaging solutions including rigid boxes, mono cartons, labels and custom packaging.",

    images: ["/og-products.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsGrid />
      <ProductsCTA />
    </>
  );
}