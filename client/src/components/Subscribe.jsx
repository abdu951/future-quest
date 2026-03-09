import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-10 md:p-14 text-center">

       
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Get Travel Deals & Updates
        </h2>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Subscribe to our newsletter and receive exclusive travel tips,
          destination guides, and special offers from Future Quest.
        </p>

        <form
          onSubmit={handleSubscribe}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full sm:w-[350px] px-5 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ffa843]"
          />

          <button
            type="submit"
            className="px-8 py-3 bg-[#ffa843] text-white font-semibold rounded-full hover:bg-[#ff9a25] transition duration-300"
          >
            Subscribe
          </button>
        </form>

      </div>
    </section>
  );
};

export default Subscribe;




