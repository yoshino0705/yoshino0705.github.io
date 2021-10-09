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

// import TabBoard from '../../components/Tabs/TabBoard'

import snow0 from '../../components/assets/maps/werewolf_dlx/snow/snow0.jpg'
import snow1 from '../../components/assets/maps/werewolf_dlx/snow/snow1.jpg'
import snow2 from '../../components/assets/maps/werewolf_dlx/snow/snow2.jpg'
import snow3 from '../../components/assets/maps/werewolf_dlx/snow/snow3.jpg'
import snow4 from '../../components/assets/maps/werewolf_dlx/snow/snow4.jpg'
import snow5 from '../../components/assets/maps/werewolf_dlx/snow/snow5.jpg'
import snow6 from '../../components/assets/maps/werewolf_dlx/snow/snow6.jpg'
import snow7 from '../../components/assets/maps/werewolf_dlx/snow/snow7.jpg'
import snow8 from '../../components/assets/maps/werewolf_dlx/snow/snow8.jpg'
import snow9 from '../../components/assets/maps/werewolf_dlx/snow/snow9.jpg'
import snow10 from '../../components/assets/maps/werewolf_dlx/snow/snow10.jpg'
import snow11 from '../../components/assets/maps/werewolf_dlx/snow/snow11.jpg'
import snow12 from '../../components/assets/maps/werewolf_dlx/snow/snow12.jpg'
import snow13 from '../../components/assets/maps/werewolf_dlx/snow/snow13.jpg'
import snow14 from '../../components/assets/maps/werewolf_dlx/snow/snow14.jpg'
import snow15 from '../../components/assets/maps/werewolf_dlx/snow/snow15.jpg'
import snow16 from '../../components/assets/maps/werewolf_dlx/snow/snow16.jpg'

import art0 from '../../components/assets/maps/werewolf_dlx/art/art0.jpg'
import art1 from '../../components/assets/maps/werewolf_dlx/art/art1.jpg'
import art2 from '../../components/assets/maps/werewolf_dlx/art/art2.jpg'
import art3 from '../../components/assets/maps/werewolf_dlx/art/art3.jpg'
import art4 from '../../components/assets/maps/werewolf_dlx/art/art4.jpg'
import art5 from '../../components/assets/maps/werewolf_dlx/art/art5.jpg'

import crystal0 from '../../components/assets/maps/werewolf_dlx/crystal/crystal0.jpg'
import crystal1 from '../../components/assets/maps/werewolf_dlx/crystal/crystal1.jpg'
import crystal2 from '../../components/assets/maps/werewolf_dlx/crystal/crystal2.jpg'
import crystal3 from '../../components/assets/maps/werewolf_dlx/crystal/crystal3.jpg'
import crystal4 from '../../components/assets/maps/werewolf_dlx/crystal/crystal4.jpg'

import comm0 from '../../components/assets/maps/werewolf_dlx/comm/comm0.jpg'
import comm1 from '../../components/assets/maps/werewolf_dlx/comm/comm1.jpg'
import comm2 from '../../components/assets/maps/werewolf_dlx/comm/comm2.jpg'
import comm3 from '../../components/assets/maps/werewolf_dlx/comm/comm3.jpg'
import comm4 from '../../components/assets/maps/werewolf_dlx/comm/comm4.jpg'
import comm5 from '../../components/assets/maps/werewolf_dlx/comm/comm5.jpg'
import comm6 from '../../components/assets/maps/werewolf_dlx/comm/comm6.jpg'
import comm7 from '../../components/assets/maps/werewolf_dlx/comm/comm7.jpg'
import comm8 from '../../components/assets/maps/werewolf_dlx/comm/comm8.jpg'
import comm9 from '../../components/assets/maps/werewolf_dlx/comm/comm9.jpg'
import comm10 from '../../components/assets/maps/werewolf_dlx/comm/comm10.jpg'
import comm11 from '../../components/assets/maps/werewolf_dlx/comm/comm11.jpg'
import comm12 from '../../components/assets/maps/werewolf_dlx/comm/comm12.jpg'
import comm13 from '../../components/assets/maps/werewolf_dlx/comm/comm13.jpg'

import town0 from '../../components/assets/maps/werewolf_dlx/town/town0.jpg'
import town1 from '../../components/assets/maps/werewolf_dlx/town/town1.jpg'
import town2 from '../../components/assets/maps/werewolf_dlx/town/town2.jpg'
import town3 from '../../components/assets/maps/werewolf_dlx/town/town3.jpg'
import town4 from '../../components/assets/maps/werewolf_dlx/town/town4.jpg'
import town5 from '../../components/assets/maps/werewolf_dlx/town/town5.jpg'
import town6 from '../../components/assets/maps/werewolf_dlx/town/town6.jpg'
import town7 from '../../components/assets/maps/werewolf_dlx/town/town7.jpg'

import sea0 from '../../components/assets/maps/werewolf_dlx/sea/sea0.jpg'
import sea1 from '../../components/assets/maps/werewolf_dlx/sea/sea1.jpg'
import sea2 from '../../components/assets/maps/werewolf_dlx/sea/sea2.jpg'
import sea3 from '../../components/assets/maps/werewolf_dlx/sea/sea3.jpg'
import sea4 from '../../components/assets/maps/werewolf_dlx/sea/sea4.jpg'
import sea5 from '../../components/assets/maps/werewolf_dlx/sea/sea5.jpg'
import sea6 from '../../components/assets/maps/werewolf_dlx/sea/sea6.jpg'
import sea7 from '../../components/assets/maps/werewolf_dlx/sea/sea7.jpg'

import get from 'lodash/get'

import DownloadOptions from '../../components/DownloadOptions'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    paddingBottom: 300
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
    backgroundColor: 'rgba(128, 128, 128, 0.9)',
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
  content: {
    minHeight: 1200,
    [theme.breakpoints.down('sm')]: {
      minHeight: 1500,
    },
  },

  card: {
    [theme.breakpoints.up('md')]: {
      width: 600
    },
    [theme.breakpoints.down('sm')]: {
      width: 250
    },
    backgroundColor: 'rgba(223, 169, 169, 0.70)',
    borderRadius: 12,
    padding: theme.spacing(3),
    marginTop: theme.spacing(1)
  },
  text: {
    fontFamily: '微軟正黑體',
    fontSize: 24,
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    },
  },
  marginTop: {
    marginTop: theme.spacing(1)
  },
  center: {
    display: 'flex',
    justifyContent: 'center'
  }

}));


const WerewolfRemasteredMapPage = () => {

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

  const mapDownloadOptions = [
    { label: '1.17.1', value: 'https://dl.orangedox.com/koumi-werewolf-remastered-v3' }
  ]

  const datapackDownloadOptions = [
    { label: '1.17.1', value: 'https://dl.orangedox.com/koumi-werewolf-remastered-dp-v3' }
  ]

  return (
    <Page
      className={classes.root}
      title="werewolf-remastered"
    >
      <div className={classes.titleContainer}>
        <Typography
          className={classes.title}
          variant="h1"
        >
          {get(MAP_NAMES[language.locale], 'werewolf_remastered')}
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


        <div>
          <Grid item className={classes.subtitleContainer}>
            <Typography
              className={classes.subtitle}
              variant="h1"
            >
              {get(DL_TEXTS[language.locale], 'download_datapack')}
            </Typography>
          </Grid>
          <DownloadOptions
            options={datapackDownloadOptions}
            type="datapack"
          />
        </div>

        {/* <div>
          <Grid item className={classes.subtitleContainer}>
            <Typography
              className={classes.subtitle}
              variant="h1"
            >
              {get(contentTitles, 'intro')}
            </Typography>
          </Grid>

          <Card
            className={classes.card}
          >
            <CardContent>
              <Typography
                className={classes.text}
                variant="h4"
              >
                {get(pageContents, 'intro')}
              </Typography>
            </CardContent>
          </Card>
        </div>

        <div>
          <Grid item className={classes.subtitleContainer}>
            <Typography
              className={classes.subtitle}
              variant="h1"
            >
              {get(contentTitles, 'modes')}
            </Typography>
          </Grid>

          <Grid
            className={classes.marginTop}
            item
          >
            <TabBoard
              tabs={[
                { title: get(pageContents, 'riot_title'), content: get(pageContents, 'riot_content') },
                { title: get(pageContents, 'debate_title'), content: get(pageContents, 'debate_content') },
              ]}
            />
          </Grid>
        </div> */}

      </Grid>

    </Page>
  )
}

export default WerewolfRemasteredMapPage