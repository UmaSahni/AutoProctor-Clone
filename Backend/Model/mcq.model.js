const mongoose = require("mongoose");

const mcqSchema = mongoose.Schema({
  userId: {
    type: String, 
    required: true,
  },
  questionType: {
    type: String,
    required: true,
    default: "MCQ",
  },
  question: {
    type: String,
    required: true,
  },
  passage :{
    type:String,
    required:true
  },
  points: {
    type: Number,
  },
  options: [
    {
      text: {
        type: String,
        required: true,
      },
      isCorrect: {
        type: Boolean,
        required: true,
      },
    },
  ],
},{
    versionKey:false
}
);

const MCQ = mongoose.model("MCQ", mcqSchema);

module.exports = MCQ;
