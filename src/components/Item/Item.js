import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Button, WaveSurfer } from '../UI'
import styles from './Item.scss'

const Item = props => {
  const { src, onSaveClick, onBackClick } = props
  return (
    <Grid container className={styles.Item}>
      <Grid item xs={12} style={{ textAlign: 'right' }}>
        <Button text="Back" delete onButtonClick={onBackClick} />
      </Grid>
      <Grid item xs={12}>
        <WaveSurfer src={src} />
      </Grid>
      <Grid item xs={12}>
        Text
      </Grid>
      <Grid item xs={12}>
        <Button
          text="Save"
          select
          onButtonClick={onSaveClick}
          style={{ textAlign: 'center' }}
        />
      </Grid>
    </Grid>
  )
}

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onBackClick: PropTypes.func,
  src: PropTypes.string,
  onSaveClick: PropTypes.func
}

export default Item
