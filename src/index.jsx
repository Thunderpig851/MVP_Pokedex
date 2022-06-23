import React from 'react'
import { createRoot } from 'react-dom/client'
import { RecoilRoot } from 'recoil'
import Dex from './components/Dex.jsx'
import Team from './components/Team.jsx'
import Competitive from './components/Competitive.jsx'
const axios = require('axios')

class App extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPokemon: {},
      dexSearchText: ''
    }

    this.handleTextFieldChange = this.handleTextFieldChange.bind(this)
    this.searchTheDex = this.searchTheDex.bind(this)
    this.addToCurrentTeam = this.addToCurrentTeam.bind(this)
  }

  componentDidMount () {
    this.fetchInitialPokemon()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.data !== this.props.data) {
      this.fetchCurrentTeam()
    }
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
    if (this.state.dexSearchText) {
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
    } else {
      alert('Enter valid Pokemon')
    }
  }

  getMoveList () {
    const moves = this.state.currentPokemon.moves.map(element => {
      return {
        name: element.move.name,
        learned_at: element.version_group_details[0].level_learned_at,
        learn_method: element.version_group_details[0].move_learn_method.name
      }
    })
    return moves
  }

  addToCurrentTeam () {
    const pokemon = this.state.currentPokemon
    const moves = this.getMoveList()
    const data = {
      user_id: document.cookie,
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities,
      stats: pokemon.stats,
      types: pokemon.types,
      moves: moves,
      forms: pokemon.forms,
      base_experience: pokemon.base_experience,
      image: pokemon.sprites.other['official-artwork'].front_default
    }
    const options = {
      url: '/addToTeam',
      method: 'post',
      data: data
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
      <RecoilRoot>
        <Dex currentPokemon={this.state.currentPokemon}
            handleTextFieldChange={this.handleTextFieldChange}
            searchTheDex={this.searchTheDex}
            addToCurrentTeam={this.addToCurrentTeam}/>
        <Team />
        <Competitive />
      </RecoilRoot>

    )
  }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)
