import React from "react";
import './FlightsSuggestions.css';
  
const FlightsSuggestions = (props) => {
  let content; 
  if (!props.items || props.items.length === 0) {
    content = <p>Forgot the Airport code? Start typing a city and we'll give you a few Suggestions....</p>; 
  } else {
    content = (
      <ul className="suggestions-list">
        {props.items.map(flight => (
            <li key={flight.id}>
              <button >
                <span aria-label={flight.destination}
                  id={flight.id}>{flight.destination}{flight.origin}</span>
              </button>
            </li>
          ))
        }
      </ul>
    );
  }
  return <section id="flights">{content}</section>
}; 

export default FlightsSuggestions;