import {
  MessageSquare,
  PencilRuler,
  Factory,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function ManufacturingProcess() {
  const steps = [
    {
      icon: MessageSquare,
      title: "Consultation",
      desc: "Understanding your packaging requirements and business goals.",
    },
    {
      icon: PencilRuler,
      title: "Design & Sampling",
      desc: "Creating packaging concepts and sample approvals.",
    },
    {
      icon: Factory,
      title: "Production",
      desc: "Manufacturing with premium materials and advanced machinery.",
    },
    {
      icon: ShieldCheck,
      title: "Quality Check",
      desc: "Every product passes strict quality inspection standards.",
    },
    {
      icon: Truck,
      title: "Delivery",
      desc: "Safe packaging and timely delivery across India.",
    },
  ];

  return (
    <section className="py-24 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-white text-[#C9A227] font-medium">
            Our Process
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-[#1E293B]">
            From Concept To
            <span className="text-[#C9A227]"> Final Delivery</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B]">
            A streamlined process designed to deliver premium packaging
            solutions with consistency, quality and speed.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 border border-[#E5E7EB] hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute top-5 right-5 text-5xl font-bold text-[#C9A227]/10">
                {index + 1}
              </div>

              <div className="w-16 h-16 rounded-2xl bg-[#F8F7F3] flex items-center justify-center">
                <step.icon
                  size={30}
                  className="text-[#C9A227]"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#1E293B]">
                {step.title}
              </h3>

              <p className="mt-4 text-[#64748B] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}