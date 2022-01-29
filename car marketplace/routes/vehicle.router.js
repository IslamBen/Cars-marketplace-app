const express = require('express')
const router = express.Router()

const controller = require('../controllers/vehicle.controller')

router.post('/',controller.add_vehicle)
router.get('/vehicles',controller.list_vehicles)
router.get('/vehicles/:id',controller.show_details)
router.put('/vehicles/:id',controller.edit_vehicle)
router.delete('/vehicles/:id',controller.delete_vehicle)

module.exports = router