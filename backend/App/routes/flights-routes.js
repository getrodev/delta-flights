const express = require('express');

const flightsControllers = require('../controllers/flights-controllers');

const router = express.Router();

router.get('/', flightsControllers.getFlights)
router.get('/exactSearchFlights/:destorigin', flightsControllers.getFlightsByDestinationOrigin);
router.get('/autocompletSearchLocationsone/:destorigin', flightsControllers.getFlightsAutoComplete); // not in use
router.get('/autocompletSearchLocations/:destorigin', flightsControllers.getFindMatchingLocation);

module.exports = router;