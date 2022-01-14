const express = require('express')
const router = express.Router()

const controller = require('../controllers/utilisateur_controller')

router.post('/',controller.creer_utilisateur)
router.post('/validation-email',controller.valider_email)
module.exports = router