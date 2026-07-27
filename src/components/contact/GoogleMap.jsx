export default function GoogleMap() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#F8F7F3] to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full border border-[#C9A227]/30 bg-[#C9A227]/10 px-5 py-2 text-sm font-semibold tracking-wide text-[#C9A227]">
            📍 Our Location
          </span>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-[30px] border border-[#E5E7EB] bg-white shadow-xl hover:shadow-2xl transition-all duration-500">
          <iframe
            src="https://www.google.com/maps?q=D-25,+Sudarshanpura+Industrial+Area,+22+Godam,+Jaipur,+Rajasthan&output=embed"
            width="100%"
            height="380"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title="JSK Packaging Location"
          />
        </div>

      </div>
    </section>
  );
}