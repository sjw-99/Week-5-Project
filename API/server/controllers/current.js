const Current = require('../models/Current')

async function index(req, res) {
    
    try {
        const current_mission = await Current.getAll();
        res.status(200).json(current_mission);
    } catch(err) {
        res.status(500).json({'error test': err.message})
    }
}


module.exports = {index}