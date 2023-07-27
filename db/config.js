const mongoose = require("mongoose")
require('dotenv').config()
let url = process.env.MONGO_URL 
const connectToDatabase  =async()=>{
    mongoose.connect(url)
    .then((value)=>{
        console.log("Database Connected Successfully")
    })
    .catch((error)=>{
        console.log("Error While Connecting to DB",error.message)
        
    })
}

module.exports = connectToDatabase