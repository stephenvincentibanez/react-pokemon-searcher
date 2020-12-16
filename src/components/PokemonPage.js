import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    query: ""
  }

    componentDidMount(){
      fetch('http://localhost:3000/pokemon')
      .then(r => r.json())
      .then(pokemons => this.setState({
        pokemon: pokemons
      }))
    }

    handleSearchChange = (e) => {
      this.setState({
        query: e.target.value
      })
    }

    handleSubmit = (e) => {
     fetch('http://localhost:3000/pokemon', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         name: e.target.name.value,
         hp: e.target.hp.value,
         sprites: {
           front: e.target.frontUrl.value,
           back: e.target.backUrl.value
         }
       })
     })
     .then(r => r.json())
     .then(newPokemon => this.setState({pokemon: [...this.state.pokemon, newPokemon]}))
     
   }
  
  
  render() {
    return (
      <Container pokemons={this.state.pokemon}>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search pokemons={this.state.pokemon} query={this.state.query} handleSearchChange={this.handleSearchChange}/>
        <br />
        <PokemonCollection pokemons={this.state.pokemon} query={this.state.query}/>
      </Container>
    )
  }
}


export default PokemonPage
