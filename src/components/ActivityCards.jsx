import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Box, Typography } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['5', '6', '9', '11', '13', '15', '17', '19', '21', '23', '25', '27'],
  datasets: [
    {
      label: 'Activity',
      data: [5000, 10000, 6000, 8000, 7000, 11000, 15000, 18000, 10000, 12000, 9000, 13000],
      backgroundColor: '#7294FF',
      borderRadius: 15,
      color: "#EEEFF3"
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: { color: '#ffffff' },
      grid: { display: false },
    },
    y: {
      ticks: { color: '#ffffff' },
      grid: { color: '#444' },
    },
  },
};

const ActivityChart = () => {
  return (
    <Box mt={3} bgcolor={'#202028'} padding={2}>
      <Typography variant="h6">Activity</Typography>
      <Box height={200}>
        <Bar data={data} options={options} />
      </Box>
    </Box>);
};

export default ActivityChart;
