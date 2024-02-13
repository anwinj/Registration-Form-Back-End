const express = require('express')
const userController = require('../Controllers/userController')

const router = express.Router()

// route for register
router.post('/register',userController.register)

// route for getUsers
router.get('/users',userController.getUsers)

module.exports = router