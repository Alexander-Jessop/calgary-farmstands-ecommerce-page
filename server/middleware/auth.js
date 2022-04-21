const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();

const auth = (req, res, next) => {
    try {
        console.log('req.cookies:', req.cookies);
        const token = req.cookies.token;
        if (!token)
            return res.status(401).json({ message: 'authorization denied' });
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log(verified);
        next();
    } catch (err) {
        console.log(err.message);
        res.status(401).json({ error: 'Unauthorized' });
    }
};

module.exports = auth;

