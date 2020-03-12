import React from 'react'
import PlayerLevel from './PlayerLevel'

class UserInput extends React.Component {
    render() {

        function playerLevelInput() {
            let form = new FormData(document.getElementById("userInputForm"));
            let playerLevel = form.get("playerLevel");
            console.log(playerLevel)
        }

        return(
            <form id='userInputForm' name='userInputForm'>
                <h3>Monster Info</h3>
                <lable for='monsterName'>Monster Name:</lable>
                <input type='text' id='monsterName' name='monsterName'></input>
                                            
                <lable for='expNumber'>Exp</lable>
                <input type='number' id='expNumber' name='expNumber' placeholder='Monster Exp'></input>
                
                <lable for='monsterNumber'>Number</lable>
                <input type='number' id='monsterNumbers' name='monsterNumbers' min='1' placeholder='Number of monsters'></input><br></br>

                <h3>Player Info</h3>
                <label for='playerLevel'>Player Level</label>
                <input type='number' id='playerLevel' name='playerLevel' min='1' max='20'></input>

                <label for='numberOfPlayers'>Number of players</label>
                <input type='number' id='numberOfPlayers' name='numberOfPlayers'></input>

                <input type='button' value='Submit' onClick={() => playerLevelInput()}></input>
            </form>

            
        ) 
    }
}

export default UserInput;