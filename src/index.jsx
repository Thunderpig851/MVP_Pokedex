import React from 'react'
import { createRoot } from 'react-dom/client'
import Dex from './components/Dex.jsx'
import Team from './components/Team.jsx'
const axios = require('axios')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPokemon: {},
      currentTeam: [],
      dexSearchText: ''
    }

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
    this.searchTheDex = this.searchTheDex.bind(this)
    this.addToCurrentTeam = this.addToCurrentTeam.bind(this)
  }

  componentDidMount () {
    this.fetchInitialPokemon()
  }

  fetchInitialPokemon () {
    const options = {
      url: '/getPokemon',
      method: 'get',
      params: {
        name: 'cyndaquil'
      }
    }
    axios(options)
      .then(response => {
        const data = response.data
        this.setState({
          currentPokemon: data
        })
      })
      .catch(error => {
        console.error('Error in client get initial: ')
        throw error
      })
  }

  searchTheDex () {
    const options = {
      url: '/getPokemon',
      method: 'get',
      params: {
        name: this.state.dexSearchText
      }
    }
    axios(options)
      .then(response => {
        const data = response.data
        this.setState({
          currentPokemon: data
        })
      })
      .catch(error => {
        console.error('Error in client get new: ')
        throw error
      })
  }

  addToCurrentTeam () {
    const options = {
      url: '/addToTeam',
      method: 'post',
      data: this.state.currentPokemon
    }
    axios(options)
      .then(response => {
        console.log('here')
      })
      .catch(error => {
        console.error('Error in client add')
        throw error
      })
  }

  handleTextFieldChange (e) {
    const field = e.target.name
    this.setState({
      [field]: e.target.value
    })
  }

  render () {
    return (
     <div>
       <div>
        <Dex currentPokemon={this.state.currentPokemon}
           handleTextFieldChange={this.handleTextFieldChange}
           searchTheDex={this.searchTheDex}
           addToCurrentTeam={this.addToCurrentTeam}/>
      </div>
      <div>
        <Team />
      </div>
     </div>
    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
