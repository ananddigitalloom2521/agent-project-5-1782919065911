const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: String,
  role: String
});
const vacationRequestSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: Date,
  endDate: Date,
  status: String
});
const User = mongoose.model('User', userSchema);
const VacationRequest = mongoose.model('VacationRequest', vacationRequestSchema);
module.exports = { User, VacationRequest };