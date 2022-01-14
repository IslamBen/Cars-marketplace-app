const express = require('express')
const sequelize = require('./util/database')
const bodyParser = require('body-parser');
const vehicule_router = require('./routes/vehicule')
const utilisateur_router = require('./routes/utilisateur')
sequelize.sync()
  .then((res) => {
    console.log("syncronised")
    //const v = Vehicule.build({ type: "voiture", categorie: "limousine", marque: "mercedes", model: "a45", annee: "2014", kilometrage: 18240 });
    //v.sayHello();
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

app.use('/gestion-vehicule',vehicule_router)
app.use('/gestion-utilisateur',utilisateur_router)

app.listen(port, () => {
  //const v = Vehicule.build({type:"voiture",categorie:"limousine",marque:"mercedes",model:"a45",annee:"2014",kilometrage : 18240});
  console.log(` app listening at http://localhost:${port}`)
})
