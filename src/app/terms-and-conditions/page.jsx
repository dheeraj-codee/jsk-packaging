import Link from "next/link";
import {
  FileCheck2,
  Package,
  BadgeIndianRupee,
  PenTool,
  Truck,
  CreditCard,
  RotateCcw,
  ShieldCheck,
  Copyright,
  UserCheck,
  AlertTriangle,
  CloudLightning,
  ExternalLink,
  Scale,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | JSK Packaging",
  description:
    "Read the Terms & Conditions governing the use of the JSK Packaging website and our packaging products and services.",
 alternates: {
  canonical: "https://jskpackaging.in/terms-and-conditions",
},
};

const LAST_UPDATED = "July 2026";

const sections = [
  {
    id: "acceptance",
    icon: FileCheck2,
    title: "Acceptance of Terms",
    paragraphs: [
      "By accessing, browsing or otherwise using the JSK Packaging website, or by requesting a quotation or placing an order with us, you confirm that you have read, understood and agreed to be bound by these Terms & Conditions.",
      "If you do not agree with any part of these terms, we kindly request that you discontinue use of our website and services.",
    ],
  },
  {
    id: "services",
    icon: Package,
    title: "About Our Services",
    paragraphs: [
      "JSK Packaging is a premium packaging manufacturer based in Jaipur, offering a wide range of packaging products and related services, including but not limited to:",
    ],
    bullets: [
      "Premium rigid boxes and gift boxes",
      "Mono cartons and folding boxes",
      "Product labels and branding stickers",
      "Jewellery, sweet and window packaging",
      "Bespoke and custom packaging solutions",
    ],
  },
  {
    id: "quotations",
    icon: BadgeIndianRupee,
    title: "Quotations, Pricing & Orders",
    paragraphs: [
      "All quotations provided by JSK Packaging are indicative and subject to product specifications, order quantity, material availability, and final artwork approval. Prices may vary based on customization, finishing, and current production and raw-material costs.",
      "A quotation remains valid for the period stated therein. An order is considered confirmed only upon written acceptance and, where applicable, receipt of the agreed advance payment.",
    ],
  },
  {
    id: "custom-design",
    icon: PenTool,
    title: "Custom Design & Artwork",
    paragraphs: [
      "Where an order involves custom printing or branding, the customer is responsible for providing accurate, print-ready artwork and for approving the final proof before production begins.",
      "JSK Packaging is not liable for errors in spelling, colour, dimensions or content contained in artwork approved by the customer. Slight variations in colour may occur between on-screen previews, digital proofs and the final printed product.",
    ],
  },
  {
    id: "production-delivery",
    icon: Truck,
    title: "Production, Samples & Delivery",
    paragraphs: [
      "Production timelines are estimated from the date of confirmed order and approved artwork. While we make every effort to meet agreed schedules, delivery dates are estimates and not guaranteed.",
      "Physical samples may be provided on request and may be chargeable. Risk in the goods passes to the customer upon dispatch or collection.",
    ],
  },
  {
    id: "payment",
    icon: CreditCard,
    title: "Payment Terms",
    paragraphs: [
      "Unless otherwise agreed in writing, orders are processed against an advance payment, with the balance payable prior to dispatch. All prices are exclusive of applicable taxes unless expressly stated.",
      "Custom and made-to-order products are non-cancellable once production has commenced.",
    ],
  },
  {
    id: "cancellations",
    icon: RotateCcw,
    title: "Cancellations, Returns & Refunds",
    paragraphs: [
      "As the majority of our products are manufactured to order, cancellations are only accepted before production begins. Custom-printed items cannot be returned unless they are defective or materially not as agreed.",
      "Any claim regarding defects or shortages must be raised in writing within a reasonable period of receiving the goods, along with supporting details, so that it can be assessed fairly.",
    ],
  },
  {
    id: "quality",
    icon: ShieldCheck,
    title: "Quality & Product Variations",
    paragraphs: [
      "We are committed to delivering high-quality packaging. However, being handcrafted and custom-manufactured, minor variations in shade, texture, size and finishing are inherent to the process and are not considered defects.",
    ],
  },
  {
    id: "intellectual-property",
    icon: Copyright,
    title: "Intellectual Property",
    paragraphs: [
      "All content on this website — including text, graphics, logos, images, layouts and design elements — is the property of JSK Packaging and is protected by applicable intellectual property laws. It may not be copied, reproduced or reused without prior written permission.",
      "Artwork and branding supplied by a customer remain the property of that customer, and we use it solely for the purpose of fulfilling the relevant order.",
    ],
  },
  {
    id: "user-responsibilities",
    icon: UserCheck,
    title: "User Responsibilities",
    paragraphs: [
      "By using our website, you agree not to misuse it in any way. In particular, you agree not to:",
    ],
    bullets: [
      "Submit false, misleading or unlawful information",
      "Attempt unauthorized access to our systems or data",
      "Interfere with or disrupt the website's performance",
      "Use the website for any illegal or fraudulent purpose",
    ],
  },
  {
    id: "liability",
    icon: AlertTriangle,
    title: "Limitation of Liability",
    paragraphs: [
      "To the maximum extent permitted by law, JSK Packaging shall not be liable for any indirect, incidental, special or consequential damages arising from the use of this website or reliance upon any information contained on it.",
      "Our total liability in connection with any order shall not exceed the value of that order.",
    ],
  },
  {
    id: "force-majeure",
    icon: CloudLightning,
    title: "Force Majeure",
    paragraphs: [
      "JSK Packaging shall not be held responsible for any delay or failure in performance caused by events beyond our reasonable control, including but not limited to natural disasters, strikes, transport disruptions, power or material shortages, or governmental restrictions.",
    ],
  },
  {
    id: "external-links",
    icon: ExternalLink,
    title: "Third-Party & External Links",
    paragraphs: [
      "Our website may contain links to third-party websites for your convenience. We do not control and are not responsible for the content, policies or practices of such external websites, and their inclusion does not imply endorsement.",
    ],
  },
  {
    id: "governing-law",
    icon: Scale,
    title: "Governing Law & Jurisdiction",
    paragraphs: [
      "These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with them shall be subject to the exclusive jurisdiction of the competent courts of Jaipur, Rajasthan.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to These Terms",
    paragraphs: [
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Any changes take effect once published on this page, and your continued use of the website constitutes acceptance of the revised terms.",
    ],
  },
];

export default function TermsConditionsPage() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1E293B] pt-32 pb-20">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C9A227]/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-32 -left-20 w-96 h-96 bg-[#C9A227]/10 blur-3xl rounded-full" />

        <div className="relative max-w-6xl mx-auto px-6">
          <nav className="text-sm text-white/50 mb-6">
            <Link href="/" className="hover:text-[#C9A227] transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">Terms &amp; Conditions</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#E9CE7A] text-sm font-medium">
            <Scale size={15} />
            Legal Information
          </span>

          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Terms &amp; Conditions
          </h1>

          <p className="mt-5 max-w-2xl text-md text-white/70 leading-relaxed">
            Please read these terms carefully. They govern your use of the
            JSK Packaging website and the packaging products and services we
            provide.
          </p>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-white/50">
            <RefreshCw size={14} />
            Last updated: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 lg:py-20">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14">

          {/* Table of contents */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#94A3B8]">
                On this page
              </p>
              <nav className="mt-4 flex flex-col gap-1 border-l border-[#E5E7EB]">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="-ml-px pl-4 py-1.5 text-sm text-[#64748B] border-l-2 border-transparent hover:border-[#C9A227] hover:text-[#C9A227] transition"
                  >
                    {String(i + 1).padStart(2, "0")}. {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Sections */}
          <div className="space-y-6">

            {/* Intro card */}
            <div className="rounded-2xl bg-[#F8F7F3] border border-[#EDEBE3] p-6 sm:p-8">
              <p className="text-md text-[#475569] leading-8">
                These Terms &amp; Conditions constitute a legally binding
                agreement between you (the &ldquo;customer&rdquo; or
                &ldquo;user&rdquo;) and JSK Packaging. By using our website or
                engaging our services, you acknowledge that you have read and
                accepted the terms set out below.
              </p>
            </div>

            {sections.map((section, i) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="scroll-mt-28 rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8 hover:shadow-lg hover:border-[#C9A227]/30 transition duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="h-12 w-12 shrink-0 rounded-xl bg-[#F8F7F3] flex items-center justify-center text-[#C9A227]">
                      <Icon size={22} />
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-[#C9A227]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#1E293B] leading-tight">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-5 space-y-4">
                    {section.paragraphs.map((p, idx) => (
                      <p key={idx} className="text-[#64748B] leading-8">
                        {p}
                      </p>
                    ))}

                    {section.bullets && (
                      <ul className="mt-2 space-y-2">
                        {section.bullets.map((b, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-[#64748B]"
                          >
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A227]" />
                            <span className="leading-7">{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Contact card */}
            <div className="scroll-mt-28 rounded-2xl bg-[#1E293B] text-white p-8 sm:p-10">
              <h2 className="text-2xl font-bold">
                Questions About These Terms?
              </h2>
              <p className="mt-3 text-md text-white/70 leading-8 max-w-2xl">
                If you have any questions regarding these Terms &amp;
                Conditions, please reach out to us through any of the channels
                below. Our team will be happy to assist you.
              </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
  {/* Email */}
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center text-sm text-center hover:border-[#E9CE7A]/40 transition-all duration-300">
    <Mail className="w-8 h-8 text-[#E9CE7A] mb-4" />


    <a
      href="mailto:info@jskpackaging.in"
      className=" text-gray-300 hover:text-[#E9CE7A] transition break-all"
    >
      info@jskpackaging.in
    </a>

    <a
      href="mailto:jskpackaging22@gmail.com"
      className=" text-gray-300 hover:text-[#E9CE7A] transition break-all mt-2"
    >
      jskpackaging22@gmail.com
    </a>
  </div>

  {/* Phone */}
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center  text-sm text-center hover:border-[#E9CE7A]/40 transition-all duration-300">
    <Phone className="w-8 h-8 text-[#E9CE7A] mb-4" />


    <a
      href="tel:+919314235578"
      className="text-gray-300 hover:text-[#E9CE7A] transition"
    >
      +91 93142 35578
    </a>

    <a
      href="tel:+919828411787"
      className="text-gray-300 hover:text-[#E9CE7A] transition mt-2"
    >
      +91 98284 11787
    </a>
  </div>

  {/* Address */}
  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 flex flex-col items-center text-center text-sm hover:border-[#E9CE7A]/40 transition-all duration-300">
    <MapPin className="w-8 h-8 text-[#E9CE7A] mb-4" />


    <a
      href="https://maps.google.com/?q=D-25,+Sudarshanpura+Industrial+Area,+22+Godam,+Jaipur,+Rajasthan"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-[#E9CE7A] transition leading-7"
    >
      D-25, Sudarshanpura Industrial Area,<br />
      22 Godam, Jaipur,<br />
      Rajasthan
    </a>
  </div>
</div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
