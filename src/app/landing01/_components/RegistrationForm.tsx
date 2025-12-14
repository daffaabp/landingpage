"use client";

import type React from "react";

const RegistrationForm: React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 lg:p-8">
      <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Reserve Your Spot
      </h2>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="sr-only" htmlFor="first-name">
            First Name
          </label>
          <input
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
            id="first-name"
            placeholder="First Name *"
            type="text"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="last-name">
            Last Name
          </label>
          <input
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
            id="last-name"
            placeholder="Last Name *"
            type="text"
            required
          />
        </div>
        <div>
          <label className="sr-only" htmlFor="phone">
            Phone Number
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3.5 text-lg leading-none">
              🇺🇸
            </span>
            <input
              className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-primary focus:ring-primary py-3 pl-10 px-4"
              id="phone"
              placeholder="Phone Number *"
              type="tel"
              required
            />
          </div>
        </div>
        <div>
          <label className="sr-only" htmlFor="email">
            Email Address
          </label>
          <input
            className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 dark:text-white focus:border-primary focus:ring-primary py-3 px-4"
            id="email"
            placeholder="Email Address *"
            type="email"
            required
          />
        </div>
        <button
          className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg transition-colors shadow-lg mt-2 cursor-pointer"
          type="submit"
        >
          Save My Seat
        </button>
        <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-4 leading-relaxed">
          By registering, you agree to receive emails from Hands-Off Investing
          about this event and related educational content. You may unsubscribe
          at any time.
        </p>
      </form>
    </div>
  );
};

export default RegistrationForm;
