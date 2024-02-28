import { Link, Outlet, useParams, useNavigate } from "react-router-dom";
import ErrorBlock from "../UI/ErrorBlock.jsx";
import Header from "../Header.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, deleteEvent } from "../../utils/http.js";
import { queryClient } from "../../utils/http.js";
import { useState } from "react";
import Modal from "../UI/Modal.jsx";

export default function EventDetails() {
  const [isDeleting, setIsDeleting] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ id, signal }),
    staleTime: 10000
  });
  const {
    mutate,
    isPending: isPendingDeletion,
    isError: isErrorDeletion,
    error: deleteError,
  } = useMutation({
    mutationFn: deleteEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["events"],
        refetchType: "none",
      });
      navigate("/events");
    },
  });

  const handleStartDelete = () => {
    setIsDeleting(true);
  };

  const handleStopDelete = () => {
    setIsDeleting(false);
  };

  const handleDelete = () => {
    mutate({ id });
  };
  return (
    <>
      {isDeleting && (
        <Modal onClose={handleStopDelete}>
          <h2>Are you sure?</h2>
          <p>This action can't be undone!</p>
          <div className="form-actions">
            {isPendingDeletion && <p>Deleting, please wait...</p>}
            {!isPendingDeletion && (
              <>
                <button onClick={handleStopDelete} className="button-text">
                  Cancel
                </button>
                <button onClick={handleDelete} className="button">
                  Confirm
                </button>
              </>
            )}
            {isErrorDeletion && (
              <ErrorBlock
                title="Failed to delete event."
                message={
                  deleteError.info?.message ||
                  "Failed to delete event. Try again later."
                }
              />
            )}
          </div>
        </Modal>
      )}
      <Outlet />
      <Header>
        <Link to="/events" className="nav-item">
          View all Events
        </Link>
      </Header>
      {isPending && (
        <div id="event-details-content" className="center">
          <p>Event details loading...</p>
        </div>
      )}
      {isError && (
        <ErrorBlock
          title="Error occured"
          message={error.info?.message || "Failed to fetch event details."}
        />
      )}
      {data && (
        <article id="event-details">
          <header>
            <h1>{data.title}</h1>
            <nav>
              <button onClick={handleStartDelete}>Delete</button>
              <Link to="edit">Edit</Link>
            </nav>
          </header>
          <div id="event-details-content">
            <img src={`http://localhost:3000/${data.image}`} alt={data.image} />
            <div id="event-details-info">
              <div>
                <p id="event-details-location">{data.location}</p>
                <time dateTime={`Todo-DateT$Todo-Time`}>
                  {data.date + " " + data.time}
                </time>
              </div>
              <p id="event-details-description">{data.description}</p>
            </div>
          </div>
        </article>
      )}
    </>
  );
}
