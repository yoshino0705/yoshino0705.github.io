import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Paper from '@material-ui/core/Paper'
import get from 'lodash/get'
import keys from 'lodash/keys'
import includes from 'lodash/includes'
import isEmpty from 'lodash/isEmpty'

import { TITLE } from './constants'

const Page = (props) => {
  const {
    className,
    children,
    elevation,
    locale,
    title,
    ...rest
  } = props

  let titleLabel = title
  if (!isEmpty(locale) && includes(keys(TITLE), locale)) {
    titleLabel = get(TITLE[locale], title) || title
  }

  return (
    <Paper
      className={className}
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