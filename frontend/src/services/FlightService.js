import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const get = id => {
  return http.get(`/${id}`);
};

const findByTitle = title => {
  return http.get(`/search?title=${title}`);
};

const FlightService = {
  getAll,
  get,
  findByTitle
};

export default FlightService;