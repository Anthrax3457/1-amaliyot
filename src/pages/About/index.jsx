import React from "react";

// styles
import "./style.css";

// react icons
import {
  FaCheck,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPaperPlane,
  FaHome,
  FaPlus,
  FaFolder,
} from "react-icons/fa";

// images
import aboutImg from "../../assets/img/about.jpg";
import newsletterImg from "../../assets/img/newsletter.png";
import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";

// components
import Breadcrumbs from "../../components/Breadcrumbs";
import { Link } from "react-router-dom";

const About = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "About" },
  ];

  const data = [
    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team1,
    },

    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team2,
    },

    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team3,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-[#2124B1] h-[500px] py-[195px] text-white mb-[48px]">
        <div className="site-container flex justify-center gap-[48px]">
          <div className="max-w-[490px] text-center flex flex-col items-center">
            <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
              About Us
            </h1>
            <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
            <Breadcrumbs paths={paths} />
          </div>
        </div>
      </section>
      <section className="about py-[48px] mb-[48px]">
        <div className="site-container flex justify-center gap-[48px]">
          <div data-aos="fade-up">
            <div className="max-w-[498px]" >
              <h5 className="about__name text-[#2124B1] font-medium mb-[8px] flex">
                <div className="relative block mr-[25px]">
                  <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[5px] left-[3px]"></span>
                  <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[8px] left-0"></span>
                </div>
                About Us
              </h5>
              <h2 className="about__title text-[#1D1D27] text-[32px] leading-[1.2] mb-[8px] font-bold">
                The best SEO solution with 10 years of experience
              </h2>
              <div className="about__lines flex items-center gap-[4px] mb-[24px]">
                <span className="block h-[4px] w-[45px] bg-[#1D1D27]"></span>
                <span className="block h-[4px] w-[4px] bg-[#1D1D27]"></span>
              </div>
              <p className="text-[#888] text-[16px] mb-[24px]">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
                sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
                et sit, sed stet no labore lorem sit. Sanctus clita duo justo et
                tempor eirmod magna dolore erat amet
              </p>
              <div className="flex mb-[24px]">
                <div className="w-[241px] flex flex-col gap-[16px]">
                  <span className="flex items-center gap-[8px] font-medium">
                    <FaCheck className="text-[#2124B1]" />
                    Award Winning
                  </span>
                  <span className="flex items-center gap-[8px] font-medium">
                    <FaCheck className="text-[#2124B1]" />
                    Professional Staff
                  </span>
                </div>
                <div className="w-[241px] flex flex-col gap-[16px]">
                  <span className="flex items-center gap-[8px] font-medium">
                    <FaCheck className="text-[#2124B1]" />
                    24/7 Support
                  </span>
                  <span className="flex items-center gap-[8px] font-medium">
                    <FaCheck className="text-[#2124B1]" />
                    Fair Prices
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-[16px]">
                <Link
                  to="/"
                  className="bg-[#1c1f96] text-white font-medium transition-all py-[8px] px-[24px] rounded-full hover:bg-[#1a1d8e]"
                >
                  Read More
                </Link>
                <span className="cursor-pointer flex text-[#2124B1] justify-center items-center border-[1px] w-[36px] h-[36px] rounded-full border-[#2124B1] transition-all hover:bg-[#2124B1] hover:text-white">
                  <FaFacebookF />
                </span>
                <span className="cursor-pointer flex text-[#2124B1] justify-center items-center border-[1px] w-[36px] h-[36px] rounded-full border-[#2124B1] transition-all hover:bg-[#2124B1] hover:text-white">
                  <FaTwitter />
                </span>
                <span className="cursor-pointer flex text-[#2124B1] justify-center items-center border-[1px] w-[36px] h-[36px] rounded-full border-[#2124B1] transition-all hover:bg-[#2124B1] hover:text-white">
                  <FaInstagram />
                </span>
                <span className="cursor-pointer flex text-[#2124B1] justify-center items-center border-[1px] w-[36px] h-[36px] rounded-full border-[#2124B1] transition-all hover:bg-[#2124B1] hover:text-white">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </section>
      <div data-aos="zoom-in-up">
        <section className="newsletter relative bg-[#2124B1] h-[260px] py-[48px] mb-[80px] text-white">
          <div className="site-container flex justify-center gap-[225px]">
            <div className="mt-[10px]">
              <h2 className="newsletter__title text-[30px] font-bold leading-[1.2] mb-[12px]">
                Ready to get started
              </h2>
              <p className="text-[15px] mb-[16px]">
                Diam elitr est dolore at sanctus nonumy.
              </p>
              <form className="w-[438px]">
                <label className="w-full relative">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-[600px] py-[10px] pl-[24px] pr-[48px] leading-[1.5] text-[#888] outline-none border-none rounded-full"
                  />
                  <button
                    type="button"
                    className="absolute w-[48px] h-[44px] bg-transparent text-[22px] top-[-12px] right-0 rounded-tr-full rounded-br-full"
                  >
                    <FaPaperPlane className="ml-[5px] text-[#2124B1]" />
                  </button>
                </label>
              </form>
            </div>
            <div className="block w-[510px]">
              <img
                src={newsletterImg}
                alt=""
                width={416}
                className="absolute right-[185px]"
              />
            </div>
          </div>
        </section>
      </div>
      {/* Team Section */}
      <div className="grid justify-center items-center py-[48px]">
        <div className="site-container flex flex-col mt-[400px]">
          <div className="flex flex-col items-center text-center mb-[48px]">
            <h5 className="portfolio__name text-[#2124B1] font-medium mb-[8px] flex">
              <div className="relative block mr-[25px]">
                <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[5px] left-[3px]"></span>
                <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[8px] left-0"></span>
              </div>
              Our Projects
            </h5>
            <h2 className="portfolio__title text-[#1D1D27] text-[32px] leading-[1.2] mb-[8px] font-bold">
              Recently Launched Projects
            </h2>
            <div className="portfolio__lines flex items-center gap-[4px]">
              <span className="block h-[4px] w-[45px] bg-[#1D1D27]"></span>
              <span className="block h-[4px] w-[4px] bg-[#1D1D27]"></span>
            </div>
          </div>
          <div className="flex">
            {data.map((item, index) => {
              return (
                <div key={index} className="team flex gap-[50px]">
                  <div className="bg__color mt-[50px] bg-[#fff]` rounded-2xl h-[510px] px-[20px] py-[30px] w-[350px] shadow-2xl shadow-[#f3f4f9f9]">
                    <div className="text-[#2124B1]">
                      <p className="icon w-[45px]  h-[45px]  rounded-[50px] mt-[12px] grid justify-center items-center text-center text-[18px]">
                        {" "}
                        {item.face}
                      </p>
                      <p className="icon w-[45px] h-[45px]  rounded-[50px] mt-[12px] grid justify-center items-center text-center text-[18px]">
                        {" "}
                        {item.twit}{" "}
                      </p>
                      <p className="icon w-[45px] h-[45px]  rounded-[50px] mt-[12px] grid justify-center items-center text-center text-[18px]">
                        {" "}
                        {item.insta}{" "}
                      </p>
                      <p className="icon w-[45px] h-[45px]  rounded-[50px] mt-[12px] grid justify-center items-center text-center text-[18px]">
                        {" "}
                        {item.in}
                      </p>
                    </div>
                    <div className="mt-[190px]">
                      <p className="text text-[20px] font-bold text-[#1D1D27]">
                        {item.name}
                      </p>
                      <p className="text text-[#978888]">{item.job}</p>
                    </div>
                  </div>
                  <div className="image  z-1 ml-[-320px]">
                    <img
                      className="w-[370px] rounded-2xl h-[480px]"
                      src={item.img}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
