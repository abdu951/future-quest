import React, { useRef } from "react";
import back_icon from "../assets/back-icon.png";
import next_icon from "../assets/next-icon.png";
import user_1 from "../assets/user-1.png";
import user_2 from "../assets/user-2.png";
import user_3 from "../assets/user-3.png";
import user_4 from "../assets/user-4.png";

const Testimonial = () => {
  const slider = useRef();
  let tx = 0;

  const forward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const backward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="my-20 mx-auto px-36 relative max-w-6xl md:px-10">
      
      {/* Back Button */}
      <img
        src={back_icon}
        alt=""
        onClick={backward}
        className="absolute top-1/2 -translate-y-1/2 left-0 bg-[#ffa843] p-4 w-36 rounded-full cursor-pointer md:p-3 md:w-9"
      />

      {/* Next Button */}
      <img
        src={next_icon}
        alt=""
        onClick={forward}
        className="absolute top-1/2 -translate-y-1/2 right-0 bg-[#ffa843] p-4 w-12 rounded-full cursor-pointer md:p-3 md:w-9"
      />

      <div className="overflow-hidden">
        <ul
          ref={slider}
          className="flex w-[200%] transition-all duration-500"
        >
          {/* Slide 1 */}
          <li className="w-1/2 p-5 list-none md:p-3">
            <div className="shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10 rounded-lg text-[#676767] leading-[1.4] md:p-4">
              <div className="flex items-center mb-5 text-[15px] md:block md:mb-3 md:text-xs">
                <img
                  src={user_1}
                  alt=""
                  className="w-[65px] border-4 border-[#212EA0] rounded-full mr-3 md:w-[50px] md:border-3"
                />
                <div>
                  <h3 className="text-[#212EA0] md:text-base">
                    William Jackson 1
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti porro recusandae architecto quia totam iste libero
                ratione veritatis beatae magni.
              </p>
            </div>
          </li>

          {/* Slide 2 */}
          <li className="w-1/2 p-5 list-none md:p-3">
            <div className="shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10 rounded-lg text-[#676767] leading-[1.4] md:p-4">
              <div className="flex items-center mb-5 text-[15px] md:block md:mb-3 md:text-xs">
                <img
                  src={user_2}
                  alt=""
                  className="w-[65px] border-4 border-[#212EA0] rounded-full mr-3 md:w-[50px]"
                />
                <div>
                  <h3 className="text-[#212EA0] md:text-base">
                    William Jackson 2
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti porro recusandae architecto quia totam iste libero
                ratione veritatis beatae magni.
              </p>
            </div>
          </li>

          {/* Slide 3 */}
          <li className="w-1/2 p-5 list-none md:p-3">
            <div className="shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10 rounded-lg text-[#676767] leading-[1.4] md:p-4">
              <div className="flex items-center mb-5 text-[15px] md:block md:mb-3 md:text-xs">
                <img
                  src={user_3}
                  alt=""
                  className="w-[65px] border-4 border-[#212EA0] rounded-full mr-3 md:w-[50px]"
                />
                <div>
                  <h3 className="text-[#212EA0] md:text-base">
                    William Jackson 3
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti porro recusandae architecto quia totam iste libero
                ratione veritatis beatae magni.
              </p>
            </div>
          </li>

          {/* Slide 4 */}
          <li className="w-1/2 p-5 list-none md:p-3">
            <div className="shadow-[0_0_20px_rgba(0,0,0,0.05)] p-10 rounded-lg text-[#676767] leading-[1.4] md:p-4">
              <div className="flex items-center mb-5 text-[15px] md:block md:mb-3 md:text-xs">
                <img
                  src={user_4}
                  alt=""
                  className="w-[65px] border-4 border-[#212EA0] rounded-full mr-3 md:w-[50px]"
                />
                <div>
                  <h3 className="text-[#212EA0] md:text-base">
                    William Jackson 4
                  </h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p className="md:text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti porro recusandae architecto quia totam iste libero
                ratione veritatis beatae magni.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
