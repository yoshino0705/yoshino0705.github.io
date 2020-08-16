import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Collapse from '@material-ui/core/Collapse'

import PropTypes from 'prop-types'
import classNames from 'classnames'

import friedshrimp from '../assets/friedshrimp.png'

import { makeStyles } from '@material-ui/core/styles'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'


import map from 'lodash/map'
import toLower from 'lodash/toLower'
import includes from 'lodash/includes'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',
  },
  icon: {
    height: 20,
    objectFit: 'contain'
  },
  text: {
    color: '#fff',
    margin: theme.spacing(0, 1)
  },
  selected: {
    color: '#FFDF00',
    fontWeight: 900
  },
  option: {
    display: 'flex',
    alignItems: 'center'
  },
  svg: {
    color: '#fff'
  },
  collapseMenu: {
    position: 'absolute',
    background: '#000',
    borderRadius: 12,
    zIndex: 1000,
    width: '100%'
  }
}));

const ExpandableButton = (props) => {
  const {
    label,
    options,
    parentIcon,
    childIcon
  } = props

  const classes = useStyles()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(!open)

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <List
        component="div"
        className={classes.root}
        disablePadding
      >
        <ListItem
          button
          className={classes.svg}
          onClick={handleToggle}
        >
          {parentIcon ? parentIcon :
            <img
              alt="logo"
              className={classes.icon}
              src={friedshrimp}
            />}
          <ListItemText
            className={classes.text}
            primary={label}
          />
          {open ? <ExpandLess className={classes.svg} /> : <ExpandMore className={classes.svg} />}
        </ListItem>
        <Collapse
          className={classes.collapseMenu}
          in={open}
          timeout="auto"
        >

          <List component="div" disablePadding>
            {
              map(options, o => {
                return (
                  o.path ?
                    <Link to={`/${o.path}`}>
                      <ListItem
                        button
                        onClick={() => {
                          setOpen(false)
                          if (o.onClick) o.onClick()
                        }}
                      >
                        <img
                          alt="logo"
                          className={classes.icon}
                          src={childIcon || friedshrimp}
                        />
                        <ListItemText
                          className={classNames(
                            classes.text,
                            { [classes.selected]: includes(toLower(pathname), o.path) })}
                          primary={o.label}
                        />
                      </ListItem>
                    </Link>
                    :
                    <ListItem
                      button
                      onClick={() => {
                        setOpen(false)
                        if (o.onClick) o.onClick()
                      }}
                    >
                      <img
                        alt="logo"
                        className={classes.icon}
                        src={childIcon || friedshrimp}
                      />
                      <ListItemText
                        className={classNames(
                          classes.text,
                          { [classes.selected]: includes(toLower(pathname), o.path) })}
                        primary={o.label}
                      />
                    </ListItem>
                )
              })
            }


          </List>

        </Collapse>
      </List>
    </ClickAwayListener>
  )

}

ExpandableButton.defaultProps = {
  to: '/',
  options: [],
  parentIcon: null,
  childIcon: null
}

ExpandableButton.propTypes = {
  to: PropTypes.string,
  options: PropTypes.array,
  parentIcon: PropTypes.any,
  childIcon: PropTypes.any,
}

export default ExpandableButton