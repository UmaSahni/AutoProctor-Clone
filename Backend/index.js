const express = require ("express")

const { mcqRoutes } = require("./Routes/mcq.routes")
const { connection } = require("./db")
const port = 8080

const app = express()
app.use(express.json()) // inbuilt middleware

// Route for question type MCQ
app.use("/mcq", mcqRoutes)


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