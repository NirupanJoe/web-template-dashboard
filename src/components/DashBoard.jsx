import React, { Fragment } from 'react'
import { Grid, Stack, Typography } from '@mui/material'
import StatisticsCards from './StatisticsCards';
import RecentOrders from './RecentOrders';
import ActivityChart from './ActivityCards';
import NetProfitSection from './NetProfitSection';
import GoalsSection from './GoalsSection';
import CustomerFeedback from './CustomerFeedback';

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
            <ActivityChart />
            <RecentOrders />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
        <Stack marginBottom={2}>
          <NetProfitSection />
          <GoalsSection />
          <CustomerFeedback />
          </Stack>
        </Grid>
      </Grid>
    </Fragment>
  )
}

export default DashBoard