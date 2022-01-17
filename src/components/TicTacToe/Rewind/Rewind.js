import React from 'react'
import classNames from 'classnames'
import './Rewind.css'
import '../Button.css'

export const Rewind = ({onClick}) => {
  if (!onClick) {
    return <></>
  }
  return (
    <div
      className={classNames('button', 'preventSelection', 'rewind')}
      data-testid="rewind-button"
      onClick={onClick}
    >
      Rewind
    </div>
  )
}
