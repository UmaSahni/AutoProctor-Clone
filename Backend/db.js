const mongoose = require("mongoose")
require('dotenv').config()
// Connecting mongoDB atlas (database) with our backend server

const connection = mongoose.connect(process.env.mongoURL)

module.exports = {connection}