import React from 'react';
import encounterTable from './encounter-calculation-and-info.js';

class PlayerLevelClass extends React.Component {
    render() {
        const playerLevels = [1,2,3];
        const groupExpThresholds = { Easy: 0, Medium: 0, Hard: 0, Deadly: 0};

        for (let i = 0; i < playerLevels.length; i++) {
            let currentPlayerLevel = playerLevels[i] - 1;
            console.log(currentPlayerLevel);
            
            groupExpThresholds.Easy = groupExpThresholds.Easy + this.props.infoTable[currentPlayerLevel].Easy;
            groupExpThresholds.Medium = groupExpThresholds.Medium + this.props.infoTable[currentPlayerLevel].Medium;
            groupExpThresholds.Hard = groupExpThresholds.Hard + this.props.infoTable[currentPlayerLevel].Hard;
            groupExpThresholds.Deadly = groupExpThresholds.Deadly + this.props.infoTable[currentPlayerLevel].Deadly;
        }

        return (
            <div>
                <ul>
                    <li>
                        Easy exp:   {groupExpThresholds.Easy}
                    </li>

                    <li>
                        Medium exp:   {groupExpThresholds.Medium}
                    </li>

                    <li>
                        Hard exp:   {groupExpThresholds.Hard}
                    </li>

                    <li>
                        Deadly exp:   {groupExpThresholds.Deadly}
                    </li>
                </ul>
            </div>
            
        )
    }

}

export default PlayerLevelClass;