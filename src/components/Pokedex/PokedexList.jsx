import React from 'react'
import { useRecoilValue } from 'recoil'
import { fetchPokemonListSelector } from './state/selectors.jsx'
import PokemonCard from './PokemonCard.jsx'
import AsyncWrapper from './AsyncWrapper.jsx'
import DexPagination from './DexPagination.jsx'

const PokedexList = () => {
  const pokemonList = useRecoilValue(fetchPokemonListSelector)

  return (
    <div>
      <ul>
        {pokemonList?.results.map((pokemon) => {
          return (
            <AsyncWrapper key={pokemon.name} >
                <PokemonCard key={pokemon.url} pokemon={pokemon}/>
            </ AsyncWrapper>
          )
        })}
      </ul>
      <DexPagination count={pokemonList.count} />
    </div>
  )
}
export default PokedexList
