export default function ContactForm() {
  return (
    <section className="py-24 bg-[#F8F7F3]">
      <div className="max-w-4xl mx-auto px-6">

        <div className="text-center mb-12">
          <span className="text-[#C9A227] font-semibold">
            Request A Quote
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B]">
            Tell Us About Your Packaging Requirement
          </h2>
        </div>

        <form className="bg-white rounded-3xl p-10 shadow-sm border border-[#E5E7EB]">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name"
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Company Name"
              className="border border-[#E5E7EB] rounded-xl px-5 py-4 outline-none"
            />

          </div>

          <input
            type="text"
            placeholder="Packaging Requirement"
            className="w-full border border-[#E5E7EB] rounded-xl px-5 py-4 mt-6 outline-none"
          />

          <textarea
            rows="6"
            placeholder="Tell us about your project..."
            className="w-full border border-[#E5E7EB] rounded-xl px-5 py-4 mt-6 outline-none"
          />

          <button
            type="submit"
            className="mt-8 bg-[#C9A227] text-white px-8 py-4 rounded-xl font-medium hover:scale-105 transition"
          >
            Request A Quote
          </button>

        </form>

      </div>
    </section>
  );
}