import React from 'react'
import classNames from 'classnames'
import './ActionContainer.css'

import {Reset} from '../Reset'
import {Rewind} from '../Rewind'

export const ActionContainer = ({
  onReset,
  onRewind,
}) => {
  return (
    <div className={classNames('actionContainer')}>
      <Rewind onClick={onRewind} />
      <Reset onClick={onReset} />
    </div>
  )
}
