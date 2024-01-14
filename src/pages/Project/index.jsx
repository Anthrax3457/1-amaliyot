import React, { useState } from "react";
import { Link } from "react-router-dom";

// react icons
import { FaPlus, FaFolder } from "react-icons/fa";

// images
import portfolio1 from "../../assets/img/portfolio-1.jpg";
import portfolio2 from "../../assets/img/portfolio-2.jpg";
import portfolio3 from "../../assets/img/portfolio-3.jpg";
import portfolio4 from "../../assets/img/portfolio-4.jpg";
import portfolio5 from "../../assets/img/portfolio-5.jpg";
import portfolio6 from "../../assets/img/portfolio-6.jpg";

// components
import Breadcrumbs from "../../components/Breadcrumbs";

const Project = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "Project" },
  ];

  const [selectedFilter, setSelectedFilter] = useState("All");

  const projects = [
    {
      title: "Portfolio 1",
      category: "Design",
      imageUrl: portfolio1,
    },
    {
      title: "Portfolio 2",
      category: "Development",
      imageUrl: portfolio2,
    },
    {
      title: "Portfolio 3",
      category: "Design",
      imageUrl: portfolio3,
    },
    {
      title: "Portfolio 4",
      category: "Development",
      imageUrl: portfolio4,
    },
    {
      title: "Portfolio 5",
      category: "Design",
      imageUrl: portfolio5,
    },
    {
      title: "Portfolio 6",
      category: "Development",
      imageUrl: portfolio6,
    },
  ];

  const filteredProjects =
    selectedFilter === "All"
      ? projects
      : projects.filter((project) => project.category === selectedFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="hero bg-[#2124B1] h-[500px] py-[195px] text-white mb-[48px]">
        <div className="site-container flex justify-center gap-[48px]">
          <div className="max-w-[490px] text-center flex flex-col items-center">
            <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
              Project
            </h1>
            <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
            <Breadcrumbs paths={paths} />
          </div>
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
    </>
  );
};

export default Project;
