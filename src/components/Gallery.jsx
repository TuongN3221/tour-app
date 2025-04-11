import React, { useEffect } from "react";
import TourCard from "./TourCard";

const Gallery = ({ tours, setTours, onRemove }) => {
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(
          "https://api.allorigins.win/raw?url=https://course-api.com/react-tours-project"
        );
        const data = await response.json();
        setTours(data); // Directly set the fetched tours
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchTours();
  }, [setTours]);

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
