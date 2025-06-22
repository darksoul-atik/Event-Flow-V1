import React, { useContext, useEffect } from "react";
import Slider from "../Components/Slider";
import LogoMarquee from "../Components/LogoMarquee";
import { EventContext } from "../Contexts/EventsContext";
import EventCard from "../Components/EventCard";
import { useLoaderData } from "react-router";
import ReviewCard from "../Components/ReviewCard";
import Marquee from "react-fast-marquee";
import Counter from "../Components/Counter";
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { GooglePlayButton } from "react-mobile-app-button";
import { AppStoreButton } from "react-mobile-app-button";
import AuthContext from "../Contexts/AuthContexts";
import { ToastContainer } from "react-toastify";
import { ToastContext } from "../Contexts/ToastContext";

const Home = () => {
  const { events } = useContext(EventContext);
  const reviewData = useLoaderData();
  const { logged, setLogged, loggedOut, setLoggedOut } =
    useContext(AuthContext);

  const { showToast } = useContext(ToastContext);

  // Showing Login Toast
  useEffect(() => {
    if (logged) {
      showToast("Login Successfully");
      setLogged(false);
    }
  }, [logged, showToast, setLogged]);

  //Showing Logged out Toast

  useEffect(() => {
    if (loggedOut) {
      showToast("Log Out Successfully!");
      setLoggedOut(false);
    }
  }, [loggedOut, setLoggedOut, showToast]);

  return (
    <div className="">
      <Helmet>
        <title>EventFLOW | Home</title>
      </Helmet>

      {/* Slider Container */}
      <div>
        <Slider></Slider>
      </div>

      {/* Logo Container */}
      <h1 className="text-cwhite text-center mt-10 text-2xl max-sm:text-xl">
        Our Sponsores Worldwide
      </h1>
      <div>
        <LogoMarquee></LogoMarquee>
      </div>
      {/* FramerMotion Controlling Div */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 2.3,
          ease: "easeInOut",
        }}
        viewport={{ once: true, amount: 0.05 }}
      >
        {/* Event Card */}
        <h1 className="text-left text-4xl text-cwhite mt-40 mb-10 max-sm:text-2xl md:text-center max-sm:text-center">
          Upcoming Events
        </h1>
        <div className="lg:grid grid grid-cols-1 lg:grid-cols-2 md:grid md:grid-cols-1 md:px-5  gap-10 mb-40 max-sm:px-2">
          {events.map((event) => (
            <EventCard key={event.id} event={event}></EventCard>
          ))}
        </div>
      </motion.div>

      {/* Review Card */}
      <div className="mb-40">
        <h2 className="text-4xl text-cwhite text-center mb-4 max-sm:text-xl">
          What People Are Saying
        </h2>

        <Marquee pauseOnHover={false} speed={40} gradient={false}>
          <div className="flex ">
            {reviewData.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </Marquee>
      </div>

      <div>
        <Counter></Counter>
      </div>

      {/* App Section */}
      <div className="flex flex-col  md:flex-row items-center justify-between gap-6 my-30 p-6  rounded-2xl">
        {/* Phone Preview */}

        <div className="lg:w-1/2 md:w-1/2 flex justify-center w-full max-sm:w-[300px] ">
          <div className="mockup-phone mx-auto max-sm:w-[200px] ">
            <div className="mockup-phone-camera max-md:w-auto w-2/5 mx-auto"></div>
            <div className="mockup-phone-display flex justify-center items-center max-sm:w-auto  md:w-auto mx-auto">
              <img
                className="h-full w-full object-contain rounded-2xl"
                alt="wallpaper"
                src="https://i.ibb.co/C4kfvHy/dweadasdas.jpg"
              />
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-6xl font-bold text-corange mb-3">
            Experience Events <br /> Like Never Before — Download the App Today!
          </h1>
          <p className="text-cwhite/80">
            Stay connected, discover new experiences, and never miss a moment.
            Our app is free and built just for you.
          </p>
          <div className="flex max-sm:justify-center  p-2 mt-10 gap-5">
            <GooglePlayButton title="" height={100} theme="dark" />
            <AppStoreButton height={100} theme="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
