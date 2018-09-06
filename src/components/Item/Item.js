import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { Grid, Paper, Typography } from '@material-ui/core'

import { Button, WaveSurfer } from '../UI'
import styles from './Item.scss'

class Item extends Component {
  state = {
    currentTime: 0
  }

  onChangeTime = time => {
    this.setState({
      currentTime: Number(time.toFixed(2))
    })
  }

  render() {
    const { src, onSaveClick, onBackClick, data } = this.props
    const { currentTime } = this.state
    return (
      <Grid container className={styles.Item}>
        <Grid item xs={12}>
          <Button text="Save Text" select onButtonClick={onSaveClick} />
          <Button text="Cancel" delete onButtonClick={onBackClick} />
        </Grid>
        <Grid item xs={12}>
          <WaveSurfer
            src={src}
            onChangeTime={time => this.onChangeTime(time)}
          />
        </Grid>
        <Grid item xs={12}>
          <Paper className={styles.Paper} id="save-text">
            {data.segments.map((segment, index) => {
              const words = segment.words.map(word => {
                return word
              })
              return (
                <Typography
                  variant="body1"
                  key={index}
                  className={styles.Segment}
                >
                  {words.map((word, index) => {
                    return (
                      <Fragment key={index}>
                        <span
                          contentEditable
                          suppressContentEditableWarning
                          className={`${styles.Editable} ${
                            currentTime > word.start ? styles.Current : null
                          }`}
                        >
                          {`${word.text}`}
                        </span>
                        <span> </span>
                      </Fragment>
                    )
                  })}
                </Typography>
              )
            })}
          </Paper>
        </Grid>
        <Grid
          item
          xs={12}
          style={{ justifyContent: 'center', display: 'flex' }}
        >
          <Button text="Save Text" select onButtonClick={onSaveClick} />
        </Grid>
      </Grid>
    )
  }
}

Item.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  onBackClick: PropTypes.func,
  src: PropTypes.string,
  onSaveClick: PropTypes.func
}

export default Item
