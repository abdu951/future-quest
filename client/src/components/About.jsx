import React from 'react'


const About = () => {
  return (
    <section className="pt-44 pb-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          className="rounded-xl"
        />

        <div>
          <h2 className="text-4xl font-bold text-gray-900">
            About Our <span className="text-[#ffa843]">Agency</span>
          </h2>

          <p className="mt-4 text-gray-600">
            We are a global connector agency dedicated to linking
            students, graduates, and professionals with the best
            education programs and career opportunities worldwide.
          </p>

          <p className="mt-4 text-gray-600">
            Our mission is to make global education and employment
            accessible to everyone.
          </p>
        </div>

      </div>

    </section>
  )
}

export default About