import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Paper from '@material-ui/core/Paper'

const Page = (props) => {
  const {
    className,
    children,
    elevation,
    title,
    ...rest
  } = props
  return (
    <Paper
      className={className}
      elevation={elevation}
      square
      {...rest}
    >
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Paper>
  )
}

Page.defaultProps = {
  elevation: 0,
  title: ""
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  elevation: PropTypes.number,
  title: PropTypes.string,
}

export default Page