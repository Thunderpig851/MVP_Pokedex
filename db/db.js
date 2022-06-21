const mongoose = require('mongoose')

const pokemonSchema = new mongoose.Schema({
  id: Number,
  name: String,
  abilities: Array,
  stats: Array,
  types: Array,
  moves: Array,
  forms: Array,
  base_experience: Number

})

const PokemonSchema = mongoose.model('PokemonSchema', pokemonSchema)
module.exports = PokemonSchema
