const mongoose = require("mongoose")

// Connecting mongoDB atlas (database) with our backend server

const connection = mongoose.connect("mongodb+srv://uma:uma@cluster0.g3tcjlo.mongodb.net/autoproctor?retryWrites=true&w=majority")

module.exports = {connection}