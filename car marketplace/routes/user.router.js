const express = require('express')
const router = express.Router()

const controller = require('../controllers/user.controller')

router.post('/',controller.create_user)
router.post('/email-activation',controller.send_activation)  //send the activation code to user email
router.post('/user/:id/account-activation',controller.activate_account)
module.exports = router