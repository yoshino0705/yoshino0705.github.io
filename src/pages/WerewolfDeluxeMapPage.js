import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import FileSaver from 'file-saver';
import { useSelector } from 'react-redux'

import { SCENE_NAMES } from './constants'
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

import crystal0 from '../components/assets/maps/werewolf_dlx/crystal/crystal0.jpg'
import crystal1 from '../components/assets/maps/werewolf_dlx/crystal/crystal1.png'
import crystal2 from '../components/assets/maps/werewolf_dlx/crystal/crystal2.png'
import crystal3 from '../components/assets/maps/werewolf_dlx/crystal/crystal3.png'
import crystal4 from '../components/assets/maps/werewolf_dlx/crystal/crystal4.png'

import comm0 from '../components/assets/maps/werewolf_dlx/comm/comm0.png'
import comm1 from '../components/assets/maps/werewolf_dlx/comm/comm1.png'
import comm2 from '../components/assets/maps/werewolf_dlx/comm/comm2.png'
import comm3 from '../components/assets/maps/werewolf_dlx/comm/comm3.png'
import comm4 from '../components/assets/maps/werewolf_dlx/comm/comm4.png'
import comm5 from '../components/assets/maps/werewolf_dlx/comm/comm5.png'
import comm6 from '../components/assets/maps/werewolf_dlx/comm/comm6.png'
import comm7 from '../components/assets/maps/werewolf_dlx/comm/comm7.png'
import comm8 from '../components/assets/maps/werewolf_dlx/comm/comm8.png'
import comm9 from '../components/assets/maps/werewolf_dlx/comm/comm9.png'
import comm10 from '../components/assets/maps/werewolf_dlx/comm/comm10.png'
import comm11 from '../components/assets/maps/werewolf_dlx/comm/comm11.png'
import comm12 from '../components/assets/maps/werewolf_dlx/comm/comm12.png'
import comm13 from '../components/assets/maps/werewolf_dlx/comm/comm13.png'

import town0 from '../components/assets/maps/werewolf_dlx/town/town0.png'
import town1 from '../components/assets/maps/werewolf_dlx/town/town1.png'
import town2 from '../components/assets/maps/werewolf_dlx/town/town2.png'
import town3 from '../components/assets/maps/werewolf_dlx/town/town3.jpg'
import town4 from '../components/assets/maps/werewolf_dlx/town/town4.jpg'
import town5 from '../components/assets/maps/werewolf_dlx/town/town5.png'
import town6 from '../components/assets/maps/werewolf_dlx/town/town6.png'
import town7 from '../components/assets/maps/werewolf_dlx/town/town7.png'

import sea0 from '../components/assets/maps/werewolf_dlx/sea/sea0.png'
import sea1 from '../components/assets/maps/werewolf_dlx/sea/sea1.png'
import sea2 from '../components/assets/maps/werewolf_dlx/sea/sea2.png'
import sea3 from '../components/assets/maps/werewolf_dlx/sea/sea3.png'
import sea4 from '../components/assets/maps/werewolf_dlx/sea/sea4.jpg'
import sea5 from '../components/assets/maps/werewolf_dlx/sea/sea5.png'
import sea6 from '../components/assets/maps/werewolf_dlx/sea/sea6.png'
import sea7 from '../components/assets/maps/werewolf_dlx/sea/sea7.png'

import get from 'lodash/get'

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
  const crystalImages = [crystal0, crystal1, crystal2, crystal3, crystal4]
  const commImages = [
    comm0, comm1, comm2, comm3, comm4, comm5, comm6, comm7,
    comm8, comm9, comm10, comm11, comm12, comm13
  ]
  const townImages = [town0, town1, town2, town3, town4, town5, town6, town7]
  const seaImages = [sea0, sea1, sea2, sea3, sea4, sea5, sea6, sea7]
  const [images, setImages] = useState(snowImages)

  // const onDownload = () => {
  //   FileSaver.saveAs(
  //     process.env.PUBLIC_URL + "/downloads/datapack.zip",
  //     "Werewolf_Datapack.zip");
  // }

  const language = useSelector(state => state.language)
  const content = get(SCENE_NAMES[language.locale], 'werewolf_dlx')

  const mapOptions = [
    { label: get(content, 'snow'), value: 'snow' },
    { label: get(content, 'art'), value: 'art' },
    { label: get(content, 'crystal'), value: 'crystal' },
    { label: get(content, 'comm'), value: 'comm' },
    { label: get(content, 'town'), value: 'town' },
    { label: get(content, 'sea'), value: 'sea' }
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
        setImages(crystalImages)
        break
      case 'comm':
        setImages(commImages)
        break
      case 'town':
        setImages(townImages)
        break
      case 'sea':
        setImages(seaImages)
        break
      default:
        setImages(snowImages)
    }
  }

  return (
    <Page
      className={classes.root}
      title="werewolf-dlx"
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
            label={get(content, 'preview')}
            options={mapOptions}
          />
        </Grid>
      </Grid>

    </Page>
  )
}

export default WerewolfDeluxeMapPage