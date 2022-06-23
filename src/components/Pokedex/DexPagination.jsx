import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { pokedexListAtom } from './state/atoms.jsx'

const DexPagination = ({ count }) => {
  const pageCount = 30
  console.log(count)
  const [activePage, setActivePage] = useState(0)
  const pages = Array(Math.ceil(count / pageCount))
  console.log(pages)
  const setPokemonUrl = useSetRecoilState(pokedexListAtom)

  const onPageClick = (url, page) => {
    setActivePage(page)
    setPokemonUrl(url)
  }
  if (!pages) {
    return null
  }
  return (
    <div>
      {pages.map((page, index) => {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=${pageCount}&offset=${page * pageCount}`
        return (
       <div style={{ color: page === activePage ? 'red' : 'black' }}
            onClick={() => onPageClick(url, page)}
            key={page}>
            {page + 1}
        </div>
        )
      })}
    </div>
  )
}

export default DexPagination

