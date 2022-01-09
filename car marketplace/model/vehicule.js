const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = require('../util/database.js')

const Vehicule = sequelize.define("vehicule", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type : {
        type:DataTypes.STRING,
        allowNull:false
    },
    categorie : {
        type:DataTypes.STRING,
        allowNull:false
    },
    marque : {
        type:DataTypes.STRING,
        allowNull:false
    },
    model : {
        type:DataTypes.STRING,
        allowNull:false
    },
    annee : {
        type:DataTypes.STRING,
        allowNull:false
    },
    prix : {
        type:DataTypes.FLOAT,
    },
    kilometrage:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
  });


module.exports = Vehicule