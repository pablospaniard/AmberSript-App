import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { saveAs } from 'file-saver/FileSaver'

import { List, Item } from '../'
import { Spinner } from '../UI'

import styles from './Content.scss'

class Content extends Component {
  state = {
    step: 0
  }

  onDecodeButtonHandler = () => {
    this.setState({
      step: 1
    })
  }

  onBackButtonHandler = () => {
    this.setState({
      step: 0
    })
  }

  onSaveJSONHandler = () => {
    const text = document.getElementById('save-text').innerText
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, 'AmberScript_your_text.txt')
  }

  render() {
    const { step } = this.state
    const { data, error, loading, src } = this.props
    let content
    switch (step) {
      case 0:
        content = loading ? (
          <Spinner />
        ) : (
          <List data={data} onDecodeClick={this.onDecodeButtonHandler} />
        )
        break
      case 1:
        content = loading ? (
          <Spinner />
        ) : (
          <Item
            src={src}
            onBackClick={this.onBackButtonHandler}
            onSaveClick={this.onSaveJSONHandler}
            data={data}
          />
        )
        break
      default:
        break
    }

    if (error) {
      content = <p> Something went wrong, please try again</p>
    }

    return (
      <Grid container className={styles.Content}>
        {content}
      </Grid>
    )
  }
}

Content.propTypes = {
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  error: PropTypes.object,
  src: PropTypes.string,
  loading: PropTypes.bool
}

export default Content
