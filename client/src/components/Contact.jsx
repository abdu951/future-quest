import React, { useState } from "react";
import mail_icon from "../assets/envelope.svg";
import phone_icon from "../assets/telephone.svg";
import location_icon from "../assets/geo-alt-fill.svg";

const Contact = () => {
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setResult("Message sent successfully!");
  };

  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        
        <div className="text-center mb-16">
          <span className="text-[#ffa843] uppercase font-semibold tracking-wider">
            Contact Us
          </span>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Have questions about your next adventure? Our team is here to help
            you plan the perfect travel experience.
          </p>
        </div>

        
        <div className="grid md:grid-cols-2 gap-12">

          
          <div className="space-y-8">

            <p className="text-gray-600 leading-relaxed">
              Reach out to us for travel support, booking assistance, or
              partnership opportunities. Our team responds quickly and ensures
              every traveler gets the best experience possible.
            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <img src={mail_icon} alt="" className="w-5" />
                <span className="text-gray-700">contact@futurequest.com</span>
              </div>

              <div className="flex items-center gap-4">
                <img src={phone_icon} alt="" className="w-5" />
                <span className="text-gray-700">+1 123-456-7890</span>
              </div>

              <div className="flex items-start gap-4">
                <img src={location_icon} alt="" className="w-5 mt-1" />
                <span className="text-gray-700">
                  77 Massachusetts Ave <br />
                  Cambridge, MA 02139 <br />
                  United States
                </span>
              </div>

            </div>
          </div>

          
          <div className="bg-white rounded-3xl shadow-lg p-8">

            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#ffa843] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#ffa843] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  required
                  placeholder="Write your message"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#ffa843] outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#ffa843] text-white py-3 rounded-full font-semibold hover:bg-[#ff9a25] transition duration-300"
              >
                Send Message
              </button>

            </form>

            {result && (
              <p className="mt-4 text-green-600 text-sm">{result}</p>
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact; 

