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




module.exports = {index}