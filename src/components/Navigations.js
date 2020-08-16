import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import { TITLES, MAP_TITLES } from './constants'

import ExpandableButton from './Buttons/ExpandableButton'
import IconButton from './Buttons/IconButton'

import map from 'lodash/map'
import get from 'lodash/get'

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center',
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      flexDirection: 'column'
    },
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
  link: {
    textDecoration: 'none'
  },
  button: {
    width: '100%'
  },
  option: {
    display: 'flex',
    alignItems: 'center',
  }
}));

const Navigations = (props) => {
  const {
    className,
    ...rest
  } = props

  const classes = useStyles()
  const language = useSelector(state => state.language)
  const options = map(MAP_TITLES[language.locale], (val, key) => {
    return { label: val, path: key }
  })

  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      {...rest}
    >
      <Grid
        className={classes.option}
        item
      >
        <Link
          className={classes.link}
          to="/home"
        >
          <IconButton
            label={get(TITLES[language.locale], 'home')}
            path="/home"
          />
        </Link>
      </Grid>

      <Grid
        className={classes.option}
        item
      >
        <Link
          className={classes.link}
          to="/members"
        >
          <IconButton
            label={get(TITLES[language.locale], 'members')}
            path="/members"
          />
        </Link>
      </Grid>

      <Grid
        className={classes.option}
        item
      >
        <ExpandableButton
          label={get(TITLES[language.locale], 'maps')}
          options={options}
        />
      </Grid>

    </Grid>
  )
}

Navigations.defaultProps = {

}

Navigations.propTypes = {
  className: PropTypes.string,
}

export default Navigations