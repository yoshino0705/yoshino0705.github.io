import React from 'react'
import './App.css'
import {Game} from './Game'

function TicTacToeGame() {
  return (
    <div className="App" data-testid="app">
      <Game />
    </div>
  )
}

export default TicTacToeGame
