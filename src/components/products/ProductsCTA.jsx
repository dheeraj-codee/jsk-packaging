import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section className="py-24 bg-[#1E293B]">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold text-white">
          Need Custom Packaging?
        </h2>

        <p className="mt-6 text-gray-300 text-lg">
          Get tailored packaging solutions designed
          specifically for your brand and products.
        </p>

        <Link
          href="/contact"
          className="inline-block mt-8 bg-[#C9A227] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition"
        >
          Request A Quote
        </Link>

      </div>
    </section>
  );
}