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
              query: req.query.destination_full_name,
              path: "destination_full_name",
              fuzzy: {
                maxEdits: 1,
              },
              tokenOrder: "sequential",
            },
          },
        },
        {
          $project: {
            destination: 1,
            origin: 1,
            id: 1,
            //destination_full_name: 1,
            //origin_full_name: 1,
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

