export default function GoogleMap() {
  return (
    <section className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="mb-10 text-center">

          <span className="text-[#C9A227] font-semibold">
            Our Location
          </span>

          <h2 className="mt-3 text-5xl font-bold text-[#1E293B]">
            Find Us In Jaipur
          </h2>

        </div>

        <div className="overflow-hidden rounded-3xl border border-[#E5E7EB]">

          <iframe
            src="https://www.google.com/maps/embed?pb="
            width="100%"
            height="500"
            style={{ border: 0 }}
            loading="lazy"
          />

        </div>

      </div>
    </section>
  );
}












