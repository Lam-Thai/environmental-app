import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const settingsOptions = [
  {
    id: 1,
    label: "Profile Settings",
    icon: "👤",
    link: null,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    label: "Privacy & Security",
    icon: "🔒",
    link: null,
    color: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    label: "Community Guidelines",
    icon: "📋",
    link: null,
    color: "from-emerald-400 to-green-600",
  },
  {
    id: 4,
    label: "Switch Account",
    icon: "🔄",
    link: null,
    color: "from-orange-400 to-orange-600",
  },
  {
    id: 5,
    label: "Log Out",
    icon: "🚪",
    link: "/login",
    color: "from-red-400 to-red-600",
  },
];

export default function Settings() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Settings" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        <div className="space-y-3">
          {settingsOptions.map((option) =>
            option.link ? (
              <Link key={option.id} href={option.link}>
                <div
                  className={`bg-gradient-to-r ${option.color} p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 cursor-pointer`}
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                      <span className="text-3xl">{option.icon}</span>
                    </div>
                    <span className="text-white font-bold text-lg flex-1">
                      {option.label}
                    </span>
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ) : (
              <div
                key={option.id}
                className={`bg-gradient-to-r ${option.color} p-5 rounded-2xl shadow-md hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                    <span className="text-3xl">{option.icon}</span>
                  </div>
                  <span className="text-white font-bold text-lg flex-1">
                    {option.label}
                  </span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            )
          )}
        </div>

        {/* App Version */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>RELEAF v1.0.0</p>
          <p className="mt-1">© 2024 All rights reserved</p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
