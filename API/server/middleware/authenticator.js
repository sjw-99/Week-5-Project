const jwt = require('jswebtoken')

function authenticator(req, res, next) {
    const token = req.headers['authorisation']
    if(token) {
        jwt.verify(token, process.env.SECRET_TOKEN, async (err, data) => {
            if(err) {
                res.status(403).json({ error: "Unverified token"})
            } else {
                console.log(data)
                next()
            }
        })
    } else {
        res.status(403).json({ error: "Missing token"})
    }
}

module.exports = authenticator;