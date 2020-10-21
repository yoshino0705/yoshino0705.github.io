import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

import { SCENE_NAMES } from '../constants'
import { MAP_NAMES, DL_TEXTS } from '../../components/constants'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Gallery from '../../components/Gallery'
import Page from '../../components/Page'
import Dropdown from '../../components/Dropdown'

import venezia0 from '../../components/assets/maps/friedshrimp/venezia/venezia0.jfif'
import venezia1 from '../../components/assets/maps/friedshrimp/venezia/venezia1.jfif'
import venezia2 from '../../components/assets/maps/friedshrimp/venezia/venezia2.jfif'

import shrine0 from '../../components/assets/maps/friedshrimp/shrine/shrine0.jfif'
import shrine1 from '../../components/assets/maps/friedshrimp/shrine/shrine1.jfif'
import shrine2 from '../../components/assets/maps/friedshrimp/shrine/shrine2.jfif'
import shrine3 from '../../components/assets/maps/friedshrimp/shrine/shrine3.jfif'

import hotel0 from '../../components/assets/maps/friedshrimp/hotel/hotel0.jfif'
import hotel1 from '../../components/assets/maps/friedshrimp/hotel/hotel1.jfif'
import hotel2 from '../../components/assets/maps/friedshrimp/hotel/hotel2.jfif'
import hotel3 from '../../components/assets/maps/friedshrimp/hotel/hotel3.jfif'
import hotel4 from '../../components/assets/maps/friedshrimp/hotel/hotel4.jfif'
import hotel5 from '../../components/assets/maps/friedshrimp/hotel/hotel5.jfif'
import hotel6 from '../../components/assets/maps/friedshrimp/hotel/hotel6.jfif'

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


const FriedshrimpPage = () => {

  const classes = useStyles()

  const veneziaImages = [
    venezia0, venezia1, venezia2
  ]
  const shrineImages = [shrine0, shrine1, shrine2, shrine3]
  const hotelImages = [
    hotel0, hotel1, hotel2, hotel3, hotel4, hotel5, hotel6
  ]

  const [images, setImages] = useState(veneziaImages)

  const language = useSelector(state => state.language)
  const content = get(SCENE_NAMES[language.locale], 'friedshrimp')

  const mapOptions = [
    { label: get(content, 'venezia'), value: 'venezia' },
    { label: get(content, 'shrine'), value: 'shrine' },
    { label: get(content, 'hotel'), value: 'hotel' },
  ]

  const getSelectedMap = (val) => {
    switch (val) {
      case 'venezia':
        setImages(veneziaImages)
        break
      case 'shrine':
        setImages(shrineImages)
        break
      case 'hotel':
        setImages(hotelImages)
        break
      default:
        setImages(veneziaImages)
    }
  }

  const mapDownloadOptions = [
    { label: '1.14.4', value: 'https://download.koumifamily.com/index.php?share/file&user=100&sid=eGbHxnJI' },
  ]

  return (
    <Page
      className={classes.root}
      title="friedshrimp"
    >
      <div className={classes.titleContainer}>
        <Typography
          className={classes.title}
          variant="h1"
        >
          {get(MAP_NAMES[language.locale], 'friedshrimp')}
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
          <Grid
            className={classes.subtitleContainer}
            item
          >
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

export default FriedshrimpPage