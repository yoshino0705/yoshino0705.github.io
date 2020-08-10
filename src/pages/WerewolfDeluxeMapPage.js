import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import FileSaver from 'file-saver';

import Grid from '@material-ui/core/Grid'

import Gallery from '../components/Gallery'
import Page from '../components/Page'
import Dropdown from '../components/Dropdown'

import snow0 from '../components/assets/maps/werewolf_dlx/snow/snow0.png'
import snow1 from '../components/assets/maps/werewolf_dlx/snow/snow1.png'
import snow2 from '../components/assets/maps/werewolf_dlx/snow/snow2.png'
import snow3 from '../components/assets/maps/werewolf_dlx/snow/snow3.png'
import snow4 from '../components/assets/maps/werewolf_dlx/snow/snow4.png'
import snow5 from '../components/assets/maps/werewolf_dlx/snow/snow5.png'
import snow6 from '../components/assets/maps/werewolf_dlx/snow/snow6.png'
import snow7 from '../components/assets/maps/werewolf_dlx/snow/snow7.png'
import snow8 from '../components/assets/maps/werewolf_dlx/snow/snow8.png'
import snow9 from '../components/assets/maps/werewolf_dlx/snow/snow9.png'
import snow10 from '../components/assets/maps/werewolf_dlx/snow/snow10.png'
import snow11 from '../components/assets/maps/werewolf_dlx/snow/snow11.png'
import snow12 from '../components/assets/maps/werewolf_dlx/snow/snow12.png'
import snow13 from '../components/assets/maps/werewolf_dlx/snow/snow13.png'
import snow14 from '../components/assets/maps/werewolf_dlx/snow/snow14.png'
import snow15 from '../components/assets/maps/werewolf_dlx/snow/snow15.jpg'
import snow16 from '../components/assets/maps/werewolf_dlx/snow/snow16.png'

import art0 from '../components/assets/maps/werewolf_dlx/art/art0.png'
import art1 from '../components/assets/maps/werewolf_dlx/art/art1.png'
import art2 from '../components/assets/maps/werewolf_dlx/art/art2.jpg'
import art3 from '../components/assets/maps/werewolf_dlx/art/art3.png'
import art4 from '../components/assets/maps/werewolf_dlx/art/art4.png'
import art5 from '../components/assets/maps/werewolf_dlx/art/art5.png'

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
    width: '90%',
    marginTop: theme.spacing(3)
  },

}));


const WerewolfDeluxeMapPage = () => {

  const classes = useStyles()

  const snowImages = [
    snow0, snow1, snow2, snow3, snow4, snow5, snow6, snow7,
    snow8, snow9, snow10, snow11, snow12, snow13, snow14, snow15, snow16
  ]
  const artImages = [art0, art1, art2, art3, art4, art5]
  const townImages = [town0, town1, town2, town3, town4, town5, town6, town7]
  const [images, setImages] = useState(snowImages)

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

  const getSelectedMap = (val) => {
    switch (val) {
      case 'snow':
        setImages(snowImages)
        break
      case 'art':
        setImages(artImages)
        break
      case 'crystal':
        setImages(townImages)
        break
      case 'comm':
        setImages(townImages)
        break
      case 'town':
        setImages(townImages)
        break
      case 'sea':
        setImages(townImages)
        break
      default:
        setImages(townImages)
    }
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