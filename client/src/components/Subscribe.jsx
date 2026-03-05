import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    console.log("Subscribed:", email);

    // send to API later
    setEmail("");
  };

  return (

    <div className='relative bg-[#FFFFFF] px-[145px] py-[40px]'>
        <div className='absolute -bottom-28 flex items-center justify-between bg-neutral-100 w-[1050px] h-[233px] px-10 rounded-[10px] shadow-2xl'>
            <div>
                <h1 className='text-slate-700 font-semibold text-[35px] font-medium w-[371px] leading-[45px]'>Subscribe Now for Get Special Features!</h1>
                <p className='text-[#4F5665] text-[16px] leading-[30px]'>Let&apos;s subscribe with us and find the fun.</p>
            </div>
            <button className='bg-[#ffa843] hover:bg-[#ffa743c0] w-[250px] h-[60px] rounded-[10px] text-[#ffffff] text-[16px] font-medium leading-[25px] shadow-xl shadow-yellow-800'>Subscribe Now</button>
        </div>
    </div>
    
  );
};

export default Subscribe;