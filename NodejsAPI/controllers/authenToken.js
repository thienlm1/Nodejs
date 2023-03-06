var jwt = require('jsonwebtoken');
function authenToken(req, res, next) {
    try {
        const token = req.cookies.jwt
        console.log(token)
        // var origin = req.headers.origin;
        // res.setHeader('Access-Control-Allow-Origin', origin);
        // res.header('Access-Control-Allow-Methods', 'GET, OPTIONS');
        // res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        // res.header('Access-Control-Allow-Credentials', false);
        if (!token) {
            res.send({ status: 403 });
        }
        try {
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
            return next();
        } catch (e) {
            console.log(e);
            res.send({ status: 403 });
        }
    } catch (e) {
        res.send({ status: 403 });
    }
}

module.exports = {
    authenToken
};