import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function FeaturedProducts() {
  const products = [
    {
      title: "Premium Rigid Boxes",
      image: "/images/rigid/2.png",
      slug: "rigid-boxes",
    },
    {
      title: "Mono Carton Boxes",
      image: "/images/mono/8.png",
      slug: "mono-cartons",
    },
    {
      title: "Product Labels",
      image: "/images/label/25.png",
      slug: "labels",
    },
    {
      title: "Jewellery Boxes",
      image: "/images/jewellery/10.png",
      slug: "jewellery-boxes",
    },
    {
      title: "Gift Boxes",
      image: "/images/gift/13.png",
      slug: "gift-boxes",
    },
    {
      title: "Sweet Boxes",
      image: "/images/sweet/17.png",
      slug: "sweet-boxes",
    },
    {
      title: "Window Boxes",
      image: "/images/card7.jpg",
      slug: "window-boxes",
    },
    {
      title: "Luxury Packaging",
      image: "/images/luxury/21.png",
      slug: "luxury-packaging",
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
            <Link
              key={index}
              href={`/products/${product.slug}`}
              className="group block overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-md shadow-black/5 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  quality={82}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1E293B]">
                  {product.title}
                </h3>

                <span className="mt-5 flex items-center gap-2 text-[#C9A227] font-medium">
                  View Details
                  <ArrowUpRight size={18} />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}