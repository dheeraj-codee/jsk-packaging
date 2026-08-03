import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import ScrollToTop from "@/components/layout/ScrollToTop";
import JsonLd from "@/components/JsonLd";

export const metadata = {
  metadataBase: new URL("https://jskpackaging.in"),
  title: {
    default: "JSK Packaging | Premium Rigid Boxes Manufacturer in Jaipur",
    template: "%s | JSK Packaging",
  },
  description:
    "JSK Packaging is a Jaipur-based manufacturer of premium rigid boxes, mono cartons, jewellery boxes, gift boxes, sweet boxes, labels and luxury packaging solutions.",
  keywords: [
    "rigid boxes manufacturer Jaipur",
    "packaging boxes Jaipur",
    "mono carton manufacturer",
    "jewellery box manufacturer Jaipur",
    "custom gift boxes India",
    "luxury packaging Jaipur",
  ],
  authors: [{ name: "JSK Packaging" }],
  creator: "JSK Packaging",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jskpackaging.in",
    siteName: "JSK Packaging",
    title: "JSK Packaging | Premium Rigid Boxes Manufacturer in Jaipur",
    description:
      "Premium rigid boxes, mono cartons, jewellery boxes, gift boxes, sweet boxes, labels and luxury packaging — manufactured in Jaipur, Rajasthan.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "JSK Packaging - Premium Packaging Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "JSK Packaging | Premium Rigid Boxes Manufacturer in Jaipur",
    description:
      "Premium rigid boxes, mono cartons, jewellery boxes, gift boxes and luxury packaging — manufactured in Jaipur, Rajasthan.",
    images: ["/opengraph-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "PASTE_YOUR_GSC_VERIFICATION_CODE_HERE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#334155]">
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}