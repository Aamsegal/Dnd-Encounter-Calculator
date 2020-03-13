import React from 'react'
import PlayerLevel from './PlayerLevel'

class UserInput extends React.Component {
    render() {

        function playerLevelInput(event) {
            event.preventDefault;
            console.log('test');
            let playerLevelForm = document.getElementById('playerLevel')//.value;
            console.log(playerLevelForm);
        }

        return(
            <form id='userInputForm' name='userInputForm'>
                <h3>Monster Info</h3>
                <label htmlFor='monsterName'>Monster Name:</label>
                <input type='text' id='monsterName' name='monsterName'></input>
                                            
                <label htmlFor='expNumber'>Exp</label>
                <input type='number' id='expNumber' name='expNumber' placeholder='Monster Exp'></input>
                
                <label htmlFor='monsterNumber'>Number</label>
                <input type='number' id='monsterNumbers' name='monsterNumbers' min='1' placeholder='Number of monsters'></input><br></br>

                <h3>Player Info</h3>
                <label htmlFor='playerLevel'>Player Level</label>
                <input type='number' id='playerLevel' name='playerLevel' min='1' max='20'></input>

                <label htmlFor='numberOfPlayers'>Number of players</label>
                <input type='number' id='numberOfPlayers' name='numberOfPlayers'></input>

                <input type='submit' value='Submit' onSumbit={playerLevelInput()}></input>
            </form>

            
        ) 
    }
}

export default UserInput;