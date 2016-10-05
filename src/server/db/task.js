// import mongoose for schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define our model
var taskSchema = new Schema({
  owner: String,
  title: { type: String, required: true },
  description: { type: String, required: true },
  hours: Number,
  volunteer: Boolean,
  dollarValue: Number,
  location: {},
  category: String,
  image: '',
  assignedTo: String,
  completed: Boolean
});


// model class
module.exports = mongoose.model('task', taskSchema);