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
    borderRadius: 12,
    maxWidth: 600,
    fontSize: 30,
    [theme.breakpoints.down('sm')]: {
      width: 260,
      fontSize: 26
    },

  },
  container: {
    padding: theme.spacing(3)
  },
  selectedOption: {
    fontWeight: 900,

  }
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
      key: index
    };
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        // variant="scrollable"
        scrollButtons="auto"
        centered
      >
        {
          map(tabs, (t, i) =>
            <Tab
              classes={{
                selected: classes.selectedOption
              }}
              label={t.title}
              {...a11yProps(i)}
            />)
        }
      </Tabs>
      {
        map(tabs, (t, i) =>
          <TabPanel
            key={i}
            index={i}
            value={value}
          >
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