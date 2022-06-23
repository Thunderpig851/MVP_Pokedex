import React from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import PokedexList from './PokedexList.jsx'
import PokedexDetails from './PokedexDetails.jsx'
import AsyncWrapper from './AsyncWrapper.jsx'

export default function Pokedex () {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <Link to="/">
              <li>Pokedex</li>
            </Link>
          </ul>
        </nav>
        <AsyncWrapper />
          <Routes>
            <Route exact path="/" element={<PokedexList />} />
            <Route path={`/pokemon/:id`} element={<PokedexDetails />} />
          </Routes>
        <AsyncWrapper />
      </div>
    </Router>
  )
}
