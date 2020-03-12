import React from 'react';

class PokemonListClass extends React.Component {

    render() {
        /*sets currentPokemon to the name of the current objects
        pokemon for the map function*/
        const currentPokemon = this.props;

        //will return a htlm list element with the pokemons name
        return(
            <li>
                {currentPokemon.content}
            </li>
        )
    }
}

export default PokemonListClass;