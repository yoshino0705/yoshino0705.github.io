import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#808080",
    // height: '100vh'
  },
}));

const HomePage = (props) => {
  const {
    locale
  } = props

  const classes = useStyles()

  return (
    <Page
      className={classes.root}
      locale={locale}
      title="Home"
    >
      home
    </Page>
  )
}

export default HomePage;