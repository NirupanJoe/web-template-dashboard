import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import orderIcon from '../assets/order.png';
import deliveredIcon from '../assets/delivered.png';
import cancelledIcon from '../assets/cancelled.png';
import revenueIcon from '../assets/revenue.png';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const statistics = [
  { title: 'Total Orders', value: 75, change: '3', icon: orderIcon, color: 'blue' },
  { title: 'Total Delivered', value: 70, change: '-3', icon: deliveredIcon, color: 'green' },
  { title: 'Total Cancelled', value: 5, change: '3', icon: cancelledIcon, color: 'red' },
  { title: 'Total Revenue', value: '$12k', change: '-3', icon: revenueIcon, color: 'purple' },
];

function StatisticsCards() {
  return (
    <Grid container spacing={2}>
      {statistics.map((stat, index) => (
        <Grid item xs={6} md={3} key={index}>
          <Box bgcolor="#202028" padding={2} borderRadius={2} height='120px' className={`stat-card ${stat.color}`}>
            <img src={stat.icon} alt={stat.title} />
            <Typography fontSize={12}>{stat.title}</Typography>
            <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
              <Typography fontWeight={700} variant="h5">{stat.value}</Typography>
              <Stack direction="row" alignItems="center">
                {stat.change > 0 ? <ArrowDropUpIcon color='success' /> : <ArrowDropDownIcon color='error' />}
                <Typography color={stat.change > 0 ? 'success.main' : 'error.main'} variant="subtitle1">
                  {Math.abs(stat.change)}%
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatisticsCards;
