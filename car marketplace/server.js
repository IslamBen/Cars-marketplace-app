const express = require('express')
const sequelize = require('./util/database')
const Vehicule= require('./model/vehicule');

sequelize.sync()
.then((res)=>{
  console.log(res)
})
.catch(err=>console.log(err))


const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("hellooooooo")
})

app.listen(port, () => {
  //const v = Vehicule.build({type:"voiture",categorie:"limousine",marque:"mercedes",model:"a45",annee:"2014",kilometrage : 18240});
  console.log(`Example app listening at http://localhost:${port}`)
})
