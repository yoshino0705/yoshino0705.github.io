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

import space0 from '../../components/assets/maps/planetary_thieves/space/0.png'
import zeta0 from '../../components/assets/maps/planetary_thieves/zeta/0.png'

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

}));


const PlanetaryThievesPage = () => {

  const classes = useStyles()

  const spaceImages = [
    space0
  ]
  const zetaImages = [
    zeta0
  ]

  const [images, setImages] = useState(spaceImages)

  const language = useSelector(state => state.language)
  const content = get(SCENE_NAMES[language.locale], 'planetary_thieves')

  const mapOptions = [
    { label: get(content, 'space'), value: 'space' },
    { label: get(content, 'zeta'), value: 'zeta' },
  ]

  const getSelectedMap = (val) => {
    switch (val) {
      case 'space':
        setImages(spaceImages)
        break
      case 'zeta':
        setImages(zetaImages)
        break
      default:
        setImages(spaceImages)
    }
  }

  const mapDownloadOptions = [
    { label: '1.16.3', value: 'https://download.koumifamily.com/index.php?share/file&user=100&sid=tz5cyuDY' },
  ]

  return (
    <Page
      className={classes.root}
      title="planetary_thieves"
    >
      <div className={classes.titleContainer}>
        <Typography
          className={classes.title}
          variant="h1"
        >
          {get(MAP_NAMES[language.locale], 'planetary_thieves')}
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
          <Grid item>
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

export default PlanetaryThievesPage