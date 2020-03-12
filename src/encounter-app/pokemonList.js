import React from 'react';

class PokemonListClass extends React.Component {

    render() {
        const currentPokemon = this.props;

        return(
            <li>
                {currentPokemon.content}
            </li>
        )
    }
}

export default PokemonListClass;