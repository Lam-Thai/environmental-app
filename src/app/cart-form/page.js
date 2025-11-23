"use client";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function Checkout() {
  const [sameAsShipping, setSameAsShipping] = useState(true);

  // You can pass cart total from cart page via query params or state management
  const total = 62; // Example total from cart

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-green-500 p-4 flex items-center gap-3 sticky top-0 z-40">
        <Link href="/cart">
          <button className="text-white text-2xl">←</button>
        </Link>
        <h1 className="text-white text-lg font-bold flex-1 text-center">
          Checkout
        </h1>
        <div className="w-8"></div>
      </div>

      <main className="p-6 max-w-md mx-auto">
        <form className="space-y-6">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Contact Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Shipping Address
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Street Address *
                </label>
                <input
                  type="text"
                  placeholder="123 Main Street"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Apartment, suite, etc. (optional)
                </label>
                <input
                  type="text"
                  placeholder="Apt 4B"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    placeholder="Vancouver"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Province *
                  </label>
                  <input
                    type="text"
                    placeholder="BC"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Postal Code *
                </label>
                <input
                  type="text"
                  placeholder="V6B 1A1"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Billing Address */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">
                Billing Address
              </h3>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <input
                type="checkbox"
                id="sameAsShipping"
                checked={sameAsShipping}
                onChange={(e) => setSameAsShipping(e.target.checked)}
                className="w-4 h-4 text-green-600 rounded focus:ring-green-500"
              />
              <label htmlFor="sameAsShipping" className="text-sm text-gray-700">
                Same as shipping address
              </label>
            </div>

            {!sameAsShipping && (
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    placeholder="456 Oak Avenue"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      City *
                    </label>
                    <input
                      type="text"
                      placeholder="Burnaby"
                      required
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Postal Code *
                    </label>
                    <input
                      type="text"
                      placeholder="V5H 2K2"
                      required
                      className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Payment Information */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Payment Information
            </h3>
            <div className="space-y-3">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Card Holder Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Card Number *
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  required
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Expiry Date *
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    CVV *
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    required
                    className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Order Summary
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Tax (12%)</span>
                <span>${((total + 5) * 0.12).toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span className="text-green-600">
                    ${((total + 5) * 1.12).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors"
          >
            Complete Purchase
          </button>
        </form>

        {/* Security Notice */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <p className="text-xs text-gray-600 text-center">
            🔒 Your payment information is secure and encrypted
          </p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
