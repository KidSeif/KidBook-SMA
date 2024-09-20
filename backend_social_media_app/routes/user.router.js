const express = require('express')

const route = express.Router()

const userController = require('../controllers/user.controller')

route.post('/register' , userController.signup)
route.post('/signin' , userController.signin)



module.exports = route