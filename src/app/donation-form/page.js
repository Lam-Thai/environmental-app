"use client";
import { useState } from "react";
import Link from "next/link";
import Navigation from "@/components/Navigation";

const organizations = {
  1: { name: "WEO", logo: "🌍" },
  2: { name: "Community Environmental Council", logo: "🌱" },
  3: { name: "CEC", logo: "♻️" },
};

export default function DonationForm({ params }) {
  const { id } = params;
  const org = organizations[id] || organizations[1];
  const [amount, setAmount] = useState("");

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-green-500 p-4 flex items-center gap-3 sticky top-0 z-40">
        <Link href="/donation">
          <button className="text-white text-2xl">←</button>
        </Link>
        <h1 className="text-white text-lg font-bold flex-1 text-center">
          Donation Form
        </h1>
        <div className="w-8"></div>
      </div>

      <main className="p-6 max-w-md mx-auto">
        {/* Organization Info */}
        <div className="text-center mb-6">
          <div className="text-6xl mb-2">{org.logo}</div>
          <h2 className="text-2xl font-bold text-gray-900">{org.name}</h2>
          <p className="text-sm text-gray-600 mt-2">
            Your donation helps us protect the environment
          </p>
        </div>

        {/* Donation Form */}
        <form className="space-y-4">
          {/* Quick Amount Selection */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Select Amount
            </label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {["10", "25", "50", "100", "250", "500"].map((value) => (
                <button
                  key={value}
                  type="button"
                  onClick={() => setAmount(value)}
                  className={`py-3 rounded-lg font-semibold transition-colors ${
                    amount === value
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ${value}
                </button>
              ))}
            </div>
          </div>

          {/* Custom Amount */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Or Enter Custom Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-3 text-gray-600 text-lg">
                $
              </span>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          {/* Personal Information */}
          <div className="pt-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Personal Information
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="(555) 123-4567"
                  className="w-full px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="pt-4">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Payment Information
            </h3>

            <div className="space-y-3">
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

          {/* Terms */}
          <div className="flex items-start gap-2 pt-4">
            <input
              type="checkbox"
              id="terms"
              required
              className="mt-1 w-4 h-4 text-green-600 rounded focus:ring-green-500"
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I agree to the terms and conditions and understand that my
              donation is non-refundable
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors mt-6"
          >
            Donate ${amount || "0.00"}
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
