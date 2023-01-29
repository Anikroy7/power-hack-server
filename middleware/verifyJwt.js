const jwt = require('jsonwebtoken')

const verityJwt = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        const token = authorization.split(' ')[1];
        console.log(token);
        // veriry jwt
        const { email } = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.decodedEmail = email;
        next()
    } catch (error) {
        next('Forbidden access!!!')
    }
}

module.exports = verityJwt;