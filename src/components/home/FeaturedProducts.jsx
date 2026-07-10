import { ArrowUpRight } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Premium Rigid Boxes",
      image: "/products/rigid-box.jpg",
    },
    {
      title: "Mono Carton Boxes",
      image: "/products/mono-carton.jpg",
    },
    {
      title: "Product Labels",
      image: "/products/labels.jpg",
    },
    {
      title: "Jewellery Boxes",
      image: "/products/jewellery.jpg",
    },
    {
      title: "Gift Boxes",
      image: "/products/gift-box.jpg",
    },
    {
      title: "Sweet Boxes",
      image: "/products/sweet-box.jpg",
    },
    {
      title: "Window Boxes",
      image: "/products/window-box.jpg",
    },
    {
      title: "Luxury Packaging",
      image: "/products/luxury-box.jpg",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-[#F8F7F3] text-[#C9A227] font-medium">
            Our Products
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold text-[#1E293B]">
            Explore Our Premium
            <span className="text-[#C9A227]"> Packaging Range</span>
          </h2>

          <p className="mt-6 text-lg text-[#64748B]">
            Designed to enhance product presentation and strengthen brand identity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white hover:shadow-2xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E293B]">
                  {product.title}
                </h3>

                <button className="mt-5 flex items-center gap-2 text-[#C9A227] font-medium">
                  View Details
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}