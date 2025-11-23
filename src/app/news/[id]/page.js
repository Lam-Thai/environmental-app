import Link from "next/link";
import Navigation from "@/components/Navigation";

const newsData = {
  1: {
    id: 1,
    title: "Biodiversity Leadership",
    date: "December 15, 2024",
    author: "Environment Canada",
    image: "🌲",
    content: [
      "Minister Guilbeault is pushing Canadian leadership on nature conservation, both domestically and globally. This initiative marks a significant step forward in Canada's commitment to environmental protection.",
      "Canada is working to protect 30% of its lands and waters by 2030, in line with global biodiversity goals. This ambitious target demonstrates Canada's dedication to preserving natural ecosystems for future generations.",
      "There are major nature-protection deals in the North involving Indigenous groups, to safeguard Arctic ecosystems. These partnerships recognize the crucial role of Indigenous communities in environmental stewardship.",
      "The government has allocated $2.3 billion over five years to support these conservation efforts. This funding will help create new protected areas, restore damaged ecosystems, and support community-led conservation projects.",
      "Indigenous-led conservation initiatives are being recognized as essential to meeting these targets. Traditional knowledge combined with modern science creates the most effective conservation strategies.",
    ],
  },
  2: {
    id: 2,
    title: "Indigenous Conservation",
    date: "December 12, 2024",
    author: "Northern Affairs Canada",
    image: "🏔️",
    content: [
      "Indigenous communities across Canada are taking the lead in protecting vast territories in the Arctic and boreal regions. Their traditional knowledge and deep connection to the land make them ideal stewards of these critical ecosystems.",
      "The Thaidene Nëné National Park Reserve in the Northwest Territories is one example of successful Indigenous-led conservation. This 26,376 square kilometer protected area was established through a historic agreement with the Łutsël K'é Dene First Nation.",
      "Similar initiatives are underway in British Columbia, where the Great Bear Rainforest is being protected through agreements with First Nations. These partnerships ensure that conservation efforts respect Indigenous rights and incorporate traditional land management practices.",
      "Scientists have recognized that Indigenous-protected areas often show better conservation outcomes than government-only initiatives. The integration of traditional ecological knowledge with western science creates more resilient and effective conservation strategies.",
      "Funding for Indigenous Guardians programs has been expanded, allowing communities to monitor and protect their territories. These programs provide employment while ensuring the long-term health of critical ecosystems.",
    ],
  },
};

export default function NewsDetails({ params }) {
  const { id } = params;
  const news = newsData[id] || newsData[1];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header */}
      <div className="bg-green-500 p-4 flex items-center gap-3 sticky top-0 z-40">
        <Link href="/home">
          <button className="text-white text-2xl">←</button>
        </Link>
        <div className="flex-1 flex items-center justify-between">
          <Link href="/settings">
            <span className="text-2xl">🌱</span>
          </Link>
          <div className="flex gap-3">
            <Link href="/cart">
              <span className="text-xl text-white">🛒</span>
            </Link>
            <button className="text-white">
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto">
        {/* Hero Image */}
        <div className="h-64 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-8xl">{news.image}</span>
        </div>

        {/* Article Content */}
        <article className="p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold mb-3 text-gray-900">
            {news.title}
          </h1>

          {/* Meta Information */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-1">
              <span>📅</span>
              {news.date}
            </span>
            <span className="flex items-center gap-1">
              <span>✍️</span>
              {news.author}
            </span>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none">
            {news.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-wrap gap-2">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                #Conservation
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                #Environment
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                #Canada
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                #Biodiversity
              </span>
            </div>
          </div>

          {/* Share Section */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-bold mb-3 text-gray-900">Share this article</h3>
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors">
                📘 Facebook
              </button>
              <button className="flex-1 bg-sky-500 text-white py-2 rounded hover:bg-sky-600 transition-colors">
                🐦 Twitter
              </button>
              <button className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700 transition-colors">
                💬 WhatsApp
              </button>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8">
            <Link href="/home">
              <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                ← Back to News
              </button>
            </Link>
          </div>
        </article>
      </main>

      <Navigation />
    </div>
  );
}
