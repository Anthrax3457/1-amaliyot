import React from "react";

// components
import Breadcrumbs from "../../components/Breadcrumbs";

const Contact = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "Contact" },
  ];
  return (
    <>
      {/* Hero Section */}
      <div>
        <section className="hero bg-[#2124B1] py-[195px] h-[500px] text-white mb-[80px]">
          <div className="site-container flex justify-center gap-[48px]">
            <div className="max-w-[490px] text-center flex flex-col items-center">
              <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
                Contact Us
              </h1>
              <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
              <Breadcrumbs paths={paths} />
            </div>
          </div>
        </section>
        <div className=" grid justify-center text-center ">
          <h5 className="portfolio__name text-[#2124B1] justify-center font-medium mb-[8px] flex">
            <div className="relative  block mr-[25px]">
              <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[5px] left-[3px]"></span>
              <span className="block absolute w-[10px] h-[10px] bg-[rgba(33,66,177,0.5)] bottom-[8px] left-0"></span>
            </div>
            Contact Us
          </h5>
          <h2 className="portfolio__title text-[#1D1D27] text-[32px] leading-[1.2] mb-[8px] font-bold">
            Contact For Any Query
          </h2>
          <div className="portfolio__lines justify-center flex items-center gap-[4px]">
            <span className="block h-[4px] w-[45px] bg-[#1D1D27]"></span>
            <span className="block h-[4px] w-[4px] bg-[#1D1D27]"></span>
          </div>
        </div>
        <div className="grid gap-4 mt-10 justify-center">
          <div className="flex justify-center gap-4">
            <input type="text" placeholder="Your Name" className="border w-[300px] rounded-lg px-4 py-[14px]" name="" id="" />
            <input type="text" placeholder="Your Email" className="border w-[300px] rounded-lg px-4 py-[14px]" name="" id="" />
          </div>
          <input type="text" placeholder="Subject" className="border rounded-lg px-4 py-[14px]" name="" id="" />
          <textarea name="" className="border rounded-lg px-4 py-[14px]" placeholder="Message" id="" cols="30" rows="6"></textarea>
          <button className="py-4 rounded-xl text-white text-[18px] font-medium bg-[#2124B1]"  >   <a href="#"> Send Message </a></button>
        </div>
      </div>
    </>
  );
};

export default Contact;
