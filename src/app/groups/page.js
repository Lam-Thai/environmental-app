import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const groups = [
  {
    id: 1,
    name: "Tree Planting (Burnaby)",
    date: "Nov 23-24, 8:00 AM - Ongoing, Various locations",
    description:
      "Come and volunteer to plant trees in your neighborhood forest areas. Good for people of all ages in the Lower Mainland.",
    status: "register",
    members: 156,
  },
  {
    id: 2,
    name: "Community Clean-Up",
    date: "Nov 25-30, 10:00 AM - 4:00 PM",
    description:
      "Volunteer to keep your parks, beaches and neighborhood forest areas. Good for people at all.",
    status: "register",
    members: 89,
  },
];

export default function Groups() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Groups" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Community Groups
          </h1>
          <p className="text-gray-600">
            Join volunteer groups making a difference
          </p>
        </div>

        <div className="space-y-6">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="h-48 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl drop-shadow-2xl">🌲</span>
                </div>
                {/* Members Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-emerald-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="text-sm font-bold text-gray-900">
                      {group.members}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl text-gray-900">
                    {group.name}
                  </h3>
                  <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white text-sm px-5 py-2 rounded-full hover:from-emerald-600 hover:to-green-700 font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                    {group.status.charAt(0).toUpperCase() +
                      group.status.slice(1)}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium">{group.date}</span>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {group.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
