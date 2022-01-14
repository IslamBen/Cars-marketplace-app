const Vehicule = require('../models/vehicule');

exports.ajouter_vehicule = function (req, res) {
    const body = req.body
    Vehicule.create(body)
        .then((vehicule) => {
            res.status(200).json({
                "Message": "vehicule ajouté",
                "vehicule": vehicule
            })
        })
        .catch((err) => {
            res.status(400).json({
                "message": `vehicule non ajouté ,${err.message}`
            })
        })

}

exports.lister_vehicules = function (req, res) {
    Vehicule.findAll()
        .then(vehicules => {
            res.status(200).json({
                "message": `${vehicules.length} Vehicules trouvé`,
                "vehicules": vehicules
            })
        })
        .catch(err => {
            res.status(400).json({
                "message": err.message
            })
        })
}

exports.detail_vehicule = function (req, res) {
    const id = req.params.id
    Vehicule.findByPk(id)
        .then(vehicule => {
            if (vehicule == null) {
                res.status(404).json("vehicule non trouvé")
            } else {
                res.status(200).json({
                    "message": "vehicule trouvé",
                    "vehicule": vehicule
                })
            }
        })
        .catch(err => {
            res.status(400).json({
                "massage": err.message
            })
        })
}

exports.modifier_vehicule = function (req, res) {
    const body = req.body
    const id = req.params.id
    Vehicule.update(body, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            "message": "vehicule modifié",
        })
    })
        .catch((err) => {
            res.status(400).res.json({
                "message": err.message
            })
        })

}

exports.supprimer_vehicule = function (req, res) {
    const id = req.params.id
    Vehicule.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).json({
            "message": "vehicule supprimé",
        })
    })
        .catch((err) => {
            res.status(400).res.json({
                "message": err.message
            })
        })
}