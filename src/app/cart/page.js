import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const cartItems = [
  {
    id: 1,
    name: "Reusable Cup",
    price: 20,
    description: "Eco-friendly, sustainable",
    quantity: 1,
  },
  {
    id: 2,
    name: "Recycled Vase",
    price: 32,
    description: "Handcrafted, recycled",
    quantity: 1,
  },
  {
    id: 3,
    name: "Eco Slippers",
    price: 10,
    description: "Natural rubber",
    quantity: 1,
  },
];

export default function Cart() {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Cart" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600">{cartItems.length} items in your cart</p>
        </div>

        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-4xl">🛍️</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="text-emerald-600 font-bold text-xl mt-1">
                  ${item.price}
                </p>
              </div>
              <button className="bg-red-50 text-red-600 px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-red-100 transition-colors">
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl mb-6 border-2 border-emerald-200">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-medium">Subtotal</span>
            <span className="text-gray-900 font-semibold">${total}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 font-medium">Tax (12%)</span>
            <span className="text-gray-900 font-semibold">
              ${(total * 0.12).toFixed(2)}
            </span>
          </div>
          <div className="border-t-2 border-emerald-200 my-3"></div>
          <div className="flex justify-between items-center">
            <span className="text-gray-900 font-bold text-xl">Total</span>
            <span className="text-emerald-600 font-bold text-3xl">
              ${(total * 1.12).toFixed(2)}
            </span>
          </div>
        </div>

        <Link href="/cart-form">
          <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-xl font-bold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            Proceed to Checkout
          </button>
        </Link>
      </main>

      <Navigation />
    </div>
  );
}
