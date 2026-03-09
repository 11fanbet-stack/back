const express = require("express")
const cors = require("cors")

const connectDB = require("./config/db")

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/auth", require("./routes/auth"))

app.listen(5000, ()=>{

console.log("Fan11 Backend Running on Port 5000")

})
