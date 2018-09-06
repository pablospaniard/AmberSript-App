import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Button } from '../UI'
import styles from './Item.scss'

const Item = props => {
  const { data, onSaveClick, onBackClick } = props
  return (
    <Grid container className={styles.Item}>
      <Grid item xs={12} style={{ textAlign: 'right' }}>
        <Button text="Back" delete onButtonClick={onBackClick} />
      </Grid>
      <Grid item xs={12}>
        Item
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

export default Item
