const jwt = require('jsonwebtoken')


const login = (req, res) => {
    const data = req.body
    const accessToken = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '60s',
    });
    res.cookie('accessToken', { accessToken }, { expires: new Date(Date.now() + 900000)});
    res.send({status: 'success', accessToken});
}

module.exports = {
    login
};