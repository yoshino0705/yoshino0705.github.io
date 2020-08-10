import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'
// import { useLocation } from 'react-router-dom'


import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import MapNav from '../components/MapNav'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  galleryContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    backgroundColor: 'transparent',
    boxShadow: 'none'
  }
}));

const MapsPage = () => {

  const classes = useStyles()
  // const { pathname } = useLocation()


  return (
    <Page
      className={classes.root}
      title="maps"
    >
      <Card className={classes.card}>
        <CardContent>
          <Grid
            container
            direction="column"
            spacing={3}
          >
            <Grid item>
              <MapNav />
            </Grid>
            <Grid
              className={classes.galleryContainer}
              item
            >
              {/* <Gallery
                images={images}
              /> */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>

    </Page>
  )
}

export default MapsPage