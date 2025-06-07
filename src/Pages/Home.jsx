import React, { useContext } from "react";
import Slider from "../Components/Slider";
import LogoMarquee from "../Components/LogoMarquee";
import { EventContext } from "../Contexts/EventsContext";
import EventCard from "../Components/EventCard";
import { useLoaderData } from "react-router";
import ReviewCard from "../Components/ReviewCard";
import Marquee from "react-fast-marquee";
import Counter from "../Components/Counter";
import { Helmet } from 'react-helmet';

const Home = () => {
  const { events } = useContext(EventContext);
  const reviewData = useLoaderData();

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

      {/* Event Card */}
      <h1 className="text-left text-4xl text-cwhite mt-40 mb-10 max-sm:text-2xl max-sm:text-center">
        Upcoming Events
      </h1>
      <div className="lg:grid grid grid-cols-1 lg:grid-cols-2 md:grid md:grid-cols-1 gap-10 mb-40 max-sm:px-2">
        {events.map((event) => (
          <EventCard key={event.id} event={event}></EventCard>
        ))}
      </div>

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

  
    </div>
  );
};

export default Home;
