const connect = require("./db/config")
connect()
require('dotenv').config()
const PORT = process.env.PORT || 800
const express = require("express")
const app = express()
const cors = require("cors")
const userSchema = require("./db/userSchema")
const productSchema = require("./db/ProductSchema")
const JWT = require("jsonwebtoken")
const jwtKey = process.env.KEY
const verifyToken = require("./middleware/verifyToken.js")

app.use(express.json())
app.use(cors())


app.post("/register", async (req, res) => {

    let newUser = new userSchema(req.body)
    let result = await newUser.save()
    result = result.toObject();
    delete result.password

    // JWT TOKEN FOR signup or resgiter USER
    JWT.sign({ result }, jwtKey, { expiresIn: "10h" }, (error, token) => {

        if (error) {
            res.send({ result: "Authentication error in regiter" })
        }
        res.send({ result, auth: token })

    })


})

app.post("/login", async (req, res) => {
    // console.log(req.body)
    if (req.body.password && req.body.email) {
        let userData = await userSchema.findOne(req.body).select("-password")
        if (userData) {

            // JWT TOKEN FOR LOGIN USER
            JWT.sign({ userData }, jwtKey, { expiresIn: "10h" }, (error, token) => {

                if (error) {
                    res.send({ result: "User not Found" })
                }
                res.send({ userData, auth: token })

            })


        } else {
            res.send({ result: "No user Found" })
        }
    }
    else {
        res.send({ result: "Email and password must be define!" })

    }


})


app.post("/add-product",verifyToken, async (req, res) => {
    let newProduct = new productSchema(req.body)
    let result = await newProduct.save()
    res.send(result)

})


app.get("/products",verifyToken, async (req, res) => {

    let products = await productSchema.find()
    if (products.length > 0) {
        res.send(products)
    }
    else {
        res.send({ result: "No products found" })
    }


})


app.delete("/product/:id",verifyToken, async (req, res) => {

    const result = await productSchema.deleteOne({ _id: req.params.id })
    res.send(result)



})


// get id for updation
app.get("/product/:id",verifyToken, async (req, res) => {

    let result = await productSchema.findOne({ _id: req.params.id })
    if (result) {
        res.send(result)
    }
    else {
        res.send("result not found ")
    }

})


app.put("/product/:id",verifyToken, async (req, res) => {

    let result = await productSchema.updateOne(
        { _id: req.params.id },
        {
            $set: req.body


        }
    )

    res.send(result)
})


// for searching the product
app.get("/search/:key", verifyToken, async (req, res) => {

    let result = await productSchema.find({
        "$or": [
            { name: { $regex: req.params.key } },
            { company: { $regex: req.params.key } },
            { category: { $regex: req.params.key } }
        ]
    })

    res.send(result)

})





// listen port--
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}..`)
})