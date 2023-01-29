

const verityJwt = (req, res, next) => {
    console.log('middleware');
    next()
}

module.exports = verityJwt;