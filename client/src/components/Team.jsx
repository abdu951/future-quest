import React from "react";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600",
  },
  {
    name: "Jane Smith",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600",
  },
];

const Team = () => {
  return (
    <section className="py-28 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">

      
        <span className="text-[#ffa843] uppercase font-semibold tracking-wider">
          Our Team
        </span>

        <h2 className="mt-3 text-4xl font-bold text-gray-900">
          Meet the People Behind Future Quest
        </h2>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Our passionate team works together to create unforgettable travel
          experiences and make exploring the world easier for everyone.
        </p>

      
        <div className="mt-16 grid gap-8 sm:grid-cols-2 md:grid-cols-3">

          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >

           
              <div className="overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[300px] object-cover hover:scale-105 transition duration-300"
                />
              </div>

            
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-1 text-sm text-[#ffa843] font-medium">
                  {member.role}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team; 



