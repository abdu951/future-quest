import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">

       
        <div>
          <h3 className="text-2xl font-bold text-white">
            Future <span className="text-[#ffa843]">Quest</span>
          </h3>

          <p className="mt-4 text-sm leading-relaxed">
            Discover unforgettable travel experiences and explore the
            world with confidence. Future Quest helps travelers plan
            adventures with ease.
          </p>
        </div>

       
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>

          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">About</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Press</a></li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-white font-semibold mb-4">Support</h4>

          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
          </ul>
        </div>

     
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <ul className="space-y-3 text-sm">
            <li>Email: contact@futurequest.com</li>
            <li>Phone: +1 123-456-7890</li>
            <li>Location: Cambridge, MA</li>
          </ul>
        </div>

      </div>

     
      <div className="border-t border-gray-700 mt-14 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Future Quest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 