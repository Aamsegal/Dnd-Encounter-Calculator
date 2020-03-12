import React from 'react';
import './PlayerLevel.css'
import encounterTable from './encounter-calculation-and-info.js';

class PlayerLevelClass extends React.Component {
    render() {
        /*This value keeps track of the levels of the party members. Later, props will be used
        to fill out this value based on user input*/
        const playerLevels = [2,2,2,2,2];

        /*This value keeps track of the groups total exp threshold per level.*/
        const groupExpThresholds = { Easy: 0, Medium: 0, Hard: 0, Deadly: 0};

        /*This forloop gets the length of playerLevels, then runs for each index of playerLevels.
        it will then compair the player level to the equivilent level of on the encounter Table. Then it
        will grab the values for easy, and add it to the groupExpThreshold easy, then do the same for
        medium, hard and deadly*/
        for (let i = 0; i < playerLevels.length; i++) {
            let currentPlayerLevel = playerLevels[i] - 1;
            
            groupExpThresholds.Easy = groupExpThresholds.Easy + this.props.infoTable[currentPlayerLevel].Easy;
            groupExpThresholds.Medium = groupExpThresholds.Medium + this.props.infoTable[currentPlayerLevel].Medium;
            groupExpThresholds.Hard = groupExpThresholds.Hard + this.props.infoTable[currentPlayerLevel].Hard;
            groupExpThresholds.Deadly = groupExpThresholds.Deadly + this.props.infoTable[currentPlayerLevel].Deadly;
        }
        
        /*Returns html showing the the number of players and the group exp per difficulty*/
        return (
            <div id='groupLevelInfo' className='groupLevelInfo'>
                <h1>Player Level List</h1>
                <h2>Number of Player {playerLevels.length}</h2>
                <h3>Group Exp</h3>
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