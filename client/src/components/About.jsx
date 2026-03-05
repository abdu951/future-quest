import React from 'react'
import people from "../assets/oip6.jpg";

const About = () => {
  return (
    <div className='pt-40 pb-40'>
            <section className="flex flex-col md:flex-row items-center justify-center gap-10 max-md:px-4">
                <div className="relative shadow-2xl shadow-[#ffa74385] rounded-2xl overflow-hidden shrink-0">
                    <img className="max-w-md w-full h-[70vh] object-cover rounded-2xl"
                        src={people}
                        alt="people" />
                    <div className="flex items-center gap-1 max-w-72 absolute bottom-8 left-8 bg-white p-4 rounded-xl">
                        <div className="flex -space-x-4 shrink-0">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-1" />
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[2]" />
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="image"
                                className="size-9 rounded-full border-[3px] border-white hover:-translate-y-1 transition z-[3]" />
                            <div
                                className="flex items-center justify-center text-xs  text-white size-9 rounded-full border-[3px] border-white bg-[#ffa843] hover:-translate-y-1 transition z-[4]">
                                50+
                            </div>
                        </div>
                        <p className="text-sm font-medium text-slate-800">Join our future community</p>
                    </div>
                </div>
                <div className="text-sm text-slate-600 max-w-lg">
                    <h1 className="text-xl uppercase font-semibold text-slate-700">What we do?</h1>
                    <div className="w-24 h-[3px] rounded-full bg-gradient-to-r from-[#ffa843] to-[#fffbd9]"></div>
                    <p className="mt-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dicta quasi sed? Quaerat facilis adipisci, porro eum ducimus,</p>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dicta quasi sed? Quaerat facilis adipisci, porro eum ducimus, necessitatibus mollitia modi sequi odit ex ullam </p>
                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt dicta quasi sed? Quaerat facilis adipisci, porro eum ducimus.</p>
                    <a href="#" className="flex items-center w-max gap-2 mt-8 hover:-translate-y-0.5 transition bg-gradient-to-r from-[#ffa843] to-[#ffa74385] py-3 px-8 rounded-full text-white">
                        <span>Read more</span>
                        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.53 6.53a.75.75 0 0 0 0-1.06L7.757.697a.75.75 0 1 0-1.06 1.06L10.939 6l-4.242 4.243a.75.75 0 0 0 1.06 1.06zM0 6v.75h12v-1.5H0z"
                                fill="#fff" />
                        </svg>
                    </a>
                </div>
            </section>
        </div>
  )
}

export default About