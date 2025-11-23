import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "cup",
    price: 20,
    description: "rubber, fabric, etc",
    quantity: 1,
  },
  {
    id: 2,
    name: "Recycled vase",
    price: 32,
    description: "Bronze, greens, etc",
    quantity: 1,
  },
  {
    id: 3,
    name: "Cup",
    price: 10,
    description: "Fabric, rubber, etc",
    quantity: 1,
  },
];

export default function Cart() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Cart" />

      <main className="p-4 max-w-md mx-auto">
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
            >
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-3xl">🛍️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-xs text-gray-500">{item.description}</p>
                <p className="text-green-600 font-bold">${item.price}</p>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gray-800">
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between font-bold text-lg">
            <span>Total:</span>
            <span className="text-green-600">${total}</span>
          </div>
        </div>

        <Link href="/cart-form">
          <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
            💳 Checkout
          </button>
        </Link>
      </main>

      <Navigation />
    </div>
  );
}
