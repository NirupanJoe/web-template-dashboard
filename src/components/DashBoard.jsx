import React, { Fragment } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import StatisticsCards from './StatisticsCards';
import RecentOrders from './RecentOrders';

function DashBoard() {
  return (
    <Fragment>
      <Typography variant="h5">
        DashBoard
      </Typography>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8} >
          <Stack marginBottom={2}>

            <StatisticsCards />
            <RecentOrders />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default DashBoard