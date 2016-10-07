// import mongoose for schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our model
var serviceSchema = new Schema({
  ownerName: String,
  ownerEmail: String,
  category: String,
  description: String,
  rate: Number,
  title: String,
  location: {},
  volunteer: Boolean

});


// model class
module.exports = mongoose.model('service', serviceSchema);