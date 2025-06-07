import React from "react";
import Slider from "../Components/Slider";
import LogoMarquee from "../Components/LogoMarquee";

const Home = () => {
  return (
    <div className="">
      {/* Slider Container */}
      <div>
        <Slider></Slider>
      </div>

      <h1 className="text-cwhite text-center mt-10 text-2xl">Our Sponsores worldwide</h1>


      <div>
        <LogoMarquee></LogoMarquee>
      </div>
    </div>
  );
};

export default Home;
