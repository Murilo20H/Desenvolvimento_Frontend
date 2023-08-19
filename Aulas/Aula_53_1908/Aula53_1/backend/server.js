const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 8070
const connectionString = "mongodb+srv://Murilo20H:Murilo20H@appdbaula.cxeaimf.mongodb.net/"

mongoose.connect(connectionString, {
    dbName: "DevsSupermarket"
}).then(() => {
    console.log("MongoDB UP!")
    console.log(`http://localhost:${port}`)
    app.listen(port)
}).catch((error) => {
    console.log(error)
})