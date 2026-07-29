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
    <section className="py-16 bg-[#F8F7F3]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-white text-sm text-[#C9A227] font-medium">
            Our Process
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            From Concept To
            <span className="text-[#C9A227]"> Final Delivery</span>
          </h2>

          <p className="mt-6 text-md text-[#64748B]">
            A streamlined process designed to deliver premium packaging
            solutions with consistency, quality and speed.
          </p>
        </div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:mx-0 md:px-0 md:pb-0 lg:grid-cols-5 mt-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group min-w-[80%] snap-center md:min-w-0 bg-white rounded-3xl p-8 border border-[#E5E7EB] shadow-md shadow-black/5 text-center flex flex-col items-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-[#C9A227]/40"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#F8F7F3] flex items-center justify-center transition-all duration-500 group-hover:bg-[#C9A227] group-hover:scale-110">
                <step.icon
                  size={30}
                  className="text-[#C9A227] transition-colors duration-500 group-hover:text-white"
                />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#1E293B]">
                {step.title}
              </h3>

              <p className="mt-4 text-sm text-[#64748B] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}