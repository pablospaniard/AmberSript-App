import React, { Component } from 'react'
import { Grid } from '@material-ui/core'

import styles from './Header.scss'

class Header extends Component {
  render() {
    return (
      <Grid container className={styles.Header}>
        <Grid item xs={2}>
          Logo
        </Grid>
        <Grid item xs={8}>
          Your Ambers
        </Grid>
        <Grid item xs={2}>
          Account
        </Grid>
      </Grid>
    )
  }
}

export default Header
