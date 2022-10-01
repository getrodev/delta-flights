import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const get = id => {
  return http.get(`/exactSearchFlights/${id}`);
};

const findByTitle = title => { 
  return http.get(`/autocompleteSearchLocations/${title}`);
};

const FlightService = {
  getAll,
  get,
  findByTitle
};

export default FlightService;