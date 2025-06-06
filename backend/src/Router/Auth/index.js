const express = require("express")
const AuthController=require("../../Controller/AuthController")
const router=express.Router()
router.route("/login")
.post(AuthController.loginUser)

router.route("/register")
.post(AuthController.registerUser)

module.exports =router