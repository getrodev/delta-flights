const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const flightsRoutes = require('./App/routes/flights-routes');
const HttpError = require('./App/models/http-error');
 
const app = express();

app.use(bodyParser.json());

// CORS Headers => Required for cross-origin/ cross-server communication
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS' 
  );
  next();
});

app.use('/flights', flightsRoutes); 


app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404); 
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500)
  res.json({message: error.message || 'An unknown error occurred!'});
});

// set port, listen for requests 
const PORT = process.env.PORT || 4000;



mongoose
  .connect("mongodb+srv://delta-flights:487ROTVESxWYgRbj@cluster0.clmg9z6.mongodb.net/?retryWrites=true&w=majority")  
  .then(() => {
    console.log('Connected to database!')
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}.`);
    });
  })
  .catch(err => {
    console.log(err);
  });