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

const getFlightsAutoComplete = async(req, res, next) => {
  try {
    let results;
    if (req.query.name) {
      results = await Flight.aggregate([
        {
          $search: {
            index: "autocomplete",
            autocomplete: {
              query: req.query.name,
              path: {
                'wildcard': '*'
              },
              fuzzy: {
                maxEdits: 1,
              },
              tokenOrder: "sequential",
            },
          },
        },
        {
          $project: {
            name: 1,
            _id: 1,
          },
        },
        {
          $limit: 10,
        },
      ]);
      if (results) return res.send(results);
      console.log(results);
    }
    res.send([]);
  } catch (error) {
    res.send([]);
  }
};

exports.getFlights = getFlights;
exports.getFlightsByDestinationOrigin = getFlightsByDestinationOrigin;
exports.getFlightsAutoComplete = getFlightsAutoComplete; 

