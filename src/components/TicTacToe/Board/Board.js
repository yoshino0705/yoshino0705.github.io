import React from 'react'
import classNames from 'classnames'

import {Grid} from '../Grid'
import {GAME_RESULT} from '../constants'

import {getGrids, getTurn} from '../helper'
import './Board.css'

export const Board = ({steps, setSteps, currentResult}) => {
  const grids = getGrids({steps})

  return (
    <div className={classNames('board')} data-testid="game-board">
      {grids.map((symbol, i) => (
        <Grid
          key={i}
          value={symbol}
          onClick={() => {
            const newStep = {
              symbol: getTurn({steps}),
              position: i,
            }
            setSteps([...steps, newStep])
          }}
          disabled={currentResult !== GAME_RESULT.ongoing}
        />
      ))}
    </div>
  )
}
