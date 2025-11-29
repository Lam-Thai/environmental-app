import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import Image from "next/image";

const newsItems = [
  {
    id: 1,
    title: "Biodiversity Leadership",
    description:
      "Canada continues work toward protecting 30% of land and water by 2030, with major conservation efforts in the North.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=400&fit=crop",
    tag: "Conservation",
    date: "Dec 15, 2024",
  },
  {
    id: 2,
    title: "Indigenous Conservation",
    description:
      "There are major nature-protection deals in the North involving Indigenous groups, to safeguard Arctic ecosystems.",
    image:
      "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&h=400&fit=crop",
    tag: "Indigenous",
    date: "Dec 12, 2024",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Home / News" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Environmental News
          </h1>
          <p className="text-gray-600">
            Stay updated with the latest conservation efforts
          </p>
        </div>

        {/* News Cards */}
        <div className="space-y-6">
          {newsItems.map((news) => (
            <Link key={news.id} href={`/news/${news.id}`}>
              <article className="group bg-white rounded-2xl shadow-md hover:shadow-2xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={news.image}
                    alt={news.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Tag Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-sm text-emerald-700 shadow-lg">
                      <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                      {news.tag}
                    </span>
                  </div>

                  {/* Date Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-black/50 backdrop-blur-sm text-white">
                      {news.date}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-bold text-xl text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {news.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {news.description}
                  </p>

                  <div className="flex items-center text-emerald-600 font-semibold group-hover:text-emerald-700">
                    <span>Read more</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>

      <Navigation />
    </div>
  );
}
