import React from "react";
import { BiError } from "react-icons/bi";

// styles
import "./style.css";

import Breadcrumbs from "../../components/Breadcrumbs";

const NotFound = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "404" },
  ];
  return(
  <div>
    <section className="hero bg-[#2124B1] h-[500px] py-[195px] text-white mb-[80px]">
      <div className="site-container flex justify-center gap-[48px]">
        <div className="max-w-[490px] text-center flex flex-col items-center">
          <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
          Not Found
          </h1>
          <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
          <Breadcrumbs paths={paths} />
        </div>
      </div>
    </section>
    <div className="grid justify-center">
      <div className="grid w-[600px] justify-center text-center">
        <p className="text-[100px] grid justify-center  text-[#2124B1]"> <BiError /></p>
        <p className="text-[60px] font-extrabold  text-[#1D1D27]">404</p>
        <p className="text-[40px] font-semibold tracking-[-2px] text-[#333]">Page Not Found</p>
        <p className="w-[550px] text-[15px] text-[#7D7D9A] mt-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
        <div className="grid justify-center mt-7">
          <button className="w-[250px] py-4 rounded-[30px] font-medium text-white bg-[#2124B1]"><a href="#">Go Back To Home</a></button> 
        </div>
      </div>
    </div>
  </div>
  )
};

export default NotFound;
