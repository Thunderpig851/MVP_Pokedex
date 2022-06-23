const mongoose = require('mongoose')

const Pokemon = mongoose.Schema({
  user_id: String,
  id: Number,
  name: String,
  abilities: Array,
  stats: Array,
  types: Array,
  moves: Array,
  forms: Array,
  base_experience: Number,
  image: String
})

const PokemonModel = mongoose.model('Pokemon', Pokemon)

module.exports = PokemonModel
