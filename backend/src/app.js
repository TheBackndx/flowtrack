const express = require("express")
const cookieParser = require("cookie-parser")
const app = express();

require("dotenv").config()
const authMiddleware = require("./middlewares/auth.middleware")
const authRoutes = require("./routes/auth.route")
const testRoutes = require("./routes/test.route")

app.use(express.json())
app.use(cookieParser())


app.get("/", (req, res) => {
    res.send("Server is runing")
})

app.use("/api/auth", authRoutes)
app.use("/api/test", testRoutes)


module.exports = app
