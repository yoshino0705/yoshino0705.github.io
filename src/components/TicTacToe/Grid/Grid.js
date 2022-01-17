import React from 'react'
import classNames from 'classnames'
import './Grid.css'
import '../Button.css'

export const Grid = ({disabled, onClick, value}) => {
  return value === 'X' || value === 'O' ? (
    <div
      className={classNames('grid', 'preventSelection', 'gridDisabled')}
      data-testid="game-grid"
    >
      {value}
    </div>
  ) : (
    <div
      className={classNames(
        'grid',
        'preventSelection',
        disabled && 'gridDisabled'
      )}
      data-testid="game-grid"
      onClick={disabled ? undefined : onClick}
    ></div>
  )
}
