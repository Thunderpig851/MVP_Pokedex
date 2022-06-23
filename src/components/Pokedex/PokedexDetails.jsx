import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil'

import { pokemonIdAtom } from './state/atoms.jsx'
import { fetchPokemonDetailsSelector } from './state/selectors.jsx'

const PokedexDetails = () => {
  const id = useParams()
  const [currentId, setCurrentID] = useRecoilState(pokemonIdAtom(+id))
  const pokemonDetails = useRecoilValue(fetchPokemonDetailsSelector(currentId))

  useEffect(() => {
    setCurrentID(+id)
  }, [id, setCurrentID])

  const image = pokemonDetails.spirites.other['official-artwork'].front_default

  return (
    <div>
      <img src={image} alt={pokemonDetails.name} />
      <h3>{pokemonDetails.name[0].toUpperCase() + pokemonDetails.name.substring(1)}</h3>
      <p>{pokemonDetails.height}</p>
      <p>{pokemonDetails.weight}</p>
    </div>
  )
}

export default PokedexDetails
