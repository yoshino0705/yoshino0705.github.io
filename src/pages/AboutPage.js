import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'
import friedshrimp from '../components/assets/friedshrimp.png'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${friedshrimp})`,
    height: '150vh'
  },

}));

const AboutPage = () => {

  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Members"
    >
      Members Page
    </Page>
  )
}

export default AboutPage