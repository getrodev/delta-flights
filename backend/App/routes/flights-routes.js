const express = require('express');

const flightsControllers = require('../controllers/flights-controllers');

const router = express.Router();

router.get('/', flightsControllers.getFlights)
router.get('/:destorigin', flightsControllers.getFlightsByDestinationOrigin);
router.get('/search', flightsControllers.getFlightsByAutoComplete);

module.exports = router;