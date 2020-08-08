import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'rgba(223, 169, 169, 0.50)',

    display: 'flex',
    padding: theme.spacing(3),

    borderRadius: 12,
    [theme.breakpoints.up('md')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  container: {
    padding: theme.spacing(3)
  },
  icon: {
    borderRadius: '50%',
    width: '100%',
    maxWidth: 200,
    objectFit: 'contain'
  },
  iconContainer: {
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 900,
    [theme.breakpoints.down('sm')]: {
      fontSize: 20
    },
  },
  description: {
    fontSize: 20,
    fontWeight: 300,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    },
  },
  card: {
    [theme.breakpoints.up('md')]: {
      width: 600
    },
    [theme.breakpoints.down('sm')]: {
      width: 'auto'
    },
    backgroundColor: 'rgba(223, 169, 169, 0.70)',
    borderRadius: 12,
  },
  reverse: {
    display: 'flex',
    justifyContent: 'flex-end'
  }

}));

const MemberPanel = (props) => {
  const {
    description,
    icon,
    name,
    reverse,
    themeColor,
  } = props

  const classes = useStyles()

  return (
    <Card
      className={classes.card}
    >
      <CardContent>
        <Grid
          className={classes.root}
          container
          direction={reverse ? 'row-reverse' : 'row'}
          justify="center"
          spacing={3}
          style={themeColor ? { backgroundColor: themeColor } : null}
        >
          <Grid
            className={classes.iconContainer}
            container
            direction="column"
            item
            md={3}
          >
            <img
              alt="icon"
              className={classes.icon}
              src={icon}
            />
          </Grid>
          <Grid
            container
            direction="column"
            item
            md={9}
            spacing={2}
          >
            <Grid item>
              <Typography
                className={classes.title}
                variant="subtitle1"
              >
                {name}
              </Typography>
            </Grid>
            <Grid
              item
            >
              <Typography
                className={classes.description}
                variant="subtitle2"
              >
                {description}
              </Typography>
            </Grid>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  )
}

MemberPanel.defaultProps = {
  description: '',
  icon: '',
  name: '',
  reverse: false,
  themeColor: null
}

MemberPanel.propTypes = {
  description: PropTypes.any,
  icon: PropTypes.string,
  name: PropTypes.any,
  reverse: PropTypes.bool,
  themeColor: PropTypes.string
}

export default MemberPanel