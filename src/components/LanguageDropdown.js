import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'

import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Translate from '@material-ui/icons/Translate'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

import Typography from '@material-ui/core/Typography'

import { LANGUAGES } from './constants'
import keys from 'lodash/keys'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  darkRedBlock: {
    backgroundColor: '#8b0000',
    height: theme.spacing(1),
    width: '100%'
  },
  redBlock: {
    backgroundColor: '#cd5c5c',
    height: theme.spacing(1),
    width: '100%'
  },
  iconButton: {
    display: 'flex',
    flexDirection: 'row',
    color: '#fff'
  },
  locale: {
    padding: theme.spacing(0, 0.5)
  }
}));

const LanguageDropdown = (props) => {
  const {
    locale,
    onChangeLocale
  } = props

  const classes = useStyles()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const options = keys(LANGUAGES)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const onChange = (option) => {
    onChangeLocale(option)
    handleClose()
  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        className={classes.iconButton}
        onClick={handleClick}
      >
        <Translate />

        <Typography className={classes.locale}>
          {LANGUAGES[locale]}
        </Typography>

        <KeyboardArrowDownIcon />

      </IconButton>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === locale}
            onClick={() => { onChange(option) }}
          >
            {LANGUAGES[option]}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

LanguageDropdown.propTypes = {
  locale: PropTypes.string,
  onChangeLocale: PropTypes.func
}

export default LanguageDropdown