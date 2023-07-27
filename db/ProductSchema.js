const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    price:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    category:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    },
    userId:String,
    company:{
        type:String,
        required:true,
        trim:true,
        lowercase:true
    }
})

module.exports = mongoose.model("product",productSchema)