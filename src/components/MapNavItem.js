import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Grid from '@material-ui/core/Grid'
import Slide from '@material-ui/core/Slide'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    width: 200,
    height: 200
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    backgroundColor: 'rgba(14, 15, 0, 0.5)'
  },
  image: {
    width: '100%',
    height: '100%',
  }

}));


const MapNavItem = (props) => {
  const {
    image,
    title,
    to
  } = props

  const classes = useStyles()
  const [slideIn, setSlideIn] = useState(false)

  const handleSlideIn = () => {
    setSlideIn(true)
  }

  const handleSlideOut = () => {
    setSlideIn(false)
  }

  return (
    <Link
      className={classes.link}
      to={to}
    >
      <Card
        className={classes.root}
        onMouseEnter={handleSlideIn}
        onMouseLeave={handleSlideOut}
      >
        <CardMedia
          className={classes.image}
          image={image}
          title={title}
        />
        <Slide
          direction="up"
          in={slideIn}
        >
          <div
            className={classes.overlay}
          >
            {title}
          </div>
        </Slide>
      </Card>
    </Link>
  )
}

MapNavItem.defaultProps = {
  image: '',
  title: '',
  to: '/'
}

MapNavItem.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  to: PropTypes.string,
}

export default MapNavItem