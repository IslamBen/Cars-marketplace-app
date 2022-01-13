const express = require('express')
const router = express.Router()

const controller = require('../controllers/vehicule_controller')

router.post('/',controller.ajouter_vehicule)
router.get('/vehicules',controller.lister_vehicules)
router.get('/vehicules/:id',controller.detail_vehicule)
router.put('/vehicules/:id',controller.modifier_vehicule)
router.delete('/vehicules/:id',controller.supprimer_vehicule)

module.exports = router