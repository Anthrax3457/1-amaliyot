import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import {
  FaPhoneAlt,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaChevronRight,
  FaTelegramPlane,
  FaRegCopyright,
} from "react-icons/fa";
import footerImg from "../../assets/img/footer.png";
import { MdOutlineMail } from "react-icons/md";
import port1 from "../../assets/img/portfolio-1.jpg";
import port2 from "../../assets/img/portfolio-2.jpg";
import port3 from "../../assets/img/portfolio-3.jpg";
import port4 from "../../assets/img/portfolio-4.jpg";
import port5 from "../../assets/img/portfolio-5.jpg";
import port6 from "../../assets/img/portfolio-6.jpg";
// styles
import "./style.css";

const Footer = () => {
  return (
    <div className="grid justify-center mt-[100px] items-center  bg-[#2124B1]">
      <div className="flex relative justify-center items-center  h-[470px] w-[1200px] ">
        <img src={footerImg} className="h-[400px] " alt="" />
        <div className="absolute gap-[50px] flex justify-center items-center">
          <div className="flex gap-[40px]">
            <div className="grid gap-4">
              <div className="text-[#fff] font-medium tracking-normal text-[18px]">
                Get In Touch
              </div>
              <div className="flex justify-start items-center">
                <p className="text-[#fff] font-normal tracking-normal w-[30px] text-[16px]">
                  <IoLocationSharp />
                </p>
                <p className="text-[#fff] font-normal tracking-normal text-[14px]">
                  123 Street, New York, USA
                </p>
              </div>
              <div className="flex justify-start items-center">
                <p className="text-[#fff] font-normal tracking-normal w-[30px] text-[16px]">
                  <FaPhoneAlt />
                </p>
                <p className="text-[#fff] font-normal tracking-normal  text-[14px]">
                  +012 345 67890
                </p>
              </div>
              <div className="flex justify-start items-center">
                <p className="text-[#fff] font-normal tracking-normal w-[30px] text-[16px]">
                  <MdOutlineMail />
                </p>
                <p className="text-[#fff] font-normal tracking-normal text-[14px]">
                  info@example.com
                </p>
              </div>
              <div className="flex items-center gap-[6px] mt-2">
                <div className="text-[white] hover:text-[#2124B1] border-[0.3px] border-[#383AB9] active:outline active:outline-4 active:outline-[#888996] hover:bg-[white]   rounded-[50px] w-[40px] h-[40px] grid text-center justify-center items-center">
                  <p className=" text-[13px]">
                    <FaTwitter />
                  </p>
                </div>
                <div className="text-[white] hover:text-[#2124B1] border-[0.3px] border-[#383AB9] active:outline active:outline-4 active:outline-[#888996] hover:bg-[white]   rounded-[50px] w-[40px] h-[40px] grid text-center justify-center items-center">
                  <p className=" text-[13px]">
                    {" "}
                    <FaFacebookF />
                  </p>
                </div>
                <div className="text-[white] hover:text-[#2124B1] border-[0.3px] border-[#383AB9] active:outline active:outline-4 active:outline-[#888996] hover:bg-[white]   rounded-[50px] w-[40px] h-[40px] grid text-center justify-center items-center">
                  <p className=" text-[13px]">
                    {" "}
                    <FaYoutube />
                  </p>
                </div>
                <div className="text-[white] hover:text-[#2124B1] border-[0.3px] border-[#383AB9] active:outline active:outline-4 active:outline-[#888996] hover:bg-[white]   rounded-[50px] w-[40px] h-[40px] grid text-center justify-center items-center">
                  <p className=" text-[13px]">
                    {" "}
                    <FaInstagram />
                  </p>
                </div>
                <div className="text-[white] hover:text-[#2124B1] border-[0.3px] border-[#383AB9] active:outline active:outline-4 active:outline-[#888996] hover:bg-[white]   rounded-[50px] w-[40px] h-[40px] grid text-center justify-center items-center">
                  <p className=" text-[13xpx]">
                    {" "}
                    <FaLinkedinIn />
                  </p>
                </div>
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <p className="text-[#fff] font-medium tracking-normal text-[18px]">
                  Popular Link
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center hover:tracking-[2px] ease-in duration-300">
                  <p className="text-[#fff] font-normal  w-[30px] text-[16px]">
                    {" "}
                    <FaChevronRight />
                  </p>
                  <p className="text-[#fff] font-normal   text-[14px]">
                    About Us
                  </p>
                </div>
                <div className="flex items-center hover:tracking-[2px] ease-in duration-300">
                  <p className="text-[#fff] font-normal  w-[30px] text-[16px]">
                    <FaChevronRight />
                  </p>
                  <p className="text-[#fff] font-normal  text-[14px]">
                    Contact Us
                  </p>
                </div>
                <div className="flex items-center hover:tracking-[2px] ease-in duration-300">
                  <p className="text-[#fff] font-normal  w-[30px] text-[16px]">
                    <FaChevronRight />
                  </p>
                  <p className="text-[#fff] font-normal   text-[14px]">
                    Privacy Policy
                  </p>
                </div>
                <div className="flex items-center w-[180px] hover:tracking-[2px] ease-in duration-300">
                  <p className="text-[#fff] font-normal w-[30px] text-[16px]">
                    <FaChevronRight />
                  </p>
                  <p className="text-[#fff] font-normal text-[14px]">
                    Terms & Condition
                  </p>
                </div>
                <div className="flex items-center hover:tracking-[2px] ease-in duration-300">
                  <p className="text-[#fff] font-normal w-[30px] text-[16px]">
                    <FaChevronRight />
                  </p>
                  <p className="text-[#fff] font-normal  text-[14px]">Career</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-14">
            <div className="grid gap-4">
              <p className="text-[#fff]  font-medium tracking-normal text-[18px]">
                Project Gallery
              </p>
              <div className="grid items-center gap-2 grid-cols-3">
                <img className="w-[80px] h-[75px]" src={port1} alt="" />
                <img className="w-[80px] h-[75px]" src={port2} alt="" />
                <img className="w-[80px] h-[75px]" src={port3} alt="" />
                <img className="w-[80px] h-[75px]" src={port4} alt="" />
                <img className="w-[80px] h-[75px]" src={port5} alt="" />
                <img className="w-[80px] h-[75px]" src={port6} alt="" />
              </div>
            </div>
            <div className="grid items-center gap-4">
              <p className="text-[#fff]  font-medium tracking-normal text-[20px]">
                Newsletter
              </p>
              <p className="text-[#fff] font-normal tracking-normal  text-[16px]">
                Lorem ipsum dolor sit amet elit. <br /> Phasellus nec pretium
                mi. Curabitur <br /> facilisis ornare velit non vulpu
              </p>
              <div className="w-[270px] h-[50px] flex justify-center rounded-[50px] items-center bg-white">
                <input
                  placeholder="Your Email"
                  className="outline-none"
                  type="text"
                  name=""
                  id=""
                />
                <p className="text-[#2124B1] font-normal tracking-normal w-[30px] text-[30px]">
                  <FaTelegramPlane />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute mt-[400px]">
          <hr className="w-[1090px] h-[0.5px] border-none bg-[#383AB9]" />
          <div className="flex mt-6 gap-[355px]">
            <div className="flex gap-1 items-center">
              <p className="text-[14px] text-[#fff] font-normal tracking-normal ">
                <FaRegCopyright />
              </p>
              <div className="flex  text-[#fff] font-normal tracking-normal gap-[4px] text-[14px]">
                <p className="underline-offset-8 underline">Your Site Name,</p>{" "}
                <p> All Right Reserved. Designed By</p>{" "}
                <p className="underline-offset-8 underline">HTML Codex</p>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <p className="border-r-[1px] w-[60px] border-[#383AB9] text-[#fff] font-normal  text-[14px]">
                Home
              </p>
              <p className="border-r-[1px] w-[80px] border-[#383AB9] text-[#fff] font-normal  text-[14px]">
                Cookies
              </p>
              <p className="border-r-[1px] w-[60px] border-[#383AB9] text-[#fff] font-normal  text-[14px]">
                help
              </p>
              <p className=" text-[#fff] font-normal  text-[14px]">FQAs</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
