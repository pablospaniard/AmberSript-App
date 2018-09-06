import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Typography } from '@material-ui/core'

import { Button, WaveSurfer } from '../UI'
import styles from './Item.scss'

const Item = props => {
  const { src, onSaveClick, onBackClick, data } = props
  return (
    <Grid container className={styles.Item}>
      <Grid item xs={12} style={{ textAlign: 'right' }}>
        <Button text="Back" delete onButtonClick={onBackClick} />
      </Grid>
      <Grid item xs={12}>
        <WaveSurfer src={src} />
      </Grid>
      <Grid item xs={12}>
        <Paper className={styles.Paper} id="save-text">
          {data.segments.map((segment, index) => {
            const words = segment.words.map(word => {
              return word['text']
            })
            return (
              <Typography
                variant="body1"
                key={index}
                className={styles.Segment}
              >
                <span
                  contentEditable
                  suppressContentEditableWarning
                  className={styles.Editable}
                >
                  {words.join(' ')}
                </span>
              </Typography>
            )
          })}
        </Paper>
      </Grid>
      <Grid item xs={12} style={{ justifyContent: 'center', display: 'flex' }}>
        <Button text="Save" select onButtonClick={onSaveClick} />
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
