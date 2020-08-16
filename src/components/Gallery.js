import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import map from 'lodash/map'
import isEmpty from 'lodash/isEmpty'

import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('md')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },

}));


const Gallery = (props) => {
  const {
    images
  } = props

  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = useState(0)

  useEffect(() => {
    setSelectedIndex(0)
  }, [images])

  if (isEmpty(images)) return <div />

  return (
    <Grid
      className={classes.root}
      container
    >
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        useKeyboardArrows
        swipeable
        emulateTouch
        stopOnHover
        interval={5000}
        selectedItem={selectedIndex}
        onChange={(e) => setSelectedIndex(e)}
      >
        {
          map(images, (im, i) => {
            return (
              <div key={i}>
                <img alt="" src={im} loading="lazy" />
                {/* <p className="legend">{im.legend}</p> */}
              </div>
            )
          })
        }
      </Carousel>
    </Grid>
  )
}

Gallery.defaultProps = {
  images: []
}

Gallery.propTypes = {
  images: PropTypes.array
}

export default Gallery