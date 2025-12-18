const Question = require('../models/Question')
const Current = require('../models/Current')

async function index(req, res) {
    try { 
      const topics = await Question.getAll()
      res.status(200).json(topics)
    } catch(err) {
        res.status(500).json({'error test': err.message})
    }
}

async function showOne(req, res) {
  try {
    const question_id = parseInt(req.params.question_id);
    const question_full = await Question.getQuestionById(question_id)
    await Current.addQuestionToCurrent(question_id);
    res.status(200).json(question_full);
  } catch (err) {
    res.status(404).json({ "error": err.message })
  }
}



async function submit(req, res) {

}

module.exports = { index, showOne, submit }