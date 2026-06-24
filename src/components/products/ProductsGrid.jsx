import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Premium Rigid Boxes",
    image: "/products/rigid-box.jpg",
    slug: "rigid-boxes",
  },
  {
    title: "Mono Carton Boxes",
    image: "/products/mono-carton.jpg",
    slug: "mono-cartons",
  },
  {
    title: "Product Labels",
    image: "/products/labels.jpg",
    slug: "labels",
  },
  {
    title: "Jewellery Boxes",
    image: "/products/jewellery-box.jpg",
    slug: "jewellery-boxes",
  },
  {
    title: "Gift Boxes",
    image: "/products/gift-box.jpg",
    slug: "gift-boxes",
  },
  {
    title: "Sweet Boxes",
    image: "/products/sweet-box.jpg",
    slug: "sweet-boxes",
  },
];

export default function ProductsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-[28px] overflow-hidden border border-[#E5E7EB] hover:shadow-2xl transition duration-500"
            >

              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-7">

                <h3 className="text-2xl font-bold text-[#1E293B]">
                  {product.title}
                </h3>

                <p className="mt-3 text-[#64748B]">
                  Premium quality packaging solutions
                  designed to enhance your brand value.
                </p>

                <div className="mt-5 flex items-center gap-2 text-[#C9A227] font-medium">
                  View Details
                  <ArrowRight size={18} />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}