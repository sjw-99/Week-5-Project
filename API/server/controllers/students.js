const Student = require('../models/Student')

async function index(req, res) {
    
    try {
        const average = await Student.getAverage();
        res.status(200).json(average);
        //adds the current mission to the summary table
        
    } catch(err) {
        res.status(500).json({'error test': err.message})
    }
}

module.exports = {}