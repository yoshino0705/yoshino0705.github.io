import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import Page from '../components/Page'

import Grid from '@material-ui/core/Grid'

import { ABOUT_PAGE_CONTENT } from './constants'
import get from 'lodash/get'
import map from 'lodash/map'

import MemberPanel from '../components/MemberPanel'

import yoshinoIcon from '../components/assets/member_icons/yoshinobhl.jpg'
import eveIcon from '../components/assets/member_icons/eve.jpg'
import slgameIcon from '../components/assets/member_icons/slgame.jpg'
import koumiIcon from '../components/assets/member_icons/koumi2.jpg'
import lightDeIcon from '../components/assets/member_icons/lightDe3.jpg'
import alexIcon from '../components/assets/member_icons/alex.jpg'
import yoruIcon from '../components/assets/member_icons/yoru.jpg'
import allenIcon from '../components/assets/member_icons/allen.png'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(3),
    fontFamily: '微軟正黑體'
  },
  container: {
    padding: theme.spacing(3),
    maxWidth: 1000,
    [theme.breakpoints.up('md')]: {
      margin: '0 auto'
    },
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

const MembersPage = () => {

  const classes = useStyles()
  const language = useSelector(state => state.language)
  const content = ABOUT_PAGE_CONTENT[language.locale]

  const members = [
    {
      description: get(content, 'yoshinobhl.description'),
      name: get(content, 'yoshinobhl.name'),
      icon: yoshinoIcon,
      theme: 'rgba(28, 246, 144, 0.7)'
    },
    {
      description: get(content, 'eve.description'),
      name: get(content, 'eve.name'),
      icon: eveIcon,
      theme: 'rgba(241, 130, 227, 0.7)'
    },
    {
      description: get(content, 'koumi.description'),
      name: get(content, 'koumi.name'),
      icon: koumiIcon,
      theme: 'rgba(255, 165, 0, 0.7)'
    },
    // {
    //   description: get(content, 'lightDe.description'),
    //   name: get(content, 'lightDe.name'),
    //   icon: lightDeIcon,
    //   theme: 'rgba(191, 63, 127, 0.7)'
    // },
    {
      description: get(content, 'slgame.description'),
      name: get(content, 'slgame.name'),
      icon: slgameIcon,
      theme: 'rgba(130, 227, 241, 0.7)'
    },
    {
      description: get(content, 'allen.description'),
      name: get(content, 'allen.name'),
      icon: allenIcon,
      theme: 'rgba(170, 170, 252, 0.7)'
    },
    {
      description: get(content, 'alex.description'),
      name: get(content, 'alex.name'),
      icon: alexIcon,
      theme: 'rgba(127, 191, 63, 0.7)'
    },
    {
      description: get(content, 'yoru.description'),
      name: get(content, 'yoru.name'),
      icon: yoruIcon,
      theme: 'rgba(52, 253, 253, 0.7)'
    }
  ]

  return (
    <Page
      className={classes.root}
      elevation={24}
      title="members"
    >
      <Grid
        className={classes.container}
        container
        direction="column"
        spacing={3}
      >
        {
          map(members, (m, i) => {
            const reverse = i % 2 !== 0

            return (
              // <Slide
              //   direction={reverse ? 'left' : 'right'}
              //   in
              //   key={i}
              //   mountOnEnter
              //   timeout={(i + 1) * 500}
              // >
              <Grid
                className={reverse ? classes.reverse : classes.forward}
                item
                key={i}
              >

                <MemberPanel
                  description={m.description}
                  icon={m.icon}
                  name={m.name}
                  reverse={reverse}
                  themeColor={m.theme}
                />

              </Grid>
              // </Slide>
            )
          })
        }
      </Grid>
    </Page>
  )
}

export default MembersPage;