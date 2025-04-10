import React, {useState, useEffect} from "react";
import TourCard from "./TourCard";

// Gallery component is respoinsible for fetching tours and rendering the list

const Gallery = ({ tours, setTours, onRemove }) => {
    // local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // function to fetch tours from the API: https://course-api.com/react-tours-project
    const fetchTours = async () => {
        try {
            const res = await fetch("https://cors-anywhere.herokuapp.com/https://course-api.com/react-tours-project");
            // Maps the api to only the required data
            const tourData = data.map((tour) => ({
                id: tour.id,
                name: tour.name,
                info: tour.info,
                price: tour.price,
                image: tour.image
            }));
            setTours(tourData); // set the tours data to the state
            setLoading(false); // set loading to false
        } catch (error) {
            setError(true); // if fetch fails, set error to true
            setLoading(false); // set loading to false
        }
    };

    // run fetchTours when the component mounts
    useEffect(() => {
        fetchTours();
    }, []);

    // render loading state 
    if (loading) {
        return <h2>Loading...</h2>;
    }
    // render error state
    if (error) {
        return <h2>Error Loading Tours</h2>;
    }
    // render if no tours available
    if (tours.length === 0) {
        return (
            <div className="tour-card">
                <h2>No Tours Available</h2>
                <button onClick={fetchTours}>Refresh</button>
            </div>
        );
    }

    // render the list of tourCards
    return (
        <section className="tour-list">
            {tours.map((tour) => {
                return <TourCard 
                key={tour.id} 
                {...tour} // Spread operator to pass all tour properties as props
                onRemove={onRemove} />; // Pass the remove function as a prop to TourCard
            })}
        </section>
    );
};


export default Gallery;