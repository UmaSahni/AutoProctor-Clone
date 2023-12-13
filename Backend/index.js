const express = require ("express")
var cors = require('cors')
const { mcqRoutes } = require("./Routes/mcq.routes")
const { connection } = require("./db")
const { clozeRouter } = require("./Routes/cloze.routes")
require('dotenv').config()

const port = process.env.port

const app = express()
app.use(express.json()) // inbuilt middleware
app.use(cors())

// MCQ : Route
app.use("/mcq", mcqRoutes)

// CLOZE : Route
app.use("/cloze", clozeRouter) 

app.listen(port, async()=>{
    console.log(`connected to port ${port}`)
    try {
       await connection
        console.log("Data base connected")
    } catch (error) {
        console.log("Unable to connect database", err)
        res.send("Error", err)
    }
    
})