import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FileSaver from 'file-saver';

import Grid from '@material-ui/core/Grid'

import Gallery from '../components/Gallery'
import Page from '../components/Page'

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
    position: 'relative',
    display: 'flex',
    justifyContent: 'center'
  },
  galleryContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '70%',
    marginTop: theme.spacing(3)
  },

}));


const WerewolfDeluxeMapPage = () => {

  const classes = useStyles()
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
      <div className={classes.galleryContainer}>
        <Gallery
          images={images}
        />
      </div>

    </Page>
  )
}

export default WerewolfDeluxeMapPage