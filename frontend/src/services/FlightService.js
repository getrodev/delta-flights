import http from "../http-common";

const getAll = () => {
  return http.get("/");
};

const getFlights = destorigin => {
  return http.get(`/flights/${destorigin}`);
};

const findByTitle = title => {
  return http.get(`/flights/search?title=${title}`);
};

const TutorialService = {
  getAll,
  getFlights,
  findByTitle
};

export default TutorialService;