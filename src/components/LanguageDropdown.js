import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles'

import Translate from '@material-ui/icons/Translate'

import { LANGUAGES } from './constants'

import { setLocale } from '../actions'

import ExpandableButton from './Buttons/ExpandableButton'

import get from 'lodash/get'
import map from 'lodash/map'

const useStyles = makeStyles((theme) => ({
  root: {},

}));

const LanguageDropdown = () => {

  const classes = useStyles()
  const dispatch = useDispatch()
  const language = useSelector(state => state.language)

  const options = map(LANGUAGES, (v, k) => {
    return {
      label: v,
      onClick: () => {
        dispatch(setLocale(k))
      }
    }
  })

  return (
    <div className={classes.root}>
      <ExpandableButton
        label={get(LANGUAGES, language.locale)}
        options={options}
        parentIcon={<Translate />}
      />
    </div>
  );
}

LanguageDropdown.propTypes = {

}

export default LanguageDropdown