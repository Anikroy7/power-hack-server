const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
module.exports.registration = async (req, res) => {

    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: "Invalid Data" })
        }
        let user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User Already Exist" })
        }

        // Sign jwt
        const payload = {
            email, name
        }
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: '1h' })
        if (token) {
            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = {
                name, email,
                password: hashedPassword
            }
            user = new User({ ...newUser })
            await user.save();
            return res.status(201).json({ message: "Register user successfully", data: user, token })
        }
    }
    catch (error) {
        return res.status(401).json({
            error: error.message,
            message: 'failed to register'
        })
    }
}