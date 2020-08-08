import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'
import friedshrimp from '../components/assets/friedshrimp.png'

import Grid from '@material-ui/core/Grid'

import { ABOUT_PAGE_CONTENT } from './constants'

import MemberPanel from '../components/MemberPanel'
import yoshinoIcon from '../components/assets/member_icons/yoshinobhl.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${friedshrimp})`,

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.up('md')]: {
      minHeight: '150vh'
    },
    [theme.breakpoints.down('sm')]: {
      minHeight: '100vh'
    },
    padding: theme.spacing(3),
  },
  container: {
    padding: theme.spacing(3),
    maxWidth: 1000,
    margin: 'auto auto'
  },
  family: {
    fontWeight: 800,
    color: '#FF6200',
    fontSize: 72,
    [theme.breakpoints.down('sm')]: {
      fontSize: 54
    },
  },
  text: {
    color: '#A63F00'
  },
  intro: {
    fontSize: 20
  },
  subText: {
    fontSize: 16
  },
  werewolf: {
    fontSize: 34
  },
  forward: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  reverse: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
}));

const AboutPage = () => {

  const classes = useStyles()
  const language = useSelector(state => state.language)
  const content = ABOUT_PAGE_CONTENT[language.locale]

  return (
    <Page
      className={classes.root}
      elevation={24}
      title="Home"
    >
      <Grid
        className={classes.container}
        container
        direction="column"
        spacing={3}
      >
        <Grid
          className={classes.forward}
          item
        >
          <MemberPanel
            description="酷米家族主要指令師兼地圖規劃兼本網站架設者"
            icon={yoshinoIcon}
            name="藍髮蘿莉四糸乃"
            themeColor="rgba(28, 246, 144, 0.7)"
          />
        </Grid>
        <Grid
          className={classes.reverse}
          item
        >
          <MemberPanel
            description="酷米家族主要指令師兼地圖規劃兼本網站架設者"
            icon={yoshinoIcon}
            name="藍髮蘿莉四糸乃"
            reverse
            themeColor="rgba(28, 246, 144, 0.7)"
          />
        </Grid>
      </Grid>
    </Page>
  )
}

export default AboutPage;