const jwt = require("jsonwebtoken")

const authMiddleware = (req, res, next) => {
    try {
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json({
                message: "No token, Authorization denied"
            })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded

        next()
    }
    catch (e) {
        res.status(401).json({
            message : e,
            note : "Unauthorized"
        })
    }

}

module.exports = authMiddleware