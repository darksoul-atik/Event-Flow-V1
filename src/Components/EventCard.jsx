import React from "react";

const EventCard = ({ event }) => {
  const {
    _id,
    name,
    thumbnail,
    category,
    date,
    location,
    entry_fee,
    _description,
  } = event;

  return (
       <div className="card lg:card-side  shadow-sm rounded-2xl ">

        <div className="w-full max-sm:rounded-tr-2xl max-sm:rounded-tl-2xl lg:max-w-[400px] md:h-full md:w-full lg:rounded-tl-2xl lg:rounded-bl-2xl  overflow-hidden">
          <img
            src={thumbnail}
            alt={name}
            className="w-full h-full lg:object-fit"
          />
        </div>

        <div className="card-body lg:rounded-tr-2xl lg:rounded-br-2xl max-sm:rounded-b-2xl bg-cwhite ">
          <h2 className="card-title">{name}</h2>
          <p className="text-corange font-semibold">{location}</p>
          <p>Event Date: {date}</p>
          <p className="font-bold">Entry Fee: {entry_fee!==0 ? entry_fee + " BDT" : "Free"}</p>
          <div className=" md:badge-sm badge badge-outline badge-error">{category}</div>
          <div className="card-actions justify-end">
            <button className="btn btn-sm bg-corange ">View Details</button>
          </div>
        </div>


      </div>
  );
};

export default EventCard;
