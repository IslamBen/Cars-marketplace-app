const { DataTypes, Model } = require('sequelize');

const sequelize = require('../util/database.js');
const Vehicule = require('./vehicle.model');

const User = Model.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,

    },
    first_name: {
        type: DataTypes.STRING
    },
    user_name: {
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
    active : {
        type: DataTypes.BOOLEAN,
        defaultValue : false,
    }
})

User.hasMany(Vehicule,{
    foreignKey : 'ownerId',
    onDelete : 'CASCADE'
});

module.exports = User