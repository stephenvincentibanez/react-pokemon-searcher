import React from 'react'
import PokemonCard from './PokemonCard'
import { Card } from 'semantic-ui-react'

class PokemonCollection extends React.Component {

  buildCards = () => {
    return (this.props.pokemons.map(pokemon => <PokemonCard pokemon={pokemon}/>))
  }

  buildCardsQuery = () => {
    return (this.props.pokemons.filter(pokemon => (pokemon.name.match(this.props.query))).map(pokemon => <PokemonCard pokemon={pokemon}/>))
  }

  render() {
    return (
      <Card.Group itemsPerRow={6} >
        <h1>Pokemon Collection</h1>
        {this.props.query === "" ? this.buildCards() : this.buildCardsQuery()}
      </Card.Group>
    )
  }
}

export default PokemonCollection
