import React, { useState, useEffect } from "react";
import FlightDataService from "../../services/FlightService";

import Input from '../Input/Input';
import Button from '../Button/Button'

import './FlightsList.css'; 

const FlightsList = () => {
  const [flights, setFlights] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [flightSuggestions, setFlightSuggestions] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    getFlights();
    getFlightsSuggestions();
  }, [searchTitle]);

  const onChangeSearchTitle = e => {
    e.preventDefault();
    let searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };


  const getFlights = () => {
    FlightDataService.get(searchTitle)
      .then(response => {
        setFlights(response.data);
        console.log(response.data);
        setIsLoading(false);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const getFlightsSuggestions = () => {
    FlightDataService.findByTitle(searchTitle)
    .then(response => {
      setFlightSuggestions(response.data);
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  };

  return (
    <div className="App">
      <div className="container">
          <Button
              type="button"
              onClick={getFlights}
            >
              Search
          </Button>
          <Input
            type="text"
            className="Container"
            placeholder="Departure Or Arrival"
            value={searchTitle}
            onChange={onChangeSearchTitle}
          />
          {isLoading && <p className="loader">Your results are one click away. Loading...</p>}
          {!isLoading && flightSuggestions.length > 0 && flightSuggestions.map((flight) => <li key={flight}>{flight}</li>)}
          {console.log(flightSuggestions.length)}
      </div>  
      
      {!isLoading && flights.length>0 && <table>
        <tr>
          <th>Id</th>
          <th>Created</th>
          <th>Updated</th>
          <th>Flight_ID</th>
          <th>Flight_Number</th>
          <th>Origin_Gate</th>
          <th>Destination_Gate</th>
          <th>Out_Gmt</th>
          <th>In_Gmt</th>
          <th>Off_Gmt</th>
          <th>On_Gmt</th>
          <th>Destination</th>
          <th>Origin</th>
          <th>Destination_Name</th>
          <th>Origin_Name</th>
        </tr>
        {flights.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.id}</td>
              <td>{val.created_at}</td>
              <td>{val.updated_at}</td>
              <td>{val.flight_identifier}</td>
              <td>{val.flt_num}</td>
              <td>{val.scheduled_origin_gate}</td>
              <td>{val.scheduled_destination_gate}</td>
              <td>{val.out_gmt}</td>
              <td>{val.in_gmt}</td>
              <td>{val.off_gmt}</td>
              <td>{val.on_gmt}</td>
              <td>{val.destination}</td>
              <td>{val.origin}</td>
              <td>{val.destination_full_name}</td>
              <td>{val.origin_full_name}</td>
            </tr>
          )
        })}
      </table>}
    </div>
  );
}; 

export default FlightsList;