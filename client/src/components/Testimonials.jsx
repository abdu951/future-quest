import React from "react";

const testimonials = [
  {
    text: "Future Quest made planning my trip incredibly easy. Everything from booking to travel support was seamless.",
    name: "Cristofer Levin",
    role: "Travel Blogger",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
  },
  {
    text: "I discovered amazing destinations I never knew existed. The experience felt personal and curated.",
    name: "Rohan Mehta",
    role: "Digital Nomad",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
  },
  {
    text: "One of the best travel platforms I’ve used. Smooth UI and excellent recommendations.",
    name: "Jason Kim",
    role: "Product Designer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200",
  },
];

const Testimonials = () => {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

        
        <span className="text-[#ffa843] uppercase font-semibold tracking-wider">
          Testimonials
        </span>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          What Our Travelers Say
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Hear from our community of travelers who have explored the world
          through Future Quest.
        </p>

        
        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 p-8 text-left"
            >

              
              <div className="flex mb-4 text-[#ffa843]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.787 1.402 8.17L12 18.896l-7.336 3.872 1.402-8.17L.132 9.211l8.2-1.193z"/>
                    </svg>
                  ))}
              </div>

              
              <p className="text-gray-600 leading-relaxed">
                {item.text}
              </p>

             
              <div className="flex items-center mt-6 gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <p className="font-semibold text-gray-900">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Testimonials; 