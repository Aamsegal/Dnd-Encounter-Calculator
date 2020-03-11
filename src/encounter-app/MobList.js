import React from 'react';

class MobListClass extends React.Component {

    render() {
        const monsterList = [
            {Name: 'Bulbasaur', Level: 1, Exp: 80},
            {Name: 'Charmander', Level: 1, Exp: 80},
            {Name: 'Squirtle', Level: 1, Exp: 80}
        ]

        let monsterNumber = 0;
        let totalMonsterExp = 0;
        let pokemonList = [];

        for (let i = 0; i < monsterList.length; i++) {
            monsterNumber = monsterNumber + 1;

            totalMonsterExp = totalMonsterExp + monsterList[i].Exp;

            pokemonList.push(monsterList[i].Name);
        }
        console.log(totalMonsterExp);

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
                <h3>Pokemon in the encounter {pokemonList}</h3>
                <ul>
                    <li>Number of monsters: {monsterNumber}</li>
                    <li>Total monster exp: {totalMonsterExp}</li>
                </ul>
            </div>
        )

    }
}

export default MobListClass;