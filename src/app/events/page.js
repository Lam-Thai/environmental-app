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
    <div className="min-h-screen bg-white pb-20">
      <Header title="Upcoming Events" />

      <main className="p-4 max-w-md mx-auto">
        {/* Filter Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm whitespace-nowrap font-semibold">
            All Events
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-300">
            Tree Planting
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-300">
            Clean-Up
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm whitespace-nowrap hover:bg-gray-300">
            Workshops
          </button>
        </div>

        {/* Events List */}
        <div className="space-y-4">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
            >
              {/* Event Image/Icon */}
              <div className="h-32 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-6xl">{event.image}</span>
              </div>

              {/* Event Details */}
              <div className="p-4">
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-semibold ${
                      event.status === "Open"
                        ? "bg-green-100 text-green-700"
                        : event.status === "Almost Full"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {event.status}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">
                    {event.category}
                  </span>
                </div>

                {/* Event Title */}
                <h3 className="font-bold text-lg mb-2 text-gray-900">
                  {event.title}
                </h3>

                {/* Event Info */}
                <div className="space-y-2 mb-3">
                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-lg">📅</span>
                    <div>
                      <p className="font-semibold text-gray-700">
                        {event.date}
                      </p>
                      <p className="text-gray-600">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-lg">📍</span>
                    <p className="text-gray-600">{event.location}</p>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-lg">👥</span>
                    <p className="text-gray-600">
                      Organized by {event.organizer}
                    </p>
                  </div>

                  <div className="flex items-start gap-2 text-sm">
                    <span className="text-lg">✓</span>
                    <p className="text-gray-600">
                      {event.attendees}/{event.maxAttendees} registered
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        (event.attendees / event.maxAttendees) * 100 >= 90
                          ? "bg-red-500"
                          : (event.attendees / event.maxAttendees) * 100 >= 75
                          ? "bg-yellow-500"
                          : "bg-green-500"
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
                <div className="flex gap-2">
                  <button
                    className={`flex-1 py-2 rounded-lg font-semibold transition-colors ${
                      event.status === "Full"
                        ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                        : "bg-green-600 text-white hover:bg-green-700"
                    }`}
                    disabled={event.status === "Full"}
                  >
                    {event.status === "Full" ? "Event Full" : "Register Now"}
                  </button>
                  <button className="px-4 py-2 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-50 transition-colors">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <button className="w-full mt-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
          Load More Events
        </button>
      </main>

      <Navigation />
    </div>
  );
}
