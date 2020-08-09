import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'
import friedshrimp from '../components/assets/friedshrimp.png'
import { useLocation } from 'react-router-dom'
import FileSaver from 'file-saver';

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import MapNav from '../components/MapNav'
import Gallery from '../components/Gallery'

import town0 from '../components/assets/maps/werewolf_dlx/town/town0.png'
import town1 from '../components/assets/maps/werewolf_dlx/town/town1.png'
import town2 from '../components/assets/maps/werewolf_dlx/town/town2.png'
import town3 from '../components/assets/maps/werewolf_dlx/town/town3.jpg'
import town4 from '../components/assets/maps/werewolf_dlx/town/town4.jpg'
import town5 from '../components/assets/maps/werewolf_dlx/town/town5.png'
import town6 from '../components/assets/maps/werewolf_dlx/town/town6.png'
import town7 from '../components/assets/maps/werewolf_dlx/town/town7.png'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundImage: `url(${friedshrimp})`,
    height: '150vh'
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
  const { pathname } = useLocation()
  const onDownload = () => {
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/downloads/datapack.zip",
      "Werewolf_Datapack.zip");
  }

  const images = [
    { src: town0 },
    { src: town1 },
    { src: town2 },
    { src: town3 },
    { src: town4 },
    { src: town5 },
    { src: town6 },
    { src: town7 }
  ]

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