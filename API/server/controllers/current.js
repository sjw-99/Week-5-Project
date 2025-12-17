const Current = require('../models/Current')
const Student = require('../models/Student')

async function index(req, res) {
    
    try {
        const current_mission = await Current.getAll();
        res.status(200).json(current_mission);
        await Student.addScoreToStudent()
        await Current.clearTable()
    } catch(err) {
        res.status(500).json({'error test': err.message})
    }
}

async function show (req, res) {
    try {
        let question_id = req.params.question_id;
        const current = await Current.getOneQuetsionById(question_id);
        res.status(200).json(current)
    } catch(err) {
        res.status(404).json({error: err.message})
    }
}

async function update (req, res) {
    try {
        const question_id = req.params.question_id;
        const data = req.body;
        const current = await Country.getOneQuetsionById(question_id);
        const result = await current.update(data);
        res.status(200).json(result);
    } catch (err) {
        res.status(404).json({error: err.message})
    }
}



module.exports = {index,show,update}