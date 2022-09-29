import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import FlightList from '../Flights/FlightList';
import Instructions from '../Instructions/Instructions';

import './App.css';


function App() {
  const [loadedFlights, setLoadedFlights] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // set search query 

  useEffect(() => {
    const fetchFlights = async () => {
      setIsLoading(true);
      const response = await fetch('http://localhost:4000/flights');

      const responseData = await response.json();

      setLoadedFlights(responseData.flights);
      setIsLoading(false);
    };

    fetchFlights();
  }, []);

  // const searchFlightHandler = async (searchStr) => {
  //   try {
  //     let hasError = false;
  //     const response = await fetch(`http://localhost:4000/flights/${searchStr}`, {
  //     });

  //     if (!response.ok) {
  //       hasError = true;
  //     }

  //     const responseData = await response.json();

  //     if (hasError) {
  //       throw new Error(responseData.message);
  //     }

  //   } catch (error) {
  //     alert(error.message || 'Something went wrong, please use our auto-suggestion feature!');
  //   }
  // };

  return (
   <React.Fragment>
      <Header />
      <Instructions />
      
      <main>
       
        {isLoading && <p className="loader">Loading...</p>}
        {!isLoading && <FlightList items={loadedFlights} />}
      </main>
    </React.Fragment>
  );
}

export default App;




