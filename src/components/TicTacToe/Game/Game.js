import React, {useState} from 'react'
import classNames from 'classnames'

import {GAME_RESULT} from '../constants'

import {getTurn, getGameResult} from '../helper'

import {Announcer} from '../Announcer'
import {Board} from '../Board'
import {ActionContainer} from '../ActionContainer'
import './Game.css'

export const Game = () => {
  const [steps, setSteps] = useState([])
  const turn = getTurn({steps})
  const gameResult = getGameResult({steps})

  return (
    <div className={classNames('game')}>
      <Announcer
        text={
          gameResult === GAME_RESULT.tie ? (
            <span>It's a Tie!</span>
          ) : gameResult === GAME_RESULT.xWin ? (
            <span>
              <span className={classNames('turn')}>X</span> Wins!
            </span>
          ) : gameResult === GAME_RESULT.oWin ? (
            <span>
              <span className={classNames('turn')}>O</span> Wins!
            </span>
          ) : (
            <span>
              Now It's <span className={classNames('turn')}>{turn}</span>'s
              Turn!
            </span>
          )
        }
      />
      <ActionContainer
        onRewind={
          steps.length > 0
            ? () => {
                const nextSteps = [...steps]
                nextSteps.pop()
                setSteps(nextSteps)
              }
            : null
        }
        onReset={() => {
          setSteps([])
        }}
      />
      <Board steps={steps} setSteps={setSteps} currentResult={gameResult} />
    </div>
  )
}
