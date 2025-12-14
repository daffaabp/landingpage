"use client";

export default function RegistrationForm() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-10">
      <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
        Reserve Your Spot
      </h2>
      <form className="space-y-4">
        <div>
          <label className="sr-only" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full rounded-md border-gray-200 bg-gray-50 focus:border-[#C68C32] focus:ring-[#C68C32] py-3 px-4 text-sm"
            id="first-name"
            placeholder="First Name *"
            type="text"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full rounded-md border-gray-200 bg-gray-50 focus:border-[#C68C32] focus:ring-[#C68C32] py-3 px-4 text-sm"
            id="last-name"
            placeholder="Last Name *"
            type="text"
          />
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <span className="text-lg mr-1">🇺🇸</span>
          </div>
          <input
            className="w-full rounded-md border-gray-200 bg-gray-50 focus:border-[#C68C32] focus:ring-[#C68C32] py-3 pl-12 text-sm"
            id="phone"
            placeholder="Phone Number *"
            type="tel"
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full rounded-md border-gray-200 bg-gray-50 focus:border-[#C68C32] focus:ring-[#C68C32] py-3 px-4 text-sm"
            id="email"
            placeholder="Email Address *"
            type="email"
          />
        </div>
        <button
          className="w-full bg-[#C68C32] hover:bg-[#B07925] text-white font-bold py-3.5 rounded-md transition-colors shadow-md mt-2"
          type="button"
        >
          Save My Seat
        </button>
        <p className="text-[0.65rem] text-gray-400 text-center mt-4 leading-normal px-4">
          By registering, you agree to receive emails from Hands-Off Investing
          about this event and related educational content. You may unsubscribe
          at any time.
        </p>
      </form>
    </div>
  );
}
