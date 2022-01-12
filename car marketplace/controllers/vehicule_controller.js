const Vehicule = require('../models/vehicule');

exports.ajouter_vehicule = function (req,res){
    const body = req.body
    Vehicule.create(body)
    .then((vehicule)=>res.json({
        "Message":"vehicule ajouté",
        "vehicule": vehicule
    }))
    .catch((err)=>res.json({
        "message":`vehicule non ajouté ,${err.message}`
    }))

}