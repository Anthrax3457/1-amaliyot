import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


// styles
import "./style.css";

// images
import heroImg from "../../assets/img/hero.png";
import aboutImg from "../../assets/img/about.jpg";
import newsletterImg from "../../assets/img/newsletter.png";
import portfolio1 from "../../assets/img/portfolio-1.jpg";
import portfolio2 from "../../assets/img/portfolio-2.jpg";
import portfolio3 from "../../assets/img/portfolio-3.jpg";
import portfolio4 from "../../assets/img/portfolio-4.jpg";
import portfolio5 from "../../assets/img/portfolio-5.jpg";
import portfolio6 from "../../assets/img/portfolio-6.jpg";

import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";

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

// components
import Carousel from "../../components/carousel";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animatsiya davomiyligi (millisekundda)
      once: true, // faqatgina bir marta animatsiya ishlaydi
    });
  }, []);
  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio 1",
      category: "Design",
      imageUrl: portfolio1,
      duration: 600
    },
    {
      title: "Portfolio 2",
      category: "Development",
      imageUrl: portfolio2,
      duration: 1200
    },
    {
      title: "Portfolio 3",
      category: "Design",
      imageUrl: portfolio3,
      duration: 1800
    },
    {
      title: "Portfolio 4",
      category: "Development",
      imageUrl: portfolio4,
      duration: 2400
    },
    {
      title: "Portfolio 5",
      category: "Design",
      imageUrl: portfolio5,
      duration: 2800
    },
    {
      title: "Portfolio 6",
      category: "Development",
      imageUrl: portfolio6,
      duration: 3000
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  const data = [
    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team1,
      duration:500
    },

    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team2,
      duration:1500
    },

    {
      face: <FaFacebookF />,
      twit: <FaTwitter />,
      insta: <FaInstagram />,
      in: <FaLinkedinIn />,
      name: "Jhon Doe",
      job: "CEO",
      img: Team3,
      duration:3000
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-[#2124B1] py-[195px] text-white mb-[48px]">
        <div className="site-container flex justify-start gap-[160px]">
          <div className="max-w-[500px] px-9">
            <div data-aos="zoom-in-up">
              <h1
                className="hero__title  text-[40px] w-[650px] leading-[1.1] font-bold mb-[24px]"
              >
                All in one SEO tool need to grow your business rapidly
              </h1>
              <p
                className="hero__description text-base w-[600px] mb-[32px] "
              >
                Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet
                dolor sed justo kasd. Ut dolor sed magna dolor sea diam. Sit diam
                sit justo amet ipsum vero ipsum clita lorem
              </p>
            </div>
            <div className="hero__btns flex gap-[16px]">
              <div data-aos="fade-right">
                <Link
                  to=""
                  className="hero__btn text-black bg-[#f8fbff] py-[16px] px-[48px] border-[2px] border-transparent rounded-full"
                >
                  Free Quote
                </Link>
              </div>
              <div data-aos="fade-left">
                <Link
                  to="contact"
                  className="hero__btn py-[16px] px-[48px] border-[2px] transition-all border-[#F7FAFF] rounded-full hover:text-black hover:bg-[#f8fbff]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          {/* hero img */}
          <img src={heroImg} alt="" />
        </div>
      </section>
      {/* About Section */}
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
      {/* Newsletter Section */}
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
      {/* Portfolio Section */}
      <section className="portfolio py-[48px]">
        <div className="site-container">
          <div data-aos="zoom-in" >
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
          <div data-aos="zoom-in" >
            <div className="portfolio__filter">
              <ul className="portfolio__filter-list flex justify-center gap-[16px] mb-[48px]">
                <li
                  className={`portfolio__filter-item relative text-[#888] font-medium rounded-[10px] cursor-pointer py-[8px] pl-[16px] pr-[24px] ${selectedFilter === "All" && "active"
                    }`}
                  onClick={() => setSelectedFilter("All")}
                >
                  All
                </li>
                <li
                  className={`portfolio__filter-item relative text-[#888] font-medium rounded-[10px] cursor-pointer py-[8px] pl-[16px] pr-[24px] ${selectedFilter === "Design" && "active"
                    }`}
                  onClick={() => setSelectedFilter("Design")}
                >
                  Design
                </li>
                <li
                  className={`portfolio__filter-item relative text-[#888] font-medium rounded-[10px] cursor-pointer py-[8px] pl-[16px] pr-[24px] ${selectedFilter === "Development" && "active"
                    }`}
                  onClick={() => setSelectedFilter("Development")}
                >
                  Development
                </li>
              </ul>
            </div>
          </div>

          <div className="portfolio__items flex flex-wrap gap-[24px] justify-center">
            {filteredProjects.map((project, index) => (
              <div data-aos="zoom-in" data-aos-duration={project.duration}>
                <div
                  key={index}
                  className="portfolio__item relative w-[332px] h-[332px] rounded-[10px]"
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="rounded-[10px]"
                  />

                  <div className="portfolio__item-overlay opacity-0 absolute w-full h-full bg-[#2124b1] top-0 left-0 z-[1] rounded-[10px]">
                    <Link
                      to="portfolio"
                      className="absolute w-[90px] h-[90px] flex justify-center items-center text-[32px] top-0 right-0 text-[#2124B1]"
                    >
                      <FaPlus />
                    </Link>
                    <div className="absolute left-[30px] bottom-[30px]">
                      <small className="flex items-center gap-[8px] text-white text-sm mb-[4px]">
                        <FaFolder />
                        <p>{project.category}</p>
                      </small>
                      <h3 className="text-xl text-white font-medium">
                        Project Name
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      {/* Testimonial Section */}
      <div data-aos="zoom-in-up">
        <div className="py-[48px]">
          <Carousel />
        </div>
      </div>
      {/* Team Section */}
      <div div className="grid justify-center items-center py-[48px]" >
        <div className="site-container flex flex-col mt-[400px]">
          <div data-aos="zoom-in-up">
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
                <div data-aos="zoom-in-up"  data-aos-duration={item.duration}>
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

export default Home;
