import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense
      fallback={<p style={{ textAlign: "center" }}>Events loading...</p>}
    >
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Couldn't fetch events" }), {
    //   status: 500,
    // });
    return json({ message: "Couldn't fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

export const loader = () => {
  return defer({
    events: loadEvents(),
  });
};

export default EventsPage;
