const Sequelize= require('sequelize');

const sequelize = new Sequelize('cars_marketplace', 'postgres', 'password', {
  host: 'localhost',
  dialect: 'postgres'
});

/*testing connection to db*/
sequelize.authenticate()
.then(()=>console.log("Connected to database"))
.catch(err=>console.log("Error , cannot connect to database",err))

module.exports = sequelize