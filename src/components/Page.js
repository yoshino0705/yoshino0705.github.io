import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Paper from '@material-ui/core/Paper'

const Page = (props) => {
  const {
    children,
    elevation,
    title,
  } = props
  return (
    <Paper elevation={elevation}>
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
  children: PropTypes.any,
  elevation: PropTypes.number,
  title: PropTypes.string,
}

export default Page