const Average = require('../models/Average')


async function index(req, res) {
    
    try {
        const averages = await Average.getAll();
        res.status(200).json(averages);

    } catch(err) {
        res.status(500).json({'error test': err.message})
    }
}

module.exports = {index}