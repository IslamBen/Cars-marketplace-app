const express = require('express')
const sequelize = require('./util/database')
const bodyParser = require('body-parser');
const vehicle_router = require('./routes/vehicle.router')
const user_router = require('./routes/user.router')
require('dotenv').config();

sequelize.sync()
  .then((res) => {
    console.log("syncronised")
  })
  .catch(err => console.log(err))


const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
  res.send("hellooooooo")
})

app.use('/vehicle-management',vehicle_router)
app.use('/user-management',user_router)

app.listen(port, () => {
  //const v = Vehicule.build({type:"voiture",categorie:"limousine",marque:"mercedes",model:"a45",annee:"2014",kilometrage : 18240});
  console.log(` app listening at http://localhost:${port}`)
})
