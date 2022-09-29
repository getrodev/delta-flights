const mongodb = require("mongodb").MongoClient; 
const csvtojson = require("csvtojson");
const mongoose = require('mongoose'); 

let url = "mongodb+srv://delta-flights:487ROTVESxWYgRbj@cluster0.clmg9z6.mongodb.net/?retryWrites=true&w=majority";
 
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


