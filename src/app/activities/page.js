import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Activities() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Activities" />

      <main className="p-4 max-w-md mx-auto">
        {/* Changed from space-y-4 mb-6 to space-y-6 mb-8 for more spacing */}
        <div className="space-y-6 mb-8">
          <Link href="/groups">
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-left px-6">
              Search for existed activities
            </button>
          </Link>

          <Link href="/events">
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-left px-6">
              Upcoming activities
            </button>
          </Link>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
