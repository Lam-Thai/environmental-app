import Header from "@/components/Header";
import Navigation from "@/components/Navigation";

const events = [
  {
    id: 1,
    title: "Tree Planting Drive - Stanley Park",
    date: "December 20, 2024",
    time: "9:00 AM - 2:00 PM",
    location: "Stanley Park, Vancouver, BC",
    organizer: "Vancouver Parks Board",
    description:
      "Join us for a community tree planting event! We'll be planting native species to help restore the forest ecosystem. All tools and materials provided.",
    attendees: 45,
    maxAttendees: 60,
    category: "Tree Planting",
    image: "🌲",
    status: "Open",
  },
  {
    id: 2,
    title: "Beach Clean-Up - English Bay",
    date: "December 22, 2024",
    time: "10:00 AM - 1:00 PM",
    location: "English Bay Beach, Vancouver, BC",
    organizer: "Ocean Wise",
    description:
      "Help keep our beaches clean! We'll provide gloves, bags, and refreshments. Great for families and all ages welcome.",
    attendees: 32,
    maxAttendees: 50,
    category: "Clean-Up",
    image: "🏖️",
    status: "Open",
  },
  {
    id: 3,
    title: "Forest Restoration Workshop",
    date: "December 25, 2024",
    time: "1:00 PM - 4:00 PM",
    location: "Pacific Spirit Park, Vancouver, BC",
    organizer: "Forest Conservation Society",
    description:
      "Learn about forest ecology and restoration techniques. Hands-on activities include invasive species removal and native plant identification.",
    attendees: 28,
    maxAttendees: 30,
    category: "Workshop",
    image: "🌳",
    status: "Almost Full",
  },
  {
    id: 4,
    title: "Wildlife Photography Walk",
    date: "December 28, 2024",
    time: "7:00 AM - 10:00 AM",
    location: "Burnaby Lake Regional Park",
    organizer: "Nature Photography Club",
    description:
      "Join experienced photographers to capture local wildlife. Bring your camera and learn techniques for ethical wildlife photography.",
    attendees: 15,
    maxAttendees: 20,
    category: "Education",
    image: "📸",
    status: "Open",
  },
  {
    id: 5,
    title: "Community Composting Workshop",
    date: "January 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Community Garden, Kitsilano",
    organizer: "Zero Waste Vancouver",
    description:
      "Learn how to compost at home and reduce waste. Free compost starter kit for all participants!",
    attendees: 40,
    maxAttendees: 40,
    category: "Workshop",
    image: "♻️",
    status: "Full",
  },
  {
    id: 6,
    title: "Urban Garden Build Day",
    date: "January 8, 2025",
    time: "9:00 AM - 3:00 PM",
    location: "Downtown Eastside Community Center",
    organizer: "Urban Farmers Association",
    description:
      "Help build raised garden beds for the community. No experience necessary - we'll teach you everything!",
    attendees: 18,
    maxAttendees: 35,
    category: "Community",
    image: "🌱",
    status: "Open",
  },
];

export default function Events() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pb-24">
      <Header title="Upcoming Events" />

      <main className="p-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Upcoming Events
          </h1>
          <p className="text-gray-600">
            Join environmental activities in your community
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          <button className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-semibold shadow-md hover:shadow-lg transition-all">
            All Events
          </button>
          <button className="bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-gray-100 transition-all border border-gray-200">
            Tree Planting
          </button>
          <button className="bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-gray-100 transition-all border border-gray-200">
            Clean-Up
          </button>
          <button className="bg-white text-gray-700 px-5 py-2.5 rounded-full text-sm whitespace-nowrap font-medium hover:bg-gray-100 transition-all border border-gray-200">
            Workshops
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              {/* Event Image/Icon */}
              <div className="h-40 bg-gradient-to-br from-emerald-400 via-green-500 to-teal-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <span className="text-7xl relative z-10 drop-shadow-lg">
                  {event.image}
                </span>
              </div>

              {/* Event Details */}
              <div className="p-6">
                {/* Status Badge & Category */}
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`inline-flex items-center text-xs px-3 py-1.5 rounded-full font-semibold ${
                      event.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : event.status === "Almost Full"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 bg-current rounded-full mr-2"></span>
                    {event.status}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold bg-gray-100 px-3 py-1.5 rounded-full">
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-bold text-xl mb-3 text-gray-900">
                  {event.title}
                </h3>

                {/* Event Info */}
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-start gap-3 text-sm">
                    <div className="bg-emerald-100 p-2 rounded-lg">
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
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {event.date}
                      </p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">{event.location}</p>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-purple-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-600">
                      Organized by {event.organizer}
                    </p>
                  </div>

                  <div className="flex items-start gap-3 text-sm">
                    <div className="bg-orange-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-orange-600"
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
                    </div>
                    <p className="text-gray-600 font-semibold">
                      {event.attendees}/{event.maxAttendees} registered
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="flex justify-between text-xs text-gray-600 mb-2">
                    <span>Registration Progress</span>
                    <span className="font-semibold">
                      {Math.round((event.attendees / event.maxAttendees) * 100)}
                      %
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                    <div
                      className={`h-2.5 rounded-full transition-all duration-500 ${
                        (event.attendees / event.maxAttendees) * 100 >= 90
                          ? "bg-gradient-to-r from-red-500 to-red-600"
                          : (event.attendees / event.maxAttendees) * 100 >= 75
                          ? "bg-gradient-to-r from-yellow-400 to-yellow-500"
                          : "bg-gradient-to-r from-emerald-500 to-green-600"
                      }`}
                      style={{
                        width: `${
                          (event.attendees / event.maxAttendees) * 100
                        }%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className={`flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${
                      event.status === "Full"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-gradient-to-r from-emerald-500 to-green-600 text-white hover:from-emerald-600 hover:to-green-700"
                    }`}
                    disabled={event.status === "Full"}
                  >
                    {event.status === "Full" ? "Event Full" : "Register Now"}
                  </button>
                  <button className="px-6 py-3 border-2 border-emerald-600 text-emerald-600 rounded-xl font-bold text-sm hover:bg-emerald-50 transition-all duration-200">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button className="w-full mt-8 bg-white text-gray-700 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-200 border-2 border-gray-200 hover:border-gray-300">
          Load More Events
        </button>
      </main>

      <Navigation />
    </div>
  );
}
