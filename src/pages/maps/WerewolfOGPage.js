import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import FileSaver from 'file-saver';
import { useSelector } from 'react-redux'

import { SCENE_NAMES } from '../constants'
import { MAP_NAMES, DL_TEXTS } from '../../components/constants'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Gallery from '../../components/Gallery'
import Page from '../../components/Page'
import Dropdown from '../../components/Dropdown'

import town0 from '../../components/assets/maps/werewolf_og/town/town0.jfif'
import town1 from '../../components/assets/maps/werewolf_og/town/town1.jfif'
import town2 from '../../components/assets/maps/werewolf_og/town/town2.jfif'
import town3 from '../../components/assets/maps/werewolf_og/town/town3.jfif'
import town4 from '../../components/assets/maps/werewolf_og/town/town4.jfif'
import town5 from '../../components/assets/maps/werewolf_og/town/town5.jfif'
import town6 from '../../components/assets/maps/werewolf_og/town/town6.jfif'
import town7 from '../../components/assets/maps/werewolf_og/town/town7.jfif'
import town8 from '../../components/assets/maps/werewolf_og/town/town8.jfif'
import town9 from '../../components/assets/maps/werewolf_og/town/town9.jfif'

import mushroom0 from '../../components/assets/maps/werewolf_og/mushroom/mushroom0.jfif'
import mushroom1 from '../../components/assets/maps/werewolf_og/mushroom/mushroom1.jfif'

import sea0 from '../../components/assets/maps/werewolf_og/sea/sea0.jfif'
import sea1 from '../../components/assets/maps/werewolf_og/sea/sea1.jfif'

import vacation0 from '../../components/assets/maps/werewolf_og/vacation/vacation0.jfif'
import vacation1 from '../../components/assets/maps/werewolf_og/vacation/vacation1.jfif'
import vacation2 from '../../components/assets/maps/werewolf_og/vacation/vacation2.jfif'
import vacation3 from '../../components/assets/maps/werewolf_og/vacation/vacation3.jfif'
import vacation4 from '../../components/assets/maps/werewolf_og/vacation/vacation4.jfif'
import vacation5 from '../../components/assets/maps/werewolf_og/vacation/vacation5.jfif'

import space0 from '../../components/assets/maps/werewolf_og/space/space0.jfif'
import space1 from '../../components/assets/maps/werewolf_og/space/space1.jfif'
import space2 from '../../components/assets/maps/werewolf_og/space/space2.jfif'
import space3 from '../../components/assets/maps/werewolf_og/space/space3.jfif'

import lobby from '../../components/assets/maps/werewolf_og/lobby.jfif'

import get from 'lodash/get'
import DownloadOptions from '../../components/DownloadOptions'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 300,
    fontFamily: '微軟正黑體'
  },
  galleryContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    marginTop: theme.spacing(3)
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    borderRadius: 30,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  title: {
    fontWeight: 800,
    color: '#FFDF00',
    fontSize: 72,
    [theme.breakpoints.down('sm')]: {
      fontSize: 24
    },
    padding: theme.spacing(0, 3),
    fontFamily: '微軟正黑體'
  },

  subtitleContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(128, 128, 128, 0.7)',
    borderRadius: 30,
    padding: theme.spacing(1),
    marginTop: theme.spacing(5)
  },
  subtitle: {
    fontWeight: 800,
    color: '#FFDF00',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14
    },
    padding: theme.spacing(0, 2, 0, 2),
    fontFamily: '微軟正黑體'
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }
}));


const WerewolfOGPage = () => {

  const classes = useStyles()

  const townImages = [town0, town1, town2, town3, town4,
    town5, town6, town7, town8, town9
  ]
  const mushroomImages = [
    mushroom0, mushroom1
  ]
  const seaImages = [sea0, sea1]
  const vacationImages = [vacation0, vacation1, vacation2, vacation3, vacation4, vacation5]
  const spaceImages = [
    space0, space1, space2, space3
  ]
  const lobbyImages = [
    lobby
  ]

  const [images, setImages] = useState(townImages)

  const language = useSelector(state => state.language)
  const content = get(SCENE_NAMES[language.locale], 'werewolf_og')

  const mapOptions = [
    { label: get(content, 'town'), value: 'town' },
    { label: get(content, 'mushroom'), value: 'mushroom' },
    { label: get(content, 'sea'), value: 'sea' },
    { label: get(content, 'vacation'), value: 'vacation' },
    { label: get(content, 'space'), value: 'space' },
    { label: get(content, 'lobby'), value: 'lobby' }
  ]

  const getSelectedMap = (val) => {
    switch (val) {
      case 'town':
        setImages(townImages)
        break
      case 'mushroom':
        setImages(mushroomImages)
        break
      case 'sea':
        setImages(seaImages)
        break
      case 'vacation':
        setImages(vacationImages)
        break
      case 'space':
        setImages(spaceImages)
        break
      case 'lobby':
        setImages(lobbyImages)
        break
      default:
        setImages(townImages)
    }
  }

  const mapDownloadOptions = [
    { label: '1.14.2', value: 'https://dl.orangedox.com/koumi-werewolf-v6-1' }
  ]

  return (
    <Page
      className={classes.root}
      title="werewolf-og"
    >
      <div className={classes.titleContainer}>
        <Typography
          className={classes.title}
          variant="h1"
        >
          {get(MAP_NAMES[language.locale], 'werewolf_og')}
        </Typography>
      </div>
      <div className={classes.galleryContainer}>
        <Gallery
          images={images}
        />
      </div>
      <Grid
        alignItems="center"
        container
        direction="column"
        justify="center"
      >
        <div>
          <Grid item className={classes.subtitleContainer}>
            <Typography
              className={classes.subtitle}
              variant="h1"
            >
              {get(content, 'preview')}
            </Typography>
          </Grid>
          <Grid
            className={classes.center}
            item
          >
            <Dropdown
              getSelectedOption={getSelectedMap}
              label={get(content, 'preview')}
              options={mapOptions}
            />
          </Grid>
        </div>


        <div>
          <Grid item className={classes.subtitleContainer}>
            <Typography
              className={classes.subtitle}
              variant="h1"
            >
              {get(DL_TEXTS[language.locale], 'download_map')}
            </Typography>
          </Grid>
          <DownloadOptions
            options={mapDownloadOptions}
            type="map"
          />
        </div>
      </Grid>

    </Page>
  )
}

export default WerewolfOGPage