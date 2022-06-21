import React from 'react'

const DexSearch = ({ handleTextFieldChange, searchTheDex, addToCurrentTeam }) => {
  return (
    <div className='pl-2'>
      <input type='text' name='dexSearchText'placeholder='Search...'
        onChange={(e) => handleTextFieldChange(e)}
        className='w-1/2 border-b-2 border-gray-400 outline-none focus:border-gray-700-400'></input>

      <button type='submit' onClick={() => searchTheDex()} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 rounded'>Submit</button>
      <button type='submit' onClick={() => addToCurrentTeam()} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 rounded'>Add</button>

    </div>
  )
}

export default DexSearch
