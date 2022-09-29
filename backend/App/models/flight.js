const mongoose = require('mongoose'); 

const Schema = mongoose.Schema; 

const flightSchema = new Schema({
  id: { type: Number, required: true},
  created_at: { type: Date, required: true},
  updated_at: { type: Date, required: true},
  flight_identifier: { type: String, required: true},
  flt_num: { type: Number, required: true},
  scheduled_origin_gate: { type: Number, required: true},
  scheduled_destination_gate: { type: Number, required: true},
  out_gmt: { type: Date, required: true},
  in_gmt: { type: Date, required: true},
  off_gmt: { type: Date, required: true},
  on_gmt: { type: Date, required: true},
  destination: { type: String, required: true},
  origin: { type: String, required: true},
  destination_full_name: { type: String, required: true},
  origin_full_name: { type: String, required: true}
}); 

module.exports = mongoose.model('Flight', flightSchema);