import React, { Fragment } from 'react'
import { Grid, Typography } from '@mui/material'
import StatisticsCards from './StatisticsCards';

function DashBoard() {
  return (
    <Fragment>
      <Typography variant="h5">
        DashBoard
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8} >
          <StatisticsCards />
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default DashBoard