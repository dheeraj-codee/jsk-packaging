import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      company: "FMCG Brand Owner",
      review:
        "JSK Packaging consistently delivers high-quality packaging solutions. Their attention to detail and timely delivery make them a reliable partner.",
    },
    {
      name: "Priya Jain",
      company: "Jewellery Brand",
      review:
        "The rigid boxes and premium finishing exceeded our expectations. Our customers love the packaging experience.",
    },
    {
      name: "Amit Verma",
      company: "Corporate Gifting Company",
      review:
        "Excellent quality, competitive pricing and professional support throughout the project. Highly recommended.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-[#F8F7F3] text-sm text-[#C9A227] font-medium">
            Client Testimonials
          </span>

          <h2 className="mt-5 text-2xl md:text-3xl lg:text-4xl font-bold text-[#1E293B]">
            What Our
            <span className="text-[#C9A227]"> Clients Say</span>
          </h2>

          <p className="mt-6 text-md text-[#64748B]">
            Trusted by businesses across multiple industries for premium packaging solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#F8F7F3] rounded-3xl p-8 border border-[#E5E7EB] text-center flex flex-col items-center"
            >
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-[#C9A227] text-[#C9A227]"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-[#64748B] text-md leading-relaxed">
                "{item.review}"
              </p>

              {/* Client Info */}
              <div className="mt-6 text-center">
                <h4 className="font-semibold text-[#1E293B] text-xl">
                  {item.name}
                </h4>

                <p className="text-sm text-[#64748B] mt-1">
                  {item.company}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}