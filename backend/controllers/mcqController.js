const MCQ = require("../models/mcq");

// @desc get all mcqs
// @route GET /api/MCQs
//  @access public
const getMCQ = (req, res) => {
    res.status(200).json({ message: "Get all mcqs" });
};

const createMCQ = async(req, res) => {
    console.log(req.user);
    const { question, subject, difficulty, options, correctOption } = req.body;

    if(!question|| !subject|| !difficulty|| !options|| !correctOption){
        res.status(400);
        throw new Error("All fields are mandatory");
    }

    const mcq = await MCQ.create({
        user_id:req.user.id,
        question, 
        subject, 
        difficulty, 
        options, 
        correctOption
    });
    
    res.status(201).json(mcq);
};

const updateMCQ = (req, res) => {
    res.status(200).json({ message: `Update contact for ${req.params.id}` });
};

const deleteMCQ = (req, res) => {
    res.status(200).json({ message: `Delete mcq for ${req.params.id}` });
};

module.exports = {getMCQ,  createMCQ, updateMCQ, deleteMCQ};