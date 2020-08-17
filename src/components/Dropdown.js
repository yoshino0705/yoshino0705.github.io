import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'
import MenuItem from '@material-ui/core/MenuItem'

import map from 'lodash/map'
import head from 'lodash/head'
import get from 'lodash/get'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      minWidth: '25ch',
      fontFamily: '微軟正黑體'
    },
    '& .MuiFormLabel-root': {
      color: 'black',
      fontWeight: 500,
      fontFamily: '微軟正黑體'
    },
    '& .MuiFilledInput-root': {
      background: 'orange',
      color: 'black',
      borderRadius: 12,
      border: 'solid crimson',
      fontWeight: 900,
      fontFamily: '微軟正黑體'
    },
    '& .MuiFilledInput-underline:before': {
      border: 'none'
    },
    '& .MuiFilledInput-underline:after': {
      border: 'none'
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: 'transparent',
    }
  },
}));

const Dropdown = (props) => {
  const {
    getSelectedOption,
    helperText,
    label,
    options
  } = props

  const classes = useStyles();
  const [value, setValue] = useState(get(head(options), 'value') || '');

  const handleChange = (event) => {
    setValue(event.target.value)
    getSelectedOption(event.target.value)
  };

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          select
          label={label}
          value={value}
          InputLabelProps={{ shrink: true }}
          onChange={handleChange}
          helperText={helperText}
          variant="filled"
        >
          {map(options, (option, i) => (
            <MenuItem
              key={i}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}

Dropdown.defaultProps = {
  getSelectedOption: () => { },
  helperText: '',
  label: '',
  options: [],
}

Dropdown.propTypes = {
  getSelectedOption: PropTypes.func,
  helperText: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array
}

export default Dropdown