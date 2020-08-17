import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Dropdown from './Dropdown'

import get from 'lodash/get'
import concat from 'lodash/concat'

import { DL_TEXTS } from './constants'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
  },
}));

const DownloadOptions = (props) => {
  const {
    options,
    type
  } = props

  const classes = useStyles()
  const [downloadLink, setDownloadLink] = useState('null')
  const language = useSelector(state => state.language)
  const locale = language.locale

  const selectionList = concat(
    [{ label: get(DL_TEXTS[locale], 'download_for'), value: 'null' }],
    options
  )

  const handleSelectionChange = (v) => {
    setDownloadLink(v)
  }

  const disableButton = !downloadLink || downloadLink === 'null'
  const downloadLabel = type === 'datapack' ? get(DL_TEXTS[locale], 'download_datapack') : get(DL_TEXTS[locale], 'download_map')
  const downloadText = get(DL_TEXTS[locale], 'download')
  return (
    <Grid
      alignItems="center"
      className={classes.root}
      container
      direction="row"
      justify="center"
    >
      <Grid item>
        <Dropdown
          getSelectedOption={handleSelectionChange}
          label={downloadLabel}
          options={selectionList}
        />
      </Grid>
      <Grid item>
        <Button
          color="primary"
          disabled={disableButton}
          onClick={() => {
            window.open(downloadLink, '_blank', 'noopener')
          }}
          variant="contained"
        >
          {downloadText}
        </Button>
      </Grid>

    </Grid>
  )

}

DownloadOptions.propTypes = {
  options: PropTypes.array,
  type: PropTypes.string
}

export default DownloadOptions