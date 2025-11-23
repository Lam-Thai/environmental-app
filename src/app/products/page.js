import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const products = [
  {
    id: 1,
    name: "cup",
    price: "$ 20",
    description: "reusable, fabric, etc",
    image: "🥤",
  },
  {
    id: 2,
    name: "Recycled vase",
    price: "$ 32",
    description: "Bronze, greens, etc",
    image: "🏺",
  },
  {
    id: 3,
    name: "Recycle slippers",
    price: "$ 10",
    description: "Fabric, rubber, etc",
    image: "👡",
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Green Products" />

      <main className="p-4 max-w-md mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-40 bg-gray-100 flex items-center justify-center">
                <span className="text-5xl">{product.image}</span>
              </div>
              <div className="p-3">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-green-600 font-bold text-lg my-1">
                  {product.price}
                </p>
                <p className="text-xs text-gray-500 mb-2">
                  {product.description}
                </p>
                <button className="w-full bg-black text-white py-2 rounded text-sm hover:bg-gray-800">
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
