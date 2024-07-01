const MCQ = require("../models/mcq");
const asyncHandler = require('express-async-handler');

// @desc get all mcqs
// @route GET /api/MCQs
//  @access public
const getMCQ = async(req, res) => {
    const mcqs=await MCQ.find({});
    res.status(200).send({
      success:true , 
      message: 'mcq data' , 
      data : mcqs, 
  });
};
  
const createMCQ = async(req, res) => {
  console.log(req.user);
  const { question, subject, difficulty, option1,option2,option3,option4, correctOption } = req.body;

  if(!question|| !subject|| !difficulty|| !option1|| !option2|| !option3|| !option4|| !correctOption){
      res.status(400);
      throw new Error("All fields are mandatory");
  }

  const mcq = await MCQ.create({
      admin_id:req.user.id,
      question, 
      subject, 
      difficulty, 
      option1,
      option2,
      option3,
      option4, 
      correctOption
  });
  res.status(201).json(mcq);
};

const updateMCQ = async(req, res) => {
    const mcq = await MCQ.findById(req.params.id);
    if(!mcq){
        res.status(404);
        throw new Error("mcq not found");
    }

    // if(mcq.user_id.toString()!==req.user.id){
    //     res.status(403);
    //     throw new Error("User don't have permission to update other user mcqs");
    // }

    const updatedmcq = await MCQ.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );

    res.status(200).json(updatedmcq);
};

const deleteMCQ = async(req, res) => {
    const mcq= await MCQ.findByIdAndDelete(req.params.id);
    if(!mcq){
        res.status(404);
        throw new Error("mcq not found");
    }

    // if(mcq.user_id.toString()!==req.user.id){
    //     res.status(403);
    //     throw new Error("User don't have permission to update other user mcqs");
    // }

    await MCQ.deleteOne({_id:req.params.id});
    res.status(200).json(mcq);
};

module.exports = {getMCQ,  createMCQ, updateMCQ, deleteMCQ};