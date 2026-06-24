import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "JSK Packaging | Premium Packaging Solutions",
  description:
    "JSK Packaging provides premium rigid boxes, mono cartons, labels, jewellery boxes, gift boxes and custom packaging solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-[#334155]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}