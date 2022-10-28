import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App(): React.ReactElement {
  const [blueScore, setBlueScore] = useState<number>(0)
  const [redScore, setRedScore] = useState<number>(0)

  function reset() {
    setBlueScore(0)
    setRedScore(0)
  }
  function incrementBlueScore1 () {
      setBlueScore(blueScore+1)
  }

  function incrementBlueScore2 () {
      setBlueScore(blueScore+2)
  }

  function incrementBlueScore3 () {
      setBlueScore(blueScore+3)
  }

  function incrementRedScore1 () {
      setBlueScore(redScore+1)
  }

  function incrementRedScore2 () {
      setBlueScore(redScore+2)
  }

  function incrementRedScore3 () {
      setBlueScore(redScore+3)
  }
  
  return (
    <div className="App">
      <h1>Shufflepong Scorekeeper</h1>
      <button onClick={reset}>Reset</button>
      <div className="Content">
        <div className="TeamSection BlueTeamSection">
          <h2 className="TeamHeader BlueHeader">Blue</h2>
          <span className="Score BlueScore">{blueScore}</span>
          <button className="IncrementButton BlueButton" onClick={incrementBlueScore1}>+1</button>
          <button className="IncrementButton BlueButton" onClick={incrementBlueScore2}>+2</button>
          <button className="IncrementButton BlueButton" onClick={incrementBlueScore3}>+3</button>
        </div>
        <div className="TeamSection RedTeamSection">
          <h2 className="TeamHeader RedHeader">Red</h2>
          <span className="Score RedScore">{redScore}</span>
          <button className="IncrementButton RedButton" onClick={incrementRedScore1}>+1</button>
          <button className="IncrementButton RedButton" onClick={incrementRedScore2}>+2</button>
          <button className="IncrementButton RedButton" onClick={incrementRedScore3}>+3</button>
        </div>
      </div>
    </div>
  )
}

export default App;
