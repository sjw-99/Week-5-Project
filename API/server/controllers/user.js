const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

async function register(req, res) {
    try {
        const data = req.body; // assign the req.body to data variable
        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS)); // generate a random salt
        data['password'] = await bcrypt.hash(data.password, salt); // assign the salt to data['password'] and hash them together
        const result = await User.create(data)

    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

async function login(req, res) {
    try {
        const data = req.body;
        const user = await User.getOneByUsername(data.username)
        
        const match = await bcrypt.compare(data.password, user.password)
        if (match) {
            const payload = {
                username: user.username
            }
            const sendToken = (err, token) => {
                if (err) {
                    throw new Error('Error in token generation')
                }
                res.status(200).json({"success": true, token: token}) // 
            }
            jwt.sign(payload, process.env.SECRET_TOKEN, { expiresIn: 3600 }, sendToken) // generate a token which lasts an hour and embeds username onto the payload
        } else {
            throw new Error('User could not be authenticated')
        }

    } catch(err) {
        res.status(401).json({ error: err.message})
    }
}