const express = require("express");
const Cloze = require("../Model/cloze.model");

const clozeRouter = express.Router();

// Method : GET 
clozeRouter.get("/all/:userId", async (req, res) => {
  const {userId} = req.params;
  try {
    const allQuestion = await Cloze.find({ userId });
    res.status(200).json({ success: true, data: allQuestion });
  } catch (error) {
    console.error("Error retrieving user-specific MCQs:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

// Method : PSOT
clozeRouter.post("/add", async (req, res) => {
  try {
    const newQuestion = new Cloze(req.body);
    await newQuestion.save();
    res.json({ success: true, message: "Cloze question saved successfully" });
  } catch (error) {
    console.error("Error saving Cloze:", error);
    res.status(500).json({ success: false, message: "Internal Server Error", error });
  }
});

module.exports = { clozeRouter };
