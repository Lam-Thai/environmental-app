import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

const newsItems = [
  {
    id: 1,
    title: "Biodiversity Leadership",
    description:
      "Canada continues work toward protecting 30% of land and water by 2030, with major conservation efforts in the North.",
    image: "/images/news-placeholder.jpg",
    tag: "Details",
  },
  {
    id: 2,
    title: "Indigenous Conservation",
    description:
      "There are major nature-protection deals in the North involving Indigenous groups, to safeguard Arctic ecosystems.",
    image: "/images/news-placeholder.jpg",
    tag: "Details",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Home / News" />

      <main className="p-4 max-w-md mx-auto">
        {/* Changed from space-y-4 to space-y-6 for more spacing */}
        <div className="space-y-6">
          {newsItems.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`}>
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                    📰
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-black">
                      {news.title}
                    </h3>
                    <span className="bg-black text-white text-xs px-2 py-1 rounded">
                      {news.tag}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{news.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
