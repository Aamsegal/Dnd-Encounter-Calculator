import React from 'react';

class MobListClass extends React.Component {

    render() {
        const monsterList = [
            {Name: 'Bulbasaur', Level: 1, Exp: 80},
            {Name: 'Bulbasaur', Level: 1, Exp: 80},
            {Name: 'Bulbasaur', Level: 1, Exp: 80},
            {Name: 'Ivesaur', Level: 1, Exp: 1400}
        ]

        let monsterNumber = 0;
        let totalMonsterExp = 0;

        for (let i = 0; i < monsterList.length; i++) {
            monsterNumber = monsterNumber + 1;

            totalMonsterExp = totalMonsterExp + monsterList[i].Exp;
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
            <ul>
                <li>Number of monsters: {monsterNumber}</li>
                <li>Total monster exp: {totalMonsterExp}</li>
            </ul>
        )

    }
}

export default MobListClass;