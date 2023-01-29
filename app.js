const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const registrationRouter = require("./routes/register.route")
const loginRouter = require("./routes/login.router")
const billingRouter = require("./routes/billing.route")


// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/registration', registrationRouter);
app.use('/api/login', loginRouter);
app.use('/api', billingRouter)



// Error handler
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(400).send({ message: "Something invalid occured" })
})


module.exports = app;