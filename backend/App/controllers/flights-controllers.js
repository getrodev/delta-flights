const HttpError = require('../models/http-error');
const Flight = require('../models/flight')


const getFlights = async(req, res, next) => {
  const flights = await Flight.find().exec();
  res.json(flights);
};

const getFlightsByDestinationOrigin = async(req, res, next) => {

  const destorigin = req.params.destorigin;
  const searchStr = destorigin.toUpperCase();
  const flights = await Flight.find().exec();

  const filterflights = flights.filter(p => {
    return p.destination === searchStr || p.origin === searchStr;
  });

  if (!flights) {
    throw new HttpError('Could not find a flight for the provided Destination Or Place of Origin.', 404);
  }
  res.json(filterflights); 
};



const getFlightsByAutoComplete = async(request, response) => {
  try {
      //const flights = await Flight.find().exec();
      let result = await Flight.find().aggregate([
          {
              "$search": {
                  "autocomplete": {
                      "query": `${request.query.query}`,
                      path: {
                        'wildcard': '*'
                      },
                      "fuzzy": {
                          "maxEdits": 2,
                          "prefixLength": 3
                      }
                  }
              }
          }
      ]).exec();
      response.send(result);
  } catch (e) {
      response.status(500).send({ message: e.message });
  }
};

exports.getFlights = getFlights;
exports.getFlightsByDestinationOrigin = getFlightsByDestinationOrigin;
exports.getFlightsByAutoComplete = getFlightsByAutoComplete;

