const dotenv = require('dotenv');
dotenv.config();
const mongodb = require("mongodb").MongoClient; 
const csvtojson = require("csvtojson");
const mongoose = require('mongoose'); 

let url = process.env.MONGO_CONNECTION
 
csvtojson()
  .fromFile("flights.csv")
  .then(csvData => {
    console.log(csvData);

    mongodb.connect(
      url, 
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client 
          .db("test")
          .collection("flights")
          .insertMany(csvData, (err, res) => {
            if(err) throw err; 

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
      }
    );
  });


