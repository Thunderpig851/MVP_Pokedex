import React from 'react'
import DexSearch from './DexSearch.jsx'

const Dex = ({ currentPokemon, handleTextFieldChange, searchTheDex, addToCurrentTeam }) => {
  if (!Object.keys(currentPokemon).length) {
    return null
  }

  const stats = currentPokemon.stats.map(element => { return { name: element.stat.name, base: element.base_stat } })

  return (
    <div className='w-1/3 border-4 border-gray-700 float-left'>
      <h1 className="text-gray-700 text-9xl py-4">Dex</h1>

      <DexSearch handleTextFieldChange={handleTextFieldChange}
                 searchTheDex={searchTheDex}
                 addToCurrentTeam={addToCurrentTeam}/>

      <h2 className='justify-center pt-8 pb-4 pl-2'>{currentPokemon.name[0].toUpperCase() + currentPokemon.name.substring(1)}</h2>
        <div className='grid grid-cols-2 pb-8'>
          {(() => {
            if (!currentPokemon.sprites.versions['generation-v']['black-white'].animated.front_default) {
              return <img src={currentPokemon.sprites.front_default} className='h-44 p-2'/>
            } else {
              return <img src={currentPokemon.sprites.versions['generation-v']['black-white'].animated.front_default} className='h-44 p-2'/>
            }
          })()}

          <img src={currentPokemon.sprites.other['official-artwork'].front_default}
            className='h-48'/>

        </div>

        <div className='grid grid-cols-2'>
          <div>
            <h1 className='pl-2 pb-1'>Types: </h1>
            {currentPokemon.types.map((element, index) => <h2 key={index} className='pl-2 py-1'>{element.type.name}</h2>)}
            <h1 className='pl-2 pt-4'>Abilities:</h1>
            {currentPokemon.abilities.map((element, index) => {
              if (!element.is_hidden) {
                return <h2 key={index} className='p-4'>{element.ability.name[0].toUpperCase() + element.ability.name.substring(1)}</h2>
              } else {
                return null
              }
            })}
            <h1 className='pl-2'>Hidden Ability:</h1>
            {currentPokemon.abilities.map((element, index) => {
              if (element.is_hidden) {
                return <h2 key={index} className='p-4'>{element.ability.name[0].toUpperCase() + element.ability.name.substring(1)}</h2>
              } else {
                return null
              }
            })}
        </div>
      <div>
        <h1>Stats:</h1>
        {stats.map((element, index) => <h2 key={index} className='p-2'>{element.name[0].toUpperCase() + element.name.substring(1)}: {element.base}</h2>)}
      </div>
      </div>
    </div>
  )
}

export default Dex
