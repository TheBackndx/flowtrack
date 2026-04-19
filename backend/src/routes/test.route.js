const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/auth.middleware")
const testController = require("../controllers/test.controller")

router.get("/protected", authMiddleware, testController)

module.exports = router