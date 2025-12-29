const express = require("express")
require('dotenv').config()
const dbConnect = require("./src/config/dbconfig")
const router = require("./src/router")
const app = express()

port = 3000

app.use(express.json())

app.use(express.static("uploads"))

dbConnect()

app.use(router)

app.use((req,res)=>{
    return res.status(404).json({message: "Route Not Found"})
})



app.listen(port, ()=>{
    console.log(`Server is running port number: ${port}`)
})