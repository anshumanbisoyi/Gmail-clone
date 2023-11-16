import { Grid } from '@mui/material'
import React from 'react'
import Leftpanel from './Leftpanel'
import Navbar from './Navbar'

function Main() {
  return (
    <div>
        <Grid container>
        <Grid item xs={12}>
        <Navbar/>
        </Grid>
        <Grid item xs={2.5}>
        <Leftpanel/>
        </Grid>

        </Grid>
    </div>
  )
}

export default Main