import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const organizations = [
  {
    id: 1,
    name: "WEO",
    description:
      "Global group actively empowering environment initiatives, climate change, and sustainability.",
    logo: "🌍",
  },
  {
    id: 2,
    name: "Community Environmental Council",
    description:
      "Supporting local sustainability, environmental education and renewable initiatives in communities.",
    logo: "🌱",
  },
  {
    id: 3,
    name: "CEC",
    description:
      "Promoting local sustainability, environmental education and renewable initiatives in communities.",
    logo: "♻️",
  },
];

export default function Donation() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Donation" />

      <main className="p-4 max-w-md mx-auto">
        <div className="space-y-4">
          {organizations.map((org) => (
            <div
              key={org.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="flex items-center p-4">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center text-4xl mr-4">
                  {org.logo}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{org.name}</h3>
                    <Link href="/donation-form">
                      <button className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800">
                        Donate
                      </button>
                    </Link>
                  </div>
                  <p className="text-sm text-gray-600">{org.description}</p>
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
