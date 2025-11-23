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
  },
  {
    id: 2,
    name: "Community Clean-Up",
    date: "Nov 25-30, 10:00 AM - 4:00 PM",
    description:
      "Volunteer to keep your parks, beaches and neighborhood forest areas. Good for people at all.",
    status: "register",
  },
];

export default function Groups() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Groups" />

      <main className="p-4 max-w-md mx-auto">
        <div className="space-y-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div className="h-32 bg-gray-200 flex items-center justify-center">
                <span className="text-4xl">🌲</span>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg">{group.name}</h3>
                  <button className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-800">
                    {group.status}
                  </button>
                </div>
                <p className="text-xs text-gray-500 mb-2">{group.date}</p>
                <p className="text-sm text-gray-600">{group.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
