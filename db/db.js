const PokemonModel = require('./models.js')
const mongoose = require('mongoose')
const dbAddress = 'mongodb://localhost/pokemon'

mongoose.connect(dbAddress)
  .then(db => console.log(`Connected to: ${dbAddress}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${dbAddress}`)
    console.log(err)
  })

const addPokemon = (data) => {
  const newPokemon = new PokemonModel(data)
  newPokemon.save((err) => {
    if (err) {
      throw err
    } else {
      console.log('Pokemon Added')
    }
  })
}

const getPokemonTeam = () => {
  return PokemonModel.find()
}

const deletePokemon = (data) => {
  console.log(data)
  PokemonModel.deleteMany({ id: Number(data) }, (err) => {
    if (err) {
      throw err
    } else {
      console.log('Pokemon deleted')
    }
  })
}

module.exports = {
  add: addPokemon,
  team: getPokemonTeam,
  feint: deletePokemon
}
