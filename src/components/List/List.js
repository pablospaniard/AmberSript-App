import React from 'react'
import PropTypes from 'prop-types'
import { Paper, Grid, Typography } from '@material-ui/core'

import { Button } from '../UI'
import styles from './List.scss'

const List = props => {
  const { data, onDecodeClick } = props
  return (
    <Grid item xs={12}>
      <Paper className={styles.Paper}>
        <Typography variant="title">{data.recordId}</Typography>
        <div className="Buttons">
          <Button select text="Decode" onButtonClick={onDecodeClick} />
          <Button
            delete
            text="Delete"
            onButtonClick={() => alert('Audio deleted')}
          />
        </div>
      </Paper>
    </Grid>
  )
}

List.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onDecodeClick: PropTypes.func
}

export default List
