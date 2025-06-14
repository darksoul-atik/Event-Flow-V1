import React, { useContext, useEffect } from "react";
import { EventContext } from "../Contexts/EventsContext";
import { useParams } from "react-router";
import Error404Page from "./Error404Page";
import { toast, ToastContainer } from "react-toastify";
import { Helmet } from "react-helmet";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaMoneyBillAlt,
  FaUsers,
  FaGlobe,
  FaUniversity,
  FaEnvelope,
  FaPhoneAlt,
  FaTags,
  FaHandshake,
  FaRegClock,
} from "react-icons/fa";

const EventDetails = () => {
  const { events } = useContext(EventContext);
  const { id } = useParams();
  const event = events.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleReserve = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    toast(
      <span>
        Reservation confirmed for{" "}
        <span className="font-bold text-[#f99e72]">{name}</span>.
      </span>,
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
    e.target.reset();
  };

  if (!event) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-corange via-cwhite to-cdark p-6flex items-center justify-center">
        <Error404Page></Error404Page>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e2835] text-[#f5eddf] py-10 px-4">
      <Helmet>
        <title>EventFLOW | Event Details</title>
      </Helmet>
      <div className="w-full  min-h-screen mx-auto bg-[#2a3545] rounded-2xl overflow-hidden shadow-lg">
        {/* Thumbnail */}
        <div className="w-4/5 max-sm:h-72 max-sm:w-full max-sm:px-0 max-sm:py-0 lg:mt-10 mx-auto py-10 px-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg">
          <img
            src={event.thumbnail}
            alt={event.name}
            className="w-full h-full   max-sm:object-fill  rounded-2xl object-contain"
          />
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-[#dd4b4b]">
            {event.name}
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <span className="bg-[#f99e72] text-[#1e2835] px-3 py-1 rounded-full flex items-center gap-1">
              <FaTags /> {event.category}
            </span>

            <span className="bg-[#344154] px-3 py-1 rounded-full flex items-center gap-1">
              <FaMapMarkerAlt /> {event.location}
            </span>

            <span className="bg-[#344154] px-3 py-1 rounded-full flex items-center gap-1">
              <FaCalendarAlt /> {new Date(event.date).toLocaleDateString()}
            </span>

            <span
              className={`px-3 py-1 rounded-full flex items-center gap-1 ${
                event.entry_fee === 0
                  ? "bg-green-500 text-[#1e2835]"
                  : "bg-yellow-400 text-[#1e2835]"
              }`}
            >
              <FaMoneyBillAlt />
              {event.entry_fee === 0 ? "Free Entry" : `৳${event.entry_fee}`}
            </span>

            <span className="bg-[#344154] px-3 py-1 rounded-full flex items-center gap-1">
              <FaUsers /> Capacity: {event.capacity}
            </span>

            <span className="bg-[#344154] px-3 py-1 rounded-full flex items-center gap-1">
              <FaGlobe /> {event.is_online ? "Online Event" : "Physical Event"}
            </span>
          </div>

          {/* Description */}
          <p className="text-lg leading-relaxed">{event.description}</p>

          {/* Organizer & Contact */}
          <div className="space-y-2 text-base">
            <p className="flex items-center gap-2">
              <FaUniversity /> <strong>Organizer:</strong> {event.organizer}
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> <strong>Email:</strong>{" "}
              <a
                className="text-blue-400 underline"
                href={`mailto:${event.contact_email}`}
              >
                {event.contact_email}
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt /> <strong>Phone:</strong>{" "}
              <a
                className="text-blue-400 underline"
                href={`tel:${event.contact_phone}`}
              >
                {event.contact_phone}
              </a>
            </p>
          </div>

          {/* Sponsors */}
          {event.sponsors?.length > 0 && (
            <div className="mt-4">
              <p className="font-semibold text-lg flex items-center gap-2">
                <FaHandshake /> Sponsors:
              </p>
              <ul className="list-disc list-inside mt-1 space-y-1">
                {event.sponsors.map((sponsor, index) => (
                  <li key={index}>{sponsor}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Schedule */}
          {event.schedule?.length > 0 && (
            <div className="mt-6">
              <p className="font-semibold text-lg mb-2 flex items-center gap-2">
                <FaRegClock /> Event Schedule:
              </p>
              <ul className="space-y-2">
                {event.schedule.map((item, index) => (
                  <li key={index} className="border-l-4 border-[#dd4b4b] pl-4">
                    <span className="font-semibold">{item.time}</span> —{" "}
                    {item.activity}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <div className="border border-dashed my-10 "></div>
            <p className="flex items-center gap-2">
              <FaGlobe /> <strong>Registration:</strong>{" "}
            </p>

            <form
              onSubmit={handleReserve}
              className="fieldset max-sm:w-full md:w-3/5  w-1/5  flex flex-col items-start"
            >
              <label className="label text-corange">Name</label>
              <input
                type="text"
                className="input text-cdark placeholder-corange bg-cwhite "
                placeholder="Enter your name"
                name="name"
              />
              <label className="label  text-corange">Email</label>
              <input
                type="email"
                className="input text-cdark placeholder-corange bg-cwhite "
                placeholder="Enter your email"
                name="email"
              />
              <button className="btn  max-sm:btn-sm  text-corange btn-neutral mt-4">
                Reserve Seat
              </button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss={true}
                draggable={true}
                pauseOnHover={true}
                theme="dark"
                toastClassName="bg-[#1e2835] text-[#f5eddf] border border-[#f99e72] rounded-lg shadow-md"
                bodyClassName="text-sm font-medium flex items-center"
                progressClassName="bg-[#f99e72]"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
