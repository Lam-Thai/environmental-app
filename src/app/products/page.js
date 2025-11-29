import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const products = [
  {
    id: 1,
    name: "Reusable Cup",
    price: "20",
    description: "Eco-friendly, sustainable materials",
    image: "🥤",
    rating: 4.5,
  },
  {
    id: 2,
    name: "Recycled Vase",
    price: "32",
    description: "Handcrafted from recycled materials",
    image: "🏺",
    rating: 4.8,
  },
  {
    id: 3,
    name: "Eco Slippers",
    price: "10",
    description: "Made from natural rubber",
    image: "👡",
    rating: 4.2,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Green Products" />

      <main className="p-6 max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Eco-Friendly Products
          </h1>
          <p className="text-gray-600">
            Shop sustainable products for a greener lifestyle
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-56 bg-gradient-to-br from-emerald-100 to-green-100 flex items-center justify-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-green-400/20 group-hover:scale-110 transition-transform duration-500"></div>
                <span className="text-8xl relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {product.image}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-600 ml-1">
                    ({product.rating})
                  </span>
                </div>

                <p className="text-sm text-gray-600 mb-3">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-emerald-600">
                    ${product.price}
                  </span>
                  <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:from-emerald-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
