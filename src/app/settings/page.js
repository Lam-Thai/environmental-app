import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const settingsOptions = [
  { id: 1, label: "Profile", icon: "👤" },
  { id: 2, label: "Privacy", icon: "🔒" },
  { id: 3, label: "Guidelines", icon: "📋" },
  { id: 4, label: "Change account", icon: "🔄" },
  { id: 5, label: "Log out", icon: "🚪", link: "/login" },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Settings" />

      <main className="p-4 max-w-md mx-auto">
        <div className="space-y-2">
          {settingsOptions.map((option) =>
            option.link ? (
              <Link key={option.id} href={option.link}>
                <button className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-left flex items-center gap-3">
                  <span className="text-xl">{option.icon}</span>
                  {option.label}
                </button>
              </Link>
            ) : (
              <button
                key={option.id}
                className="w-full bg-black text-white py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-left flex items-center gap-3"
              >
                <span className="text-xl">{option.icon}</span>
                {option.label}
              </button>
            )
          )}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
