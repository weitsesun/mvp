const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/stepData', { useNewUrlParser: true });

const Schema = mongoose.Schema;

const stepData = new Schema({
  date: String,
  curStep: Number
})

const StepData = mongoose.model('stepData', stepData);

module.exports = { StepData };