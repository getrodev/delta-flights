import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/FlightService";
import './FlightsSuggestions.css';
  
const FlightsSuggestions = (props) => {
  const [flights, setFlights] = useState([]);
  // const [searchTitle, setSearchTitle] = useState("");
  
  useEffect(() => {
    findByTitle();
  });

  const findByTitle = () => {
    FlightDataService.findByTitle(props.searchTitle)
      .then(response => {
        setFlights(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
      <div className="container">
       <p>Here are a few Suggestions....</p> 
      <ul>
        {
          flights.map(flight => (
            <li key={flight.id}>
              <button >
                <span aria-label={flight.destination_full_name}
                  id={flight.id}>{flight.destination_full_name}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}; 

export default FlightsSuggestions;