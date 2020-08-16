import React from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'

import Paper from '@material-ui/core/Paper'
import { TITLES, MAP_TITLES } from './constants'

import get from 'lodash/get'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    background: 'transparent',
    boxShadow: 'none'
  },
}));

const Page = (props) => {
  const {
    className,
    children,
    elevation,
    title,
    ...rest
  } = props

  const classes = useStyles()
  const language = useSelector(state => state.language)
  const titleLabel = get(TITLES[language.locale], title) || get(MAP_TITLES[language.locale], title)

  return (
    <Paper
      className={classNames(classes.root, className)}
      elevation={elevation}
      square
      {...rest}
    >
      <Helmet>
        <title>{titleLabel}</title>
      </Helmet>
      {children}
    </Paper>
  )
}

Page.defaultProps = {
  elevation: 0,
  locale: "",
  title: ""
}

Page.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  elevation: PropTypes.number,
  locale: PropTypes.string,
  title: PropTypes.string,
}

export default Page