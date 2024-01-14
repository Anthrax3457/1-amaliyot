import React from "react";

// styles
import "./style.css";

// react icons
import { FaHome } from "react-icons/fa";

// components
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

const Service = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "Service" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-[#2124B1] h-[500px] py-[195px] text-white mb-[48px]">
        <div className="site-container flex justify-center gap-[48px]">
          <div className="max-w-[490px] text-center flex flex-col items-center">
            <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
              Service
            </h1>
            <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
            <Breadcrumbs paths={paths} />
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section className="service py-[48px]">
        <div className="site-container flex flex-col items-center">
          <div data-aos="zoom-in-up">
            <div className="flex flex-col items-center text-center mb-[48px]">
              <h5 className="service__name text-[#2124B1] font-medium mb-[8px] flex">
                <div className="relative block mr-[25px]">
                  <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[5px] left-[3px]"></span>
                  <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[8px] left-0"></span>
                </div>
                Our Services
              </h5>
              <h2 className="service__title text-[#1D1D27] text-[32px] leading-[1.2] mb-[8px] font-bold">
                What Solutions We Provide
              </h2>
              <div className="service__lines flex items-center gap-[4px]">
                <span className="block h-[4px] w-[45px] bg-[#1D1D27]"></span>
                <span className="block h-[4px] w-[4px] bg-[#1D1D27]"></span>
              </div>
            </div>
          </div>
          <ul className="service__cards grid grid-cols-3 gap-[24px]">
            <div data-aos="zoom-in-up" data-aos-duration="5000">
              <li className="service__card flex flex-col items-center rounded-[10px] text-center w-[332px] h-[350px] shadow-[0_0_45px_rgba(0,0,0,0.08)] py-[30px] px-[25px]">
                <div className="service__card-img w-[90px] h-[90px] flex justify-center items-center mb-[20px]">
                  <FaHome className="text-[36px] text-white" />
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                  <h3 className="text-[22px] font-medium">SEO Optimization</h3>
                  <p className="text-[#888]">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link
                    to="/"
                    className="service__card-link relative z-[1] py-[6px] px-[16px] text-[#2124B1] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1000">
              <li className="service__card flex flex-col items-center rounded-[10px] text-center w-[332px] h-[350px] shadow-[0_0_45px_rgba(0,0,0,0.08)] py-[30px] px-[25px]">
                <div className="service__card-img w-[90px] h-[90px] flex justify-center items-center mb-[20px]">
                  <FaHome className="text-[36px] text-white" />
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                  <h3 className="text-[22px] font-medium">Web Design</h3>
                  <p className="text-[#888]">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link
                    to="/"
                    className="service__card-link relative z-[1] py-[6px] px-[16px] text-[#2124B1] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="1500">
              <li className="service__card flex flex-col items-center rounded-[10px] text-center w-[332px] h-[350px] shadow-[0_0_45px_rgba(0,0,0,0.08)] py-[30px] px-[25px]">
                <div className="service__card-img w-[90px] h-[90px] flex justify-center items-center mb-[20px]">
                  <FaHome className="text-[36px] text-white" />
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                  <h3 className="text-[22px] font-medium">
                    Social Media Marketing
                  </h3>
                  <p className="text-[#888]">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link
                    to="/"
                    className="service__card-link relative z-[1] py-[6px] px-[16px] text-[#2124B1] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="2000">
              <li className="service__card flex flex-col items-center rounded-[10px] text-center w-[332px] h-[350px] shadow-[0_0_45px_rgba(0,0,0,0.08)] py-[30px] px-[25px]">
                <div className="service__card-img w-[90px] h-[90px] flex justify-center items-center mb-[20px]">
                  <FaHome className="text-[36px] text-white" />
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                  <h3 className="text-[22px] font-medium">Email Marketing</h3>
                  <p className="text-[#888]">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link
                    to="/"
                    className="service__card-link relative z-[1] py-[6px] px-[16px] text-[#2124B1] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="2500">
              <li className="service__card flex flex-col items-center rounded-[10px] text-center w-[332px] h-[350px] shadow-[0_0_45px_rgba(0,0,0,0.08)] py-[30px] px-[25px]">
                <div className="service__card-img w-[90px] h-[90px] flex justify-center items-center mb-[20px]">
                  <FaHome className="text-[36px] text-white" />
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                  <h3 className="text-[22px] font-medium">PPC Advertising</h3>
                  <p className="text-[#888]">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link
                    to="/"
                    className="service__card-link relative z-[1] py-[6px] px-[16px] text-[#2124B1] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="3000">
              <li className="service__card flex flex-col items-center rounded-[10px] text-center w-[332px] h-[350px] shadow-[0_0_45px_rgba(0,0,0,0.08)] py-[30px] px-[25px]">
                <div className="service__card-img w-[90px] h-[90px] flex justify-center items-center mb-[20px]">
                  <FaHome className="text-[36px] text-white" />
                </div>
                <div className="flex flex-col items-center gap-[16px]">
                  <h3 className="text-[22px] font-medium">App Development</h3>
                  <p className="text-[#888]">
                    Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                    lorem sed diam stet diam sed stet lorem.
                  </p>
                  <Link
                    to="/"
                    className="service__card-link relative z-[1] py-[6px] px-[16px] text-[#2124B1] font-medium"
                  >
                    Read More
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Service;
