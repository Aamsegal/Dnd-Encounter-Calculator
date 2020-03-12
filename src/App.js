import React from 'react';
import PlayerLevel from './encounter-app/PlayerLevel'
import MobList from './encounter-app/MobList'
import Results from './encounter-app/Results'
import UserInput from './encounter-app/userInput'
import encounterTable from './encounter-app/encounter-calculation-and-info'

function App() {
  return (
    <main className='App'>

      <UserInput />
      {/*This class will allow the user to input how many players there are
      and then add up each players Easy, Medium, Hard and Deadly exp values for
      the groups exp per difficulty*/}
      <PlayerLevel  infoTable= {encounterTable}/>

      {/*This class will allow the user to add monsters and their exp values.
      Then the class will add up all the exp values and apply the miltiplier
      from encounter-calculation-and-info.js*/}
      <MobList />

      {/*This class will use the data gathered in both Player level list and
      Mob list to figure out the current difficulty of the mobs listed. It will
      compair the groups exp threshold to the total exp of the mobs listed and
      tell the user the difficulty of the fight, show the total exp and show
      the exp thresholds for the other difficulties*/}
      <Results />

      {/*Add a progress bar for the difficulty*/}
      <div>Additional Features</div>
    </main>
  );
}

export default App;