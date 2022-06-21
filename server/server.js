const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').config()

app.use(express.static('public'))
app.use(express.json())

app.get('/getPokemon', (req, res) => {
  const name = req.query.name
  console.log('here')
  const options = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    },
    mode: 'no-cors',
    url: `https://pokeapi.co/api/v2/pokemon/${name}`,
    method: 'get'
  }

  axios(options)
    .then(response => {
      // console.log(response.data)
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.listen(process.env.SERVER, () => console.log(`Server listening at 127.0.0.1:${process.env.SERVER}`))
