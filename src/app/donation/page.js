import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const organizations = [
  {
    id: 1,
    name: "WEO",
    fullName: "World Environmental Organization",
    description:
      "Global group actively empowering environment initiatives, climate change, and sustainability.",
    logo: "🌍",
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "CEC",
    fullName: "Community Environmental Council",
    description:
      "Supporting local sustainability, environmental education and renewable initiatives in communities.",
    logo: "🌱",
    color: "from-green-400 to-emerald-600",
  },
  {
    id: 3,
    name: "OCF",
    fullName: "Ocean Conservation Foundation",
    description:
      "Promoting marine sustainability, ocean protection and renewable initiatives for our waters.",
    logo: "♻️",
    color: "from-teal-400 to-cyan-600",
  },
];

export default function Donation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Donation" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Support Our Cause
          </h1>
          <p className="text-gray-600">
            Your donation helps protect the environment
          </p>
        </div>

        <div className="space-y-6">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div
                className={`h-32 bg-gradient-to-r ${org.color} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-7xl drop-shadow-2xl">{org.logo}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex-1">
                    <h3 className="font-bold text-2xl text-gray-900">
                      {org.name}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {org.fullName}
                    </p>
                  </div>
                  <Link href="/donation-form">
                    <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-6 py-2.5 rounded-full hover:from-emerald-600 hover:to-green-700 font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 text-sm">
                      Donate
                    </button>
                  </Link>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {org.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="mt-8 bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-2xl border-2 border-emerald-200">
          <div className="flex items-start gap-3">
            <div className="bg-emerald-500 p-2 rounded-lg flex-shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-emerald-800 mb-2">
                Tax Deductible
              </h4>
              <p className="text-sm text-emerald-700">
                All donations are tax-deductible. You&apos;ll receive a receipt for
                your contribution via email.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
