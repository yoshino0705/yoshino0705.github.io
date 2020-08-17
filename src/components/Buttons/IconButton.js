import React from 'react'
import { useLocation } from 'react-router-dom'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import friedshrimp from '../assets/friedshrimp.png'

import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import toLower from 'lodash/toLower'
import includes from 'lodash/includes'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
    fontFamily: '微軟正黑體 !important'
  },
  icon: {
    height: 20,
    objectFit: 'contain'
  },
  text: {
    color: '#fff',
    margin: theme.spacing(0, 1),
    fontFamily: '微軟正黑體 !important'
  },
  selected: {
    color: '#FFDF00',
    fontWeight: 900,
  },
  option: {
    display: 'flex',
    alignItems: 'center'
  },
}));

const IconButton = (props) => {
  const {
    disableHightlight,
    label,
    path,
    ...rest
  } = props

  const classes = useStyles()
  const { pathname } = useLocation()

  return (
    <List
      component="div"
      className={classes.root}
      disablePadding
    >
      <ListItem
        button
        className={classes.svg}
        {...rest}
      >
        <img
          alt="logo"
          className={classes.icon}
          src={friedshrimp}
        />
        <ListItemText
          className={classNames(
            classes.text,
            { [classes.selected]: !disableHightlight && includes(toLower(pathname), path) })}
          primary={label}
          primaryTypographyProps={{
            style: { fontFamily: '微軟正黑體' }
          }}
        />
      </ListItem>

    </List>
  )

}

IconButton.defaultProps = {
  disableHightlight: false,
  label: '',
  path: ''
}

IconButton.propTypes = {
  disableHightlight: PropTypes.bool,
  label: PropTypes.string,
  path: PropTypes.string
}

export default IconButton