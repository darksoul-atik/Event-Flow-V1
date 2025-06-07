import React from "react";

import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  return (
    <div>
      <Marquee >
        <div className=" mt-10 max-sm:*:h-10 max-sm: flex justify-between  gap-20 items-center ">
        <img src="https://i.ibb.co/jZT6wmKZ/logo-1.png" alt="logo 1" />
        <img src="https://i.ibb.co/PH16B5p/logo-2.png" alt="logo 2" />
        <img src="https://i.ibb.co/G33THQ83/google.png" alt="logo 3" />
        <img src="https://i.ibb.co/VWGYB9kx/logo-4.png" alt="logo 4" />
        <img className="max-sm:mr-20" src="https://i.ibb.co/Z68F2Mpp/logo-5.png" alt="logo 5" />
        </div>
        
      </Marquee>
    </div>
  );
};

export default LogoMarquee;
