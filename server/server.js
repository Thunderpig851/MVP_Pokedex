const { add, team, feint } = require('../db/db.js')
const express = require('express')
const app = express()
const axios = require('axios')
require('dotenv').config()

app.use(express.static('public'))
app.use(express.json())

app.get('/getPokemon', (req, res) => {
  const name = req.query.name
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
      res.json(response.data)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.post('/addToTeam', (req, res) => {
  add(req.body)
  // I do not know why this route refuses any error handling
  // errors are handled on either side
})

app.get('/getTeam', (req, res) => {
  team()
    .then(response => {
      res.json(response)
    }).catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.delete('/deletePokemon', (req, res) => {
  feint(req.query.id)
  // I do not know why this route refuses any error handling
  // errors are handled on either side
})

app.get('/getAllPokemon', (req, res) => {
  axios.get('https://pokeapi.co/api/v2/pokemon')
    .then((response) => {
      console.log(response)
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.get('/compStats', (req, res) => {
  axios.get('https://smogon-usage-stats.herokuapp.com/2019')
    .then(response => {
      console.log(response)
      res.sendStatus(200)
    })
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
})

app.listen(process.env.SERVER, () => console.log(`Server listening at 127.0.0.1:${process.env.SERVER}`))
