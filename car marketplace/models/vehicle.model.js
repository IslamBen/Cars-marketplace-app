const {DataTypes } = require('sequelize');

const sequelize = require('../util/database.js')

const Vehicle = sequelize.define('Vehicle',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type : {
        type:DataTypes.STRING,
        allowNull:false
    },
    category : {
        type:DataTypes.STRING,
        allowNull:false
    },
    brand : {
        type:DataTypes.STRING,
        allowNull:false
    },
    model : {
        type:DataTypes.STRING,
        allowNull:false
    },
    year : {
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            isReal(value){
                if(parseInt(value)<1900 || parseInt(value) > (new Date().getFullYear())){
                    throw new Error("l'année entrée est invalide!")
                }
            }
        }
    },
    price : {
        type:DataTypes.BIGINT,
    },
    mileage:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
});

module.exports = Vehicle

