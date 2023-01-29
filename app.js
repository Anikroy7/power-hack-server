const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config()
const ragistrationRouter = require("./routes/register.route")

// middleware
app.use(cors())
app.use(express.json())

// routes
app.use('/api/registration', ragistrationRouter)

module.exports = app;