import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Report() {
  return (
    <div className="min-h-screen bg-white pb-20">
      <Header title="Report" />

      <main className="p-6 max-w-md mx-auto">
        <div className="space-y-4">
          <a href="tel:1-800-555-0199">
            <button className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2">
              <span>📞</span>
              Call Emergency Wildlife Services
            </button>
          </a>

          <Link href="/report-form">
            <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
              <span>📸</span>
              Report with Photo/Video
            </button>
          </Link>
        </div>

        {/* Information Card */}
        <div className="mt-8 p-4 bg-green-50 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">What to Report:</h3>
          <ul className="text-sm text-green-700 space-y-1">
            <li>• Illegal logging or tree cutting</li>
            <li>• Deforestation activities</li>
            <li>• Wildfires or smoke</li>
            <li>• Wildlife abuse or poaching</li>
            <li>• Pollution or dumping</li>
            <li>• Habitat destruction</li>
          </ul>
        </div>

        <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
          <p className="text-xs text-yellow-800">
            <strong>⚠️ Note:</strong> Your report helps protect our environment.
            All reports are reviewed by environmental authorities. For
            emergencies, always call 911 first.
          </p>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
