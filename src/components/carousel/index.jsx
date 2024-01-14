import React from "react";
import Bg from "../../assets/img/bg-top.png";
import Bg2 from "../../assets/img/bg-bottom.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { FaQuoteLeft } from "react-icons/fa";
import Avatar1 from "../../assets/img/testimonial-1.jpg";
import Avatar2 from "../../assets/img/testimonial-2.jpg";
import Avatar3 from "../../assets/img/testimonial-3.jpg";
import Avatar4 from "../../assets/img/testimonial-4.jpg";

const Carousel = () => {
  const data = [
    {
      icon: <FaQuoteLeft />,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: Avatar1,
      name: "Client Name",
      proffession: "Profession",
    },
    {
      icon: <FaQuoteLeft />,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: Avatar2,
      name: "Client Name",
      proffession: "Profession",
    },
    {
      icon: <FaQuoteLeft />,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: Avatar3,
      name: "Client Name",
      proffession: "Profession",
    },
    {
      icon: <FaQuoteLeft />,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: Avatar4,
      name: "Client Name",
      proffession: "Profession",
    },
    {
      icon: <FaQuoteLeft />,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: Avatar1,
      name: "Client Name",
      proffession: "Profession",
    },
    {
      icon: <FaQuoteLeft />,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam",
      avatar: Avatar2,
      name: "Client Name",
      proffession: "Profession",
    },
  ];
  return (
    <div className="grid bg-[#2124B1] justify-center items-center">
      <div className="w-[1200px] h-[400px]">
        <img className="absolute w-[1300px] left-0" src={Bg} alt="" />
        <img
          className="absolute w-[1200px] right-0 mt-[275px]"
          src={Bg2}
          alt=""
        />
        <div className="px-[40px]">
          <Swiper spaceBetween={100} slidesPerView={3}>
            <div>
              {data.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className=" border w-[380px] h-[230px] mt-[90px] px-[30px] rounded-xl">
                      <p className="text-[40px] mt-[20px] text-[white]">
                        {item.icon}
                      </p>
                      <p className="w-[320px] text-[white] mt-[10px] font-normal text-[17px]">
                        {item.text}
                      </p>
                      <div className="flex gap-2 items-center mt-[10px]">
                        <img
                          className="rounded-full w-[50px] h-[50px]"
                          src={item.avatar}
                          alt=""
                        />
                        <div>
                          <p className="w-[300px] text-[white] font-medium text-[17px]">
                            {item.name}
                          </p>
                          <p className="w-[300px] text-[white] font-light  text-[15px]">
                            {item.proffession}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
