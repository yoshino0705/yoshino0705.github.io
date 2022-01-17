import React from 'react'
import classNames from 'classnames'
import './Announcer.css'
import '../Button.css'

export const Announcer = ({text}) => {
  return (
    <div
      className={classNames('announcer', 'preventSelection')}
      data-testid="announcer"
    >
      {text}
    </div>
  )
}
