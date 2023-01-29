const { mongoose, model } = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: [20, "name is too big"],
        minLength: [3, 'name is too short']
    },
    email: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
            }
        },
        message: props => `Invalid email: ${props.value}`
    },
    password: {
        type: String,
        required: true,
        minLength: [6, "Password should be more than 6"]

    },

})


const User = model('User', userSchema)

module.exports = User;
