import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

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
    alert('json saved')
  }

  render() {
    const { step } = this.state
    const { data, error, loading } = this.props
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
            data={data}
            onBackClick={this.onBackButtonHandler}
            onSaveClick={this.onSaveJSONHandler}
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
  loading: PropTypes.bool
}

export default Content
