import { selector, selectorFamily } from 'recoil'
import { pokedexListAtom } from './atoms.jsx'

export const fetchPokemonListSelector = selector({
  key: 'fetchPokemonListSelector',
  get: async ({ get }) => {
    try {
      const url = get(pokedexListAtom)

      const response = await fetch(url)
      const { count, next, previous, results } = await response.json()

      return { count, next, previous, results }
    } catch (error) {
      throw new Error(error)
    }
  }
})

export const fetchPokemonDetailsSelector = selectorFamily({
  key: 'fetchPokemonDetailsSelector',
  get: (id) => async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()

      return data
    } catch (error) {
      throw new Error(error)
    }
  }
})

export const fetchPokemonAbilitySelector = selectorFamily({
  key: 'fetchPokemonAbilitySelector',
  get: (url) => async () => {
    try {
      const response = await fetch(url)
      const data = await response.json()
      return data
    } catch (error) {
      throw new Error(error)
    }
  }
})
