const Student = require('../models/Student')

async function clear(req,res) {
    
    try {
        const scores = await Student.addScoreToStudent()
        res.status(200).json(scores)
    } catch (err) {
        res.status(500).json({'error test': err.message})
    }
}

module.exports = {clear}