import { atom } from 'recoil'

export const pokedexListAtom = atom({
  key: 'PokedexListAtom',
  default: 'https://pokeapi.co/api/v2/pokemon?limit=30&offset=0'
})

export const pokemonIdAtom = atom({
  key: 'PokedexIdAtom',
  default: (id) => id
})
