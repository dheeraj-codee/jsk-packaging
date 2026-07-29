import Link from "next/link";
import {
  ShieldCheck,
  ClipboardList,
  SlidersHorizontal,
  Share2,
  Lock,
  Timer,
  Cookie,
  Puzzle,
  UserCheck,
  Baby,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy | JSK Packaging",
  description:
    "Learn how JSK Packaging collects, uses, stores and protects the personal information you share with us through our website and services.",
  alternates: {
    canonical: "https://www.jskpackaging.in/privacy-policy",
  },
};

const LAST_UPDATED = "July 2026";

const sections = [
  {
    id: "introduction",
    icon: ShieldCheck,
    title: "Introduction",
    paragraphs: [
      "JSK Packaging (“we”, “us” or “our”) respects your privacy and is committed to protecting the personal information you share with us through our website and services.",
      "This Privacy Policy explains what information we collect, how we use and protect it, and the choices available to you. By using our website or contacting us, you consent to the practices described in this policy.",
    ],
  },
  {
    id: "information-we-collect",
    icon: ClipboardList,
    title: "Information We Collect",
    paragraphs: [
      "We only collect information that helps us respond to your enquiries and serve you better. This may include:",
    ],
    bullets: [
      "Your name and company or business name",
      "Contact details such as phone number and email address",
      "Packaging requirements and project specifications",
      "Any details you submit through enquiry or quote-request forms",
      "Basic technical data such as browser type and usage patterns",
    ],
  },
  {
    id: "how-we-use",
    icon: SlidersHorizontal,
    title: "How We Use Your Information",
    paragraphs: ["We use the information we collect to:"],
    bullets: [
      "Respond to enquiries and prepare quotations",
      "Provide packaging consultation, samples and support",
      "Process, produce and deliver your orders",
      "Communicate project updates and important information",
      "Improve our products, services and website experience",
      "Comply with applicable legal and regulatory requirements",
    ],
  },
  {
    id: "information-sharing",
    icon: Share2,
    title: "Information Sharing & Disclosure",
    paragraphs: [
      "We do not sell, rent or trade your personal information. We may share limited information only with trusted partners — such as printing, logistics or payment providers — strictly to fulfil your order, or where required by law.",
      "Any such partners are expected to handle your information securely and only for the purpose for which it was shared.",
    ],
  },
  {
    id: "data-protection",
    icon: Lock,
    title: "Data Protection & Security",
    paragraphs: [
      "We implement reasonable technical and organizational measures to safeguard your information against unauthorized access, misuse, disclosure or alteration.",
      "However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    id: "data-retention",
    icon: Timer,
    title: "Data Retention",
    paragraphs: [
      "We retain your personal information only for as long as necessary to fulfil the purposes described in this policy, to maintain our business records, and to comply with legal obligations. When it is no longer required, we take reasonable steps to delete or anonymize it.",
    ],
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies & Tracking Technologies",
    paragraphs: [
      "Our website may use cookies and similar technologies to improve user experience, remember preferences, and analyze website performance. You can control or disable cookies through your browser settings, though some features of the website may not function as intended.",
    ],
  },
  {
    id: "third-party",
    icon: Puzzle,
    title: "Third-Party Services",
    paragraphs: [
      "Our website may use third-party services such as Google Maps, analytics tools or communication platforms. These services may collect information in accordance with their own privacy policies, over which we have no control. We encourage you to review the privacy policies of any third-party services you interact with.",
    ],
  },
  {
    id: "your-rights",
    icon: UserCheck,
    title: "Your Rights & Choices",
    paragraphs: ["Subject to applicable law, you have the right to:"],
    bullets: [
      "Request access to the personal information we hold about you",
      "Ask us to correct inaccurate or incomplete information",
      "Request deletion of your personal information",
      "Withdraw consent or opt out of marketing communications",
    ],
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    title: "Children's Privacy",
    paragraphs: [
      "Our website and services are intended for businesses and adults. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.",
    ],
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Policy",
    paragraphs: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates take effect once published on this page, and we encourage you to review it periodically.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
            <span className="text-white/80">Privacy Policy</span>
          </nav>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[#E9CE7A] text-sm font-medium">
            <ShieldCheck size={15} />
            Legal Information
          </span>

          <h1 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-md text-white/70 leading-relaxed">
            Your privacy matters to us. This policy explains how JSK Packaging
            collects, uses and protects the personal information you share
            with us.
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
              <p className="text-[#475569] leading-8">
                This Privacy Policy applies to all information collected through
                the JSK Packaging website and any related communications,
                enquiries or services. Please read it carefully to understand
                how we handle your data.
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
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p className="mt-3 text-white/70 leading-8 max-w-2xl">
                If you have any questions about this Privacy Policy, or would
                like to access, correct or delete your personal information,
                please reach out to us through any of the channels below.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                <a
                  href="mailto:jskpackaging22@gmail.com"
                  className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
                >
                  <Mail className="text-[#E9CE7A] shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-white/50">Email</p>
                    <p className="text-sm font-medium break-all">
                      jskpackaging22@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+919314235578"
                  className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4 hover:bg-white/10 transition"
                >
                  <Phone className="text-[#E9CE7A] shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-white/50">Phone</p>
                    <p className="text-sm font-medium">+91 93142 35578</p>
                  </div>
                </a>

                <div className="flex items-start gap-3 rounded-xl bg-white/5 border border-white/10 p-4">
                  <MapPin className="text-[#E9CE7A] shrink-0" size={20} />
                  <div>
                    <p className="text-xs text-white/50">Address</p>
                    <p className="text-sm font-medium leading-relaxed">
                      D-25, Sudarshanpura Industrial Area, 22 Godam, Jaipur,
                      Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
