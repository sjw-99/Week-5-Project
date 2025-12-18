const Current = require('../models/Current')
const Student = require('../models/Student')

async function index(req, res) {
    try {
        const current_mission = await Current.getAll();
        res.status(200).json(current_mission);
    } catch(err) {
        res.status(500).json({error: err.message})
    }
}

async function addToStudents (req, res) {
    try {
        const scores = await Student.addScoreToStudent()
        res.status(201).json(scores)
        
    } catch (err) {
        res.status(501).json({error: err.message})
    }
}

async function clear (req, res) {
    try {
        await Current.clearTable()
        res.status(204).end()
    } catch (error) {
        res.status(504).json({error: err.message})
    }
}



async function show (req, res) {
    try {
        let question_id = req.params.question_id;
        const current = await Current.getOneQuestionById(question_id);
        res.status(200).json(current)
    } catch(err) {
        res.status(404).json({error: err.message})
    }
}

async function create (req, res) {
    try {
        const data = req.body;
        const newQuestion = await Current.create(data);
        res.status(201).json(newQuestion);
    } catch(err) {
        res.status(409).json({error: err.message});
    }
}



module.exports = {index,show,create,addToStudents,clear}