import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#808080",
    // height: '100vh'
  },
}));

const HomePage = () => {
  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      title="Home"
    >
      home
    </Page>
  )
}

export default HomePage;