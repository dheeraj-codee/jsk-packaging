export default function FounderSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <img
            src="/founder.jpg"
            alt="Founder"
            className="rounded-3xl shadow-xl h-[600px] object-cover w-full"
          />

          <div>
            <span className="text-[#C9A227] font-semibold">
              Founder Message
            </span>

            <h2 className="mt-4 text-5xl font-bold text-[#1E293B]">
              Building Trust Through Quality Packaging
            </h2>

            <p className="mt-6 text-lg text-[#64748B] leading-relaxed">
              At JSK Packaging, we believe packaging is more than
              just protection. It is the first impression of a brand.
            </p>

            <p className="mt-4 text-lg text-[#64748B] leading-relaxed">
              Our mission is to provide innovative, reliable and
              premium packaging solutions that help businesses
              stand out in competitive markets.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}