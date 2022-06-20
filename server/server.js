const express = require('express')
const app = express()
const axios = require('axios')
const path = require('path')
require('dotenv').config()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.json())

app.get('/testApi', (req, res) => {
  const name = req.query.name

  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      console.log(response.data)
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.listen(process.env.SERVER, () => console.log(`Server listening at 127.0.0.1:${process.env.SERVER}`))
