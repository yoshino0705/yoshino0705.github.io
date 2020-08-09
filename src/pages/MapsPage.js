import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'
import friedshrimp from '../components/assets/friedshrimp.png'
import { useLocation } from 'react-router-dom'
import FileSaver from 'file-saver';

import { Carousel } from 'react-responsive-carousel'
import image from '../components/assets/friedshrimp.png'
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundImage: `url(${friedshrimp})`,
    height: '150vh'
  },
  slider: {
    height: 100
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

  return (
    <Page
      className={classes.root}
      title="maps"
    >
      <div
        style={{ width: '50%', margin: '0 auto' }}
      >
        <Carousel
          autoPlay
          showStatus={false}
          showThumbs={false}
          useKeyboardArrows
          stopOnHover
          swipeable
          emulateTouch={false}
        >
          <div >
            <img alt="" src={image} loading="lazy" />
            <p className="legend">Legend 1</p>
          </div>
          <div >
            <img alt="" src={image} loading="lazy" />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </div>

    </Page>
  )
}

export default MapsPage