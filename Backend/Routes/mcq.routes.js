const express = require("express");
const MCQ = require("../Model/mcq.model");

const mcqRoutes = express.Router();

// Method: GET -> Access all mcq questions
mcqRoutes.get("/all/:userId", async (req, res) => {
  const { userId } = req.params;
  try {
    const mcqQuestions = await MCQ.find({ userId });
    res.status(200).json({ success: true, data: mcqQuestions });
  } catch (error) {
    console.error("Error retrieving user-specific MCQs:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Method: POST -> Add mcq type question
mcqRoutes.post("/add", async (req, res) => {
  const questionsArray = req.body; 
  try {
    // Iterate through the array and save each question individually
    for (const { userId, questionType, question, points, options, passage } of questionsArray) {
      const newQuestion = new MCQ({ userId, questionType, question, points, options, passage });
      await newQuestion.save();
    }

    res.json({ success: true, message: "MCQs saved successfully" });
  } catch (error) {
    console.error("Error saving MCQs:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", error });
  }
});

module.exports = { mcqRoutes };
