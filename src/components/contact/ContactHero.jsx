export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F7F3] py-30">
      
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C9A227]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C9A227]/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 text-center">

        <span className="inline-flex items-center px-5 py-2 rounded-full bg-[#C9A227]/10 text-[#C9A227] font-semibold">
          Premium Packaging Solutions
        </span>

        <h1 className="mt-8 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B] leading-tight">
          Let's Create Packaging
          <br />
          That Sells Your Brand
        </h1>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-[#64748B] leading-relaxed">
          From luxury rigid boxes and mono cartons to labels and
          fully customized packaging, our experts are ready to help
          bring your vision to life.
        </p>

      </div>
    </section>
  );
}