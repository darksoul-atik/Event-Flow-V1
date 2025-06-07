import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Slider = () => {
  const images = [
    "https://i.ibb.co/bj79CH8z/britt-gaiser-h-SAlu33pad-A-unsplash.jpg",
    "https://i.ibb.co/LzMXVPFw/stem-list-EVgs-Ab-L51-Rk-unsplash.jpg",
    "https://i.ibb.co/NdkX1R55/andrei-stratu-kc-Js-Q3-PJr-YU-unsplash.jpg",
    "https://i.ibb.co/7J4CjXvN/chuttersnap-Q-Kdj-Kxnt-H8-unsplash.jpg",
    "https://i.ibb.co/Mx4cm4xB/evangeline-shaw-nw-LTVwb7-Db-U-unsplash.jpg",
  ];

  const eventTitles = [
    "Make your event more meaningful and memorable",
    "Celebrate moments that matter the most",
    "Turning your vision into unforgettable reality",
    "Creating memories that last a lifetime",
    "Where every detail tells your story",
  ];

  return (
    <div className="max-w-screen-2xl  mt-10 w-full mx-auto ">
      <div className=" w-full h-[60vh] rounded-2xl shadow-md overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          speed={1500}
          parallax={true}
          className="h-full"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="h-full">
              <div className="relative w-full h-full">
                <img
                  src={src}
                  alt={`slide-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-opacity-25 flex items-center justify-center max-sm:-top-50  px-4 rounded-lg">
                  <h2 className="text-center  drop-shadow-[0_0_6px_rgba(0,0,0,50)] text-corange text-3xl animate-fadeUp lg:text-6xl font-semibold max-w-3xl ">
                    {eventTitles[index % eventTitles.length]}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
