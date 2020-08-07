import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'
import friedshrimp from '../components/assets/friedshrimp.png'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import { HOME_PAGE_CONTENT } from './constants'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',
    position: 'relative',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundImage: `url(${friedshrimp})`,
    height: '150vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: theme.spacing(3)
  },
  card: {
    backgroundColor: 'rgba(223, 169, 169, 0.70)',
    borderRadius: 12,
    width: 600
  },
  card2: {
    backgroundColor: 'rgba(38, 242, 242, 0.70)',
    borderRadius: 12,
    width: 600
  },
  family: {
    fontWeight: 800,
    color: '#FF6200'
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
  }
}));

const HomePage = () => {

  const classes = useStyles()
  const language = useSelector(state => state.language)
  const content = HOME_PAGE_CONTENT[language.locale]

  return (
    <Page
      className={classes.root}
      elevation={24}
      title="Home"
    >
      <Card
        className={classes.card}
      >
        <CardContent>
          <Grid
            className={classes.container}
            container
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography
                className={classes.text}
                variant="h4"
              >
                {content.welcome}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.family}
                variant="h1"
              >
                {content.koumi}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.text}
                variant="h4"
              >
                {content.website}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card
        className={classes.card2}
      >
        <CardContent>
          <Grid
            className={classes.container}
            container
            direction="column"
            spacing={2}
          >
            <Grid item>
              <Typography
                className={classes.intro}
                variant="h4"
              >
                {content.introduction}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.werewolf}
                variant="h1"
              >
                {content.werewolf}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                className={classes.subText}
                variant="h4"
              >
                ({content.werewolf_note})
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Page>
  )
}

export default HomePage;