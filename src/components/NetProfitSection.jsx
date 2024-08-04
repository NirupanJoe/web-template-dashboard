import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Box, CircularProgress, Stack, Typography } from '@mui/material'

const NetProfitSection = () => {
  return (
    <Box display={'flex'} justifyContent={'space-between'} borderRadius={2} sx={{ p: 2, mb: 2, backgroundColor: '#202028', height: '120px' }}>
      <Box display={'flex'} flexDirection={'column'} justifyContent={'space-around'}>
        <Typography mb={1} fontSize={12} color="#b0b0b0">Net Profit</Typography>
        <Typography fontSize={"1.5rem"} fontWeight={700} variant='h4' color="textPrimary" gutterBottom>$ 6759.25</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <ArrowDropUpIcon color='success' />
          <Typography variant="body1" color="success.main">3%</Typography>
        </Stack>
      </Box>
      <Box display={'flex'} alignItems={'center'} flexDirection={'column'}>
        <CircularProgress variant="determinate" size={'6.5rem'} thickness={7} value={70} color="primary" >
        </CircularProgress>
        <Box sx={{ width: '45%', top: '-75px', bottom: 0, right: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant="body2" fontWeight={800} color="textSecondary">70%</Typography>
          <Typography textAlign='center' fontSize={'46%'} variant="body2" color="textSecondary">Goal Completed</Typography>
        </Box>
        <Typography textAlign='center' variant="caption" color="textSecondary" sx={{ position: 'relative', top: '-30px', fontSize: '10%' }}>
          *The values here have been rounded off.
        </Typography>
      </Box>
    </Box>
  )
}

export default NetProfitSection