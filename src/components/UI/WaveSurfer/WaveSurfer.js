import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import WaveSurfer from 'wavesurfer.js'
import TimelinePlugin from 'wavesurfer.js/dist/plugin/wavesurfer.timeline.min.js'
import MinimapPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.minimap.min.js'
import { Grid } from '@material-ui/core'

import { Button, Spinner } from '../'
import styles from './WaveSurfer.scss'

class WaveSurferUI extends Component {
  state = {
    waveSurfer: null,
    loading: true
  }

  componentDidMount = () => {
    const { src } = this.props
    const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: '#62c8d5',
      plugins: [
        TimelinePlugin.create({
          container: '#wave-timeline'
        }),
        MinimapPlugin.create()
      ]
    })

    wavesurfer.load(src)

    wavesurfer.on('ready', () => {
      this.setState({
        loading: false
      })
    })

    this.setState({
      waveSurfer: wavesurfer
    })
  }
  onPlayButtonHandler = () => {
    this.state.waveSurfer.play()
  }
  onPauseButtonHandler = () => {
    this.state.waveSurfer.pause()
  }
  onStopButtonHandler = () => {
    this.state.waveSurfer.stop()
  }

  componentWillUnmount = () => {
    const { waveSurfer } = this.state
    if (waveSurfer) {
      waveSurfer.stop()
    }
  }
  render() {
    const { loading } = this.state
    const spinner = (
      <div className={loading ? styles.Spinner : styles.Spinner_Hide}>
        {loading ? <Spinner /> : null}
      </div>
    )
    return (
      <Fragment>
        {spinner}
        <Grid id="waveform">
          <Grid id="wave-timeline" />
        </Grid>
        <Grid item xs={12} className={styles.Buttons}>
          <Button text="Play" select onButtonClick={this.onPlayButtonHandler} />
          <Button
            text="Pause"
            select
            onButtonClick={this.onPauseButtonHandler}
          />
          <Button text="Stop" delete onButtonClick={this.onStopButtonHandler} />
        </Grid>
      </Fragment>
    )
  }
}

WaveSurferUI.propTypes = {
  src: PropTypes.string
}

export default WaveSurferUI
