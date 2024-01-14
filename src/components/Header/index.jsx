import React, { useState, useEffect } from "react";

// styles
import "./style.css";

// react icons
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate()
  const pages = () => {
    navigate()
  }
  const team = () => {
    navigate('/team')
  }
  const test = () => {
    navigate('/testimonial')
  }
  const not = () => {
    navigate('/notFound')
  }
  return (
    <div className="absolute left-0 w-full">
      <header
        className={`header fixed w-[1550px] z-[1000] ${scrolled
          ? "bg-white shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)]"
          : `border-b-[0.01px] border-b-[#4778f550] w-[1321px] ml-[100px] text-[#f7faff]`
          }`}
      >
        <div className={` ${scrolled ? 'pl-12 pr-24 flex justify-between items-center' : 'site-container flex justify-between items-center'}`}>
          {/* LOGO */}
          <a
            href=""
            className={`logo text-[40px] leading-[1] flex items-end font-bold ${scrolled ? "text-[#2124B1]" : " text-[#f7faff]"
              }`}
          >
            <FaSearch className="mr-[8px]" />
            SEO<span className="text-xl">Master</span>
          </a>
          {/* NAVBAR */}
          <nav className="sitenav">
            <ul className="sitenav__list flex items-center gap-[25px]">
              <li className="sitenav__item">
                <Link
                  to="/"
                  className={`block border-b-[2px] border-b-transparent transition-all hover:text-[#4777F5] hover:border-b-[#4777F5] ${scrolled ? "py-[20px]" : "py-[35px]"
                    }`}
                >
                  Home
                </Link>
              </li>
              <li className="sitenav__item">
                <Link
                  to="about"
                  className={`block border-b-[2px] border-b-transparent transition-all hover:text-[#4777F5] hover:border-b-[#4777F5] ${scrolled ? "py-[20px]" : "py-[35px]"
                    }`}
                >
                  About
                </Link>
              </li>
              <li className="sitenav__item">
                <Link
                  to="service"
                  className={`block border-b-[2px] border-b-transparent transition-all hover:text-[#4777F5] hover:border-b-[#4777F5] ${scrolled ? "py-[20px]" : "py-[35px]"
                    }`}
                >
                  Service
                </Link>
              </li>
              <li className="sitenav__item">
                <Link
                  to="project"
                  className={`block border-b-[2px] border-b-transparent transition-all hover:text-[#4777F5] hover:border-b-[#4777F5] ${scrolled ? "py-[20px]" : "py-[35px]"
                    }`}
                >
                  Projects
                </Link>
              </li>
              <li className="sitenav__item">
                <Link
                  className={`block border-b-[2px] border-b-transparent transition-all hover:text-[#4777F5] hover:border-b-[#4777F5] ${scrolled ? "py-[20px]" : "py-[35px]"
                    }`}
                >
                  <div>
                    <select className={`custom-select ${scrolled ? "bg-[#fff]" : "bg-[#2124B1] border-none"}`} onChange={(e) => window.location.href = e.target.value}>
                      <option className="px-[30px]" value="/">Pages</option>
                      <option className="px-[30px]" value="/team">Our Team</option>
                      <option className="px-[30px]" value="/testimonial">Testimonial</option>
                      <option className="px-[30px]" value="/notFound">404 Page</option>
                    </select>

                  </div>
                </Link>
              </li>
              <li className="sitenav__item">
                <Link
                  to="contact"
                  className={`block border-b-[2px] border-b-transparent transition-all hover:text-[#4777F5] hover:border-b-[#4777F5] ${scrolled ? "py-[20px]" : "py-[35px]"
                    }`}
                >
                  Contact
                </Link>
              </li>
              <li className="sitenav__item">
                <button className="bg-transparent py-[6px] px-[12px] border-none text-[#4777F5]">
                  <FaSearch />
                </button>
              </li>
              <li className="sitenav__item">
                <Link
                  to="https://htmlcodex.com/startup-company-website-template/"
                  target="_blank"
                  className="bg-[#4777F5] text-[#F7FAFF] py-[12px] px-[24px] leading-[1.5] rounded-[20px] text-base font-semibold transition-all hover:bg-[#638bf7]"
                >
                  Pro Version
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* FULL SCREEN SEARCH */}
    </div>
  );
};

export default Header;
