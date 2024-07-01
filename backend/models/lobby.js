const mongoose = require('mongoose');
const { Schema } = mongoose;
// add timer
const lobbySchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  numOfQuestions: {
    type: Number,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  // time: {
  //   type: Date
  //   required: true
  // }
});
const Lobby = mongoose.model('Lobby', lobbySchema);
module.exports = Lobby;
