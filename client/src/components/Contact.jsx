import React from "react";
import msg_icon from "../assets/msg-icon.png";
import mail_icon from "../assets/envelope.svg";
import phone_icon from "../assets/telephone.svg";
import location_icon from "../assets/geo-alt-fill.svg";
import arrow_icon from "../assets/white-arrow.png";
import phone from "../assets/telephone-fill.svg";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "YOUR_ACCESS_KEY");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="pt-40 pb-20">
        <div className="text-center">
        <p className="text-lg text-[#ffa843] font-medium pb-2">Contact Us</p>
        <h1 className="text-4xl font-semibold text-slate-700 pb-4">Get in touch with us</h1>
        </div>
    <div className="max-w-6xl mx-auto my-20 px-14 flex flex-col md:flex-row justify-between gap-10">
      
      {/* LEFT SIDE */}
      <div className="md:w-1/2 text-gray-600">
        <h3 className="text-[#000F38] text-2xl font-medium flex items-center mb-5">
          Send us a message
          <img src={msg_icon} alt="" className="w-6 ml-3" />
        </h3>

        <p className="max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolor neque animi assumenda ipsam tempora in perferendis
          corporis.emporibus corrupti obcaecati tenetur maxime repellendus, reprehenderit eius distinctio ratione! Earum, quisquam iusto!
        </p>

        <ul className="mt-6 space-y-5">
          <li className="flex items-center">
            <img src={mail_icon} alt="" className="w-4 mr-3" />
            Contact@greatstack.dev
          </li>
          <li className="flex items-center">
            <img src={phone_icon} alt="" className="w-4 mr-3" />
            +1 123-456-7890
          </li>
          <li className="flex items-start">
            <img src={location_icon} alt="" className="w-4 mr-3 mt-1" />
            77 massachustes ave, cambridge <br />
            ma 02139, united states
          </li>
        </ul>
      </div>

      {/* RIGHT SIDE (FORM) */}
      <div className="md:w-1/2">
        <form onSubmit={onSubmit} className="space-y-4">
          
          <div>
            <label className="block mb-1 text-gray-600">Your name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full bg-[#ffa843]/10 rounded-3xl p-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Phone number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              required
              className="w-full bg-[#ffa843]/10 rounded-3xl p-4 outline-none"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-600">Write your message here</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Enter your message"
              required
              className="w-full bg-[#ffa843]/10 rounded-3xl p-4 outline-none resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex items-center gap-2 bg-[#ffa843] text-white px-6 py-3 hover:opacity-90 transition rounded-full"
          >
            Submit Now
            <img src={arrow_icon} alt="" className="w-4" />
          </button>
        </form>

        <span className="block mt-5 text-gray-600">{result}</span>
      </div>
    </div>
    </div>
  );
};

export default Contact;
