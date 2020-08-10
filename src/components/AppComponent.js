import React from 'react'

import Header from './Header'
import Content from './Content'
import { makeStyles } from '@material-ui/core/styles'
import friedshrimp from '../components/assets/friedshrimp.png'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',
    position: 'relative',
    backgroundImage: `url(${friedshrimp})`,
    minHeight: '100vh'
  },
}));

const AppComponent = () => {

  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Header />
      <Content />
    </div>
  )
}

export default AppComponent