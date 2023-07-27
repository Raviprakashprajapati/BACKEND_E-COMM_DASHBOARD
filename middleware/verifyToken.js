const JWT = require("jsonwebtoken")

// middleware--


function verifyToken(req, res, next) {

    let token = req.headers['authorization']

    if (token) {
        token = token.split(" ")[1]
       

        JWT.verify(token,process.env.KEY,(error,valid)=>{
            if (error) {
                res.status(401).json({
                    message:"Please provide valid token"
                })
            }
            else{
                next()

            }
        })

    }
    else {
        res.send("Please add token with header")

    }

}


module.exports = verifyToken
