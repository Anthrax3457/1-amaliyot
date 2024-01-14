import React from "react";

// styles
import "./style.css";

// react icons
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

// images
import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";

// components
import Breadcrumbs from "../../components/Breadcrumbs";

const Team = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "Team" },
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
      duration: 500
    },

    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team2,
      duration: 1500
    },

    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team3,
      duration: 3000
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-[#2124B1] h-[500px] py-[195px] text-white mb-[48px]">
        <div className="site-container flex justify-center gap-[48px]">
          <div className="max-w-[490px] text-center flex flex-col items-center">
            <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
              Our Team
            </h1>
            <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
            <Breadcrumbs paths={paths} />
          </div>
        </div>
      </section>
      {/* Team Section */}
      <div div className="grid justify-center items-center py-[48px]" >
        <div className="site-container flex flex-col mt-[400px]">
          <div>
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
          </div>
          <div className="flex">
            {data.map((item, index) => {
              return (
                <div data-aos-duration={item.duration}>
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
                    <div className="image  z-1 ml-[-300px]">
                      <img
                        className="w-[370px] rounded-2xl h-[480px]"
                        src={item.img}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div >
    </>
  );
};

export default Team;
