import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "@/data/products";

export default function ProductsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group bg-white rounded-[28px] overflow-hidden border border-[#E5E7EB] hover:shadow-2xl transition duration-500"
            >

              <div className="overflow-hidden">
                <img
                  src={product.gallery[0]}
                  alt={product.title}
                  className="h-48 w-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-5">

                <h3 className="text-lg font-bold text-[#1E293B]">
                  {product.title}
                </h3>

                <p className="mt-2 text-sm text-[#64748B] leading-relaxed">
                  Premium quality packaging solutions
                  designed to enhance your brand value.
                </p>

                <div className="mt-4 flex items-center gap-2 text-[#C9A227] font-medium text-sm">
                  View Details
                  <ArrowRight size={16} />
                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}