const express = require("express");
const MCQ = require("../Model/mcq.model");

const mcqRoutes = express.Router();


// Method : GET -> Access all mcq questions 
mcqRoutes.get("/all/:userId", async(req, res)=>{
    const { userId } = req.params;
   try {
    const mcqQuestions = await MCQ.find({userId})
    res.status(200).json({ success: true, data: mcqQuestions });
   } catch (error) {
    console.error("Error retrieving user-specific MCQs:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
   }
})

// Method : POST -> Add mcq type question
mcqRoutes.post("/add", async (req, res) => {
    const {userId, questionType, question, points, options } = req.body;
    console.log(questionType, question, points, options )
  try {
    const Newquestion = new MCQ({userId, questionType, question, points, options});
    await Newquestion.save();
    res.json({ success: true, message: "MCQ saved successfully" });
  } catch (error) {
    console.error("Error saving MCQ:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", error });
  }
});

module.exports = { mcqRoutes };
