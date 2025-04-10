import React, {useState} from 'react';
import Gallery from './components/Gallery';

//Root component of the app
function App() {
  // Global state to hold list of tours
  const [tours, setTours] = useState([]);
  
  // Function to remove a tour from the list
  const removeTour = (id) =>{
    setTours((prevTours) => { prevTours.filter((tour) => tour.id !== id); });
  };

  return (
    <main>
      <h1>Tour Explorer</h1>
      {/* Pass state and handlers down to the Gallery component */}
      <Gallery tours={tours} onRemove={removeTour} />
      {/* Button to fetch tours */}
      <button onClick={() => setTours([])}>Fetch Tours</button>

    </main>
  )
}

export default App;