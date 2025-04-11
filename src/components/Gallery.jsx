import React, { useState, useEffect } from "react";
import TourCard from "./TourCard";

// Gallery component is responsible for fetching tours and rendering the list
const Gallery = ({ tours, onRemove }) => {
  const [fetchedTours, setFetchedTours] = useState([]);

  // Fetch tours data from the API on component mount
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch("https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project")        ;
        const data = await response.json();
        setFetchedTours(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, []);

  return (
    <section className="gallery">
      {fetchedTours.map((tour) => (
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