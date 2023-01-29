const { mongoose, model } = require("mongoose");

const billingSchema = mongoose.Schema({
    fullName: {
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
    phone: {
        type: String,
        required: true,
        minLength: [11, 'Phone number should 11 characters']
    },
    payableAmount: {
        type: Number,
        required: true,
    }

})


const Billing = model('Billing', billingSchema)

module.exports = Billing;
