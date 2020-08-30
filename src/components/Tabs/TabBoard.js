import React, { useState } from 'react'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import TabPanel from './TabPanel'

import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'
import map from 'lodash/map'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(0, 2),
    fontFamily: '微軟正黑體',
    backgroundColor: 'rgba(223, 169, 169, 0.70)',
  },
  container: {
    padding: theme.spacing(3)
  },
  card: {
    [theme.breakpoints.up('md')]: {
      width: 600
    },
    [theme.breakpoints.down('sm')]: {
      width: 300
    },
    backgroundColor: 'rgba(223, 169, 169, 0.70)',
    borderRadius: 12,
  },
  family: {
    fontWeight: 800,
    color: '#FF1F0F',
    fontSize: 72,
    [theme.breakpoints.down('sm')]: {
      fontSize: 54
    },
    fontFamily: '微軟正黑體'
  },
  text: {
    color: '#A63F00',
    fontFamily: '微軟正黑體'
  },
}));

const TabBoard = (props) => {
  const {
    tabs
  } = props

  const classes = useStyles()
  const [value, setValue] = useState(0);
  const a11yProps = (index) => {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // tabs is an object {title: ..., content: <div>stuff to display</div>}

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {
          map(tabs, (t, i) => <Tab label={t.title} {...a11yProps(i)} />)
        }
      </Tabs>
      {
        map(tabs, (t, i) =>
          <TabPanel value={value} index={i}>
            {t.content}
          </TabPanel>
        )
      }

    </div>
  )

}

TabBoard.defaultProps = {
  tabs: []
}

TabBoard.propTypes = {
  tabs: PropTypes.array
}

export default TabBoard