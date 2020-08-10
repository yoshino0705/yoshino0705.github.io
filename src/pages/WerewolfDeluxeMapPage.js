import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FileSaver from 'file-saver';

import Grid from '@material-ui/core/Grid'

import Gallery from '../components/Gallery'
import Page from '../components/Page'
import Dropdown from '../components/Dropdown'

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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
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

  const mapOptions = [
    { label: '雪町', value: 'snow' },
    { label: '美術館', value: 'art' },
    { label: '水晶風暴', value: 'crystal' },
    { label: '河堤社區', value: 'comm' },
    { label: '經典城鎮', value: 'town' },
    { label: '海底都市', value: 'sea' }
  ]

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

  const getSelectedMap = (val) => {
    console.log(`selected ${val}`)
  }

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
      <Grid
        container
        justify="center"
      >
        <Grid item>
          <Dropdown
            getSelectedOption={getSelectedMap}
            label="預覽地圖"
            options={mapOptions}
          />
        </Grid>
      </Grid>

    </Page>
  )
}

export default WerewolfDeluxeMapPage