import React, { useState, useEffect } from 'react'
import Moves from './Moves.jsx'
const axios = require('axios')

const Team = () => {
  const [currentTeam, setCurrentTeam] = useState([])
  const fetchCurrentTeam = () => {
    const options = {
      url: '/getTeam',
      method: 'get'
    }
    axios(options)
      .then(response => {
        setCurrentTeam(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log('Error in get team method')
        throw error
      })
  }

  const deletePokemon = (e) => {
    const options = {
      url: '/deletePokemon',
      method: 'delete',
      params: {
        id: e.target.name
      }
    }
    axios(options)
      .then(response => {
        console.log('deleted')
      })
      .catch(error => {
        console.log('error')
        throw error
      })
  }

  useEffect(() => {
    fetchCurrentTeam()
  }, [])

  return (
    <div className='w-1/3 border-4 border-gray-700 float-left h-full'>
      <h1 className="text-gray-700 text-9xl py-4">Team</h1>
    <div className='grid grid-cols-2 pt-10'>
      {currentTeam.map((element, key) =>
      <div key={element._id}>
        <h1 className='justify-items-center'>{element.name[0].toUpperCase() + element.name.substring(1)}</h1>
        <img src={element.image}
             name={element.id}
             onDoubleClick={(e) => deletePokemon(e) }
             className='h-24'></img>
         <Moves moves={element.moves}/>
      </div>
      )}
    </div>
    </div>
  )
}

export default Team
