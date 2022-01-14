const { DataTypes, Model } = require('sequelize');

const sequelize = require('../util/database.js');
const Vehicule = require('./vehicule.js');

const Utilisateur = Model.define('Utilisateur', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nom: {
        type: DataTypes.STRING,

    },
    prenom: {
        type: DataTypes.STRING
    },
    nom_utilisateur: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            max : 30,
            min : 7
        }
    },
    email : {
        type: DataTypes.STRING,
        allowNull : false,
        unique : true,
        validate : {
            is : /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        }
    },
    password : {
        type:DataTypes.STRING,
        allowNull : false,
    },
    actif : {
        type: DataTypes.BOOLEAN,
        defaultValue : false,
    }
})

Utilisateur.hasMany(Vehicule,{
    foreignKey : 'proprietaireId',
    onDelete : 'CASCADE'
});

module.exports = Utilisateur