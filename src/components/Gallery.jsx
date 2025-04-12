import React, { useEffect, useState } from "react"; // Added useState
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, onRemove }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(
          "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"
        );
        const data = await response.json();
        setTours(data); // Directly set the fetched tours
        setLoading(false);
      } catch (error) {
        setError(error.message); // Set error state if fetch fails
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, [setTours]);

  // Loading and error states
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          name={tour.name}
          info={tour.info}
          price={tour.price}
          image={tour.image}
          onRemove={onRemove}
        />
      ))}
    </section>
  );
};

export default Gallery;
