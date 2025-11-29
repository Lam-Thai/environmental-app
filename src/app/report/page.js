import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Report() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Report" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Report Incident
          </h1>
          <p className="text-gray-600">
            Help us protect the environment by reporting issues
          </p>
        </div>

        <div className="space-y-4">
          <a href="tel:1-800-555-0199">
            <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-red-600 hover:to-red-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Emergency Call
            </button>
          </a>

          <Link href="/report-form">
            <button className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-5 rounded-2xl font-bold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-200 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Report with Photo
            </button>
          </Link>
        </div>

        {/* Information Cards */}
        <div className="mt-8 space-y-4">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-2 border-green-200">
            <h3 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                />
              </svg>
              What to Report:
            </h3>
            <ul className="space-y-2 text-sm text-green-700">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Illegal logging or tree cutting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Deforestation activities
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Wildfires or smoke
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Wildlife abuse or poaching
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Pollution or illegal dumping
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                Habitat destruction
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-2xl border-2 border-yellow-200">
            <p className="text-sm text-yellow-800">
              <strong className="flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Important Note:
              </strong>
              Your report helps protect our environment. All reports are
              reviewed by environmental authorities. For emergencies, always
              call 911 first.
            </p>
          </div>
        </div>
      </main>

      <Navigation />
    </div>
  );
}
