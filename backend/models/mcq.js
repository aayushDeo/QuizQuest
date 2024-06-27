const mongoose = require('mongoose');
const { Schema } = mongoose;

const mcqSchema = new Schema({
  user_id:{
        type: mongoose.Types.ObjectId,
        required:true,
        ref:"User",
  },
  question: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true,
    enum: ['Math', 'Science', 'History', 'Geography', 'Literature', 'Art', 'Music', 'Sports'] 
  },
  difficulty: {
    type: String,
    required: true,
    enum: ['Easy', 'Medium', 'Hard']
  },
  options: {
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
    }
  },
  correctOption: {
    type: String,
    required: true,
    enum: ['option1', 'option2', 'option3', 'option4']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});


const MCQ = mongoose.model('MCQ', mcqSchema);

module.exports = MCQ;
