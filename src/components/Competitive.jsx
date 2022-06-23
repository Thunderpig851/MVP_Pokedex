import React, { useState, useEffect } from 'react'
const axios = require('axios')

const Competitive = () => {
  const [compPokemon, setCompPokemon] = useState({})
  const [selectedTier, setSelectedTier] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('')
  const [selectedYear, setSelectedYear] = useState('')
  const [compSearchText, setCompSearchText] = useState('')

  const fetchCompPokemon = () => {
    axios.get('/compStats')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        throw error
      })
  }

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value)
    console.log(selectedYear)
  }

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value)
    console.log(selectedMonth)
  }

  const handleTierChange = (e) => {
    console.log(e.target.value)
    setSelectedTier(e.target.value)
  }

  const handleSearchChange = (e) => {
    const field = e.target.name
    setCompSearchText({
      [field]: e.target.value
    })
  }

  return (
    <div className='w-1/3 border-4 border-gray-700 float-right'>
       <h1 className="text-gray-700 text-9xl py-4">Comp</h1>
       <div className='justify-center'>
        <h2>Check Smogon Usage Stats</h2>
        <p>Only Gen8OU currently supported</p>
       </div>
       <div className='grid grid-cols-3 px-8'>
        <div>
          <select name='tiers' onChange={(e) => handleTierChange(e)}>
            <option value='none' defaultValue='Select Tier'>Select Tier</option>
            <option value='ou'>OU</option>
          </select>
        </div>
        <div>
          <select name='years' onChange={(e) => handleYearChange(e)}>
            <option defaultValue='Year'>Select Year</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
        <div>
          <select name='months' onChange={(e) => handleMonthChange(e)}>
            <option defaultValue='Month'>Month</option>
            <option value='January'>January</option>
            <option value='February'>February</option>
            <option value='March'>March</option>
            <option value='April'>April</option>
            <option value='May'>May</option>
            <option value='June'>June</option>
            <option value='July'>July</option>
            <option value='August'>August</option>
            <option value='September'>September</option>
            <option value='October'>October</option>
            <option value='November'>November</option>
            <option value='December'>December</option>
          </select>
        </div>
       </div>
       <div>
        <input type='text' name='compSearchText'placeholder='Search...'
          onChange={(e) => handleSearchChange(e)}
          className='w-1/2 border-b-2 border-gray-400 outline-none focus:border-gray-700-400'></input>

        <button type='submit' onClick={() => fetchCompPokemon()} className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 rounded'>Submit</button>
       </div>
    </div>
  )
}

export default Competitive
