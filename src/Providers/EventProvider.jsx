import { useState, useEffect } from "react";
import { EventContext } from "../Contexts/EventsContext";

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error("Failed to load events:", error));
  }, []);

  const eventData = {
    events,
    setEvents,
  };

  return (
    <EventContext value={eventData}>
      {children}
    </EventContext>
  );
};

export default EventProvider;
