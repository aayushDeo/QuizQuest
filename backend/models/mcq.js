const mongoose = require('mongoose');
const { Schema } = mongoose;

const mcqSchema = new Schema({
  admin_id: {
    type: mongoose.Types.ObjectId,
    ref: "user", 
    required: true,
  },
  question: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  option1: {
    type: String,
    required: true
  },
  option2: {
    type: String,
    required: true
  },
  option3: {
    type: String,
    required: true
  },
  option4: {
    type: String,
    required: true
  },
  correctOption: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const MCQ = mongoose.model('MCQ', mcqSchema);

module.exports = MCQ;
 