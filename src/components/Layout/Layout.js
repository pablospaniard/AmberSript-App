import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

import { Header, Content } from '../'

import styles from './Layout.scss'

class Layout extends Component {
  componentWillMount = () => {
    this.props.fetchData()
  }

  render() {
    const { data, err, loading } = this.props
    return (
      <Grid container className={styles.Layout}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Content data={data} error={err} loading={loading} />
        </Grid>
      </Grid>
    )
  }
}

Layout.propTypes = {
  fetchData: PropTypes.func,
  data: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  err: PropTypes.object,
  loading: PropTypes.bool
}

export default Layout
