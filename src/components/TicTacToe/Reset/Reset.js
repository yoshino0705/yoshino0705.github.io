import React from 'react'
import classNames from 'classnames'
import './Reset.css'
import '../Button.css'

export const Reset = ({onClick}) => {
  if (!onClick) {
    return <></>
  }
  return (
    <div
      className={classNames('button', 'preventSelection', 'reset')}
      data-testid="reset-button"
      onClick={onClick}
    >
      Reset
    </div>
  )
}
