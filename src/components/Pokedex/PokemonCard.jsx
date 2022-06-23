import React from 'react'
import { useRecoilValue } from 'recoil'
import { fetchPokemonDetailsSelector } from './state/selectors.jsx'

const Card = ({ pokemon }) => {
  const id = pokemon.url.split('/')[6]

  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(id))

  return (
    <div key={pokemon.name}>
    <img
      src={pokemonDetails.sprites.front_default}
      alt={pokemonDetails.name}
    />
    <p>{pokemonDetails.name}</p>
  </div>
  )
}

export default Card
