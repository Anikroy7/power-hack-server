const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const dbConnect = () => {
    return mongoose.connect('mongodb://127.0.0.1:27017/power_hack')

}

module.exports = dbConnect;
