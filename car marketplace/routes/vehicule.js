const express = require('express')
const router = express.Router()

const controller = require('../controllers/vehicule_controller')

router.post('/',controller.ajouter_vehicule)

module.exports = router