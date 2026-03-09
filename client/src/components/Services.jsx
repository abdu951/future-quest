import React from "react";
import { GraduationCap, Briefcase, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Education Placement",
      desc: "Find top universities and academic programs worldwide with expert guidance.",
      icon: GraduationCap,
    },
    {
      title: "Career Opportunities",
      desc: "Connect with international employers and explore global career opportunities.",
      icon: Briefcase,
    },
    {
      title: "Visa Guidance",
      desc: "Receive step-by-step support through the visa and immigration process.",
      icon: Globe,
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900">
            Our <span className="text-[#ffa843]">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            We provide comprehensive support to help students and professionals
            achieve their global education and career goals.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={i}
                className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#ffa843]/10 text-[#ffa843] mb-6 group-hover:scale-110 transition">
                  <Icon size={28} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

                {/* CTA */}
                <a
                  href="#"
                  className="inline-block mt-5 text-[#ffa843] font-medium hover:underline"
                >
                  Learn More →
                </a>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Services;