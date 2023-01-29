const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")


exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).send({ error: 'Incorrect username or password' })
        };
        const isValidPassword = await bcrypt.compare(password, user.password)
        if (!isValidPassword) {
            return res.status(400).send({ error: 'Incorrect username or password' });
        }
        const token = jwt.sign(email, process.env.ACCESS_TOKEN)
        if (token) {
            return res.status(201).json({ message: "Login user successfully", data: user, token })
        }
    } catch (error) {
        return res.status(401).json({
            error: error.message,
            message: 'failed to login'
        })
    }
};
