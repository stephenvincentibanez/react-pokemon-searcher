import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  handleClick = () => {
    this.setState({
      flipped: !this.state.flipped
    })
  }

  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.handleClick}>
          <div className="image">
            {this.state.flipped? <img src={sprites.back} alt="oh no!" /> : <img src={sprites.front} alt="oh no!" />}
          </div>
          <div className="content">
           <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
             {hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
