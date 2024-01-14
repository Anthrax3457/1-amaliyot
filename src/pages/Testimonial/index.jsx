import React from "react";

// components
import Breadcrumbs from "../../components/Breadcrumbs";
import Carousel from "../../components/carousel";

const Testimonial = () => {
  const paths = [
    { url: "/", label: "Home" },
    { url: "/", label: "Pages" },
    { url: "", label: "Testimonial" },
  ];
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-[#2124B1] h-[500px] py-[195px] text-white mb-[48px]">
        <div className="site-container flex justify-center gap-[48px]">
          <div className="max-w-[490px] text-center flex flex-col items-center">
            <h1 className="hero__title text-[40px] leading-[1.2] font-bold mb-[8px]">
              Testimonial
            </h1>
            <hr className="w-[90px] opacity-25 bg-white mb-[16px]"></hr>
            <Breadcrumbs paths={paths} />
          </div>
        </div>
      </section>
      {/* Testimonial Section */}
        <div >
          <Carousel />
        </div>
    </div>
  );
};

export default Testimonial;
