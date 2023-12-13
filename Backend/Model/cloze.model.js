const mongoose = require("mongoose");

const clozeSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  questionType: {
    type: String,
    required: true,
    default: "Cloze",
  },
  sentence: {
    type: String,
    required: true,
  },
  blanks: [ // This is array because it can have multiple blanks -> _____ , _____ , ______
    {
      index: {  // At perticular Index in the sentence where the blank occurs
        type: Number,
        required: true,
      },
      text: {
        type: Array, // The blacked word
        required:true
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
    },
  ],
  points: {
    type: Number
  },
});

const Cloze = mongoose.model("Cloze", clozeSchema);

module.exports = Cloze;
