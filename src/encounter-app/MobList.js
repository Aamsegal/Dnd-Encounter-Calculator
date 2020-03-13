import React from 'react';
import PokemonList from './pokemonList';

class MobListClass extends React.Component {

    render() {

        /*This value keeps track of monsters and their exp and level. This will eventually
        be passed down as a prop from user input on the main page*/
        const monsterList = [
            {Name: 'Bulbasaur', Level: 1, Exp: 80},
            {Name: 'Charmander', Level: 1, Exp: 80},
            {Name: 'Squirtle', Level: 1, Exp: 80},
            {Name: 'Eevee', Level: 1, Exp: 80},
            {Name: 'Pikachu', Level: 1, Exp: 80},
            {Name: 'Pikachu', Level: 1, Exp: 120},
        ]

        //keeps track of how many monsters there are
        let monsterNumber = 0;

        //keeps track of the total exp of all the monsters
        let totalMonsterExp = 0;

        /*goes through the monsterList and adds up how many monsters there are and
        the exp total*/
        for (let i = 0; i < monsterList.length; i++) {
            monsterNumber = monsterNumber + 1;

            totalMonsterExp = totalMonsterExp + monsterList[i].Exp;
        }
        console.log(totalMonsterExp);

        /*checks how many monsters there are and applies a multiplier to the group
        monster exp based on how many monsters there are. The miltiplier numbers
        come from the Dnd handbooks*/
        if (monsterNumber === 1) {
            totalMonsterExp = totalMonsterExp*1;

        } else if (monsterNumber === 2) {
            totalMonsterExp = totalMonsterExp*1.5;

        } else if (monsterNumber <= 6) {
            totalMonsterExp = totalMonsterExp*2;

        } else if (monsterNumber <=10) {
            totalMonsterExp = totalMonsterExp*2.5;

        } else if (monsterNumber <=14) {
            totalMonsterExp = totalMonsterExp*3;

        } else {
            totalMonsterExp = totalMonsterExp*4;
        }

        return (
            <div>
                <h1>Mob List</h1>
                <h3>Pokemon in the encounter</h3>

                <ul>
                    {/*This will go through every index in monsterList and send down a prop
                    that is the name of the current monster*/}
                    {monsterList.map( pokemon => 
                        <PokemonList
                            content = {pokemon.Name}
                        />
                    )}
                </ul>
                
                <ul>
                    {/*<li>Number of monsters: {monsterNumber}</li>*/}
                    <li>Total monster exp: {totalMonsterExp}</li>
                </ul>
            </div>
        )

    }
}

export default MobListClass;