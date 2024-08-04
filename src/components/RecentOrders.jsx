import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Avatar,
  Stack,
  Box
} from '@mui/material';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered', avatar: 'path/to/avatar1.jpg' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$365.02', status: 'Delivered', avatar: 'path/to/avatar2.jpg' },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled', avatar: 'path/to/avatar3.jpg' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending', avatar: 'path/to/avatar4.jpg' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered', avatar: 'path/to/avatar5.jpg' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered', avatar: 'path/to/avatar6.jpg' },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'Delivered':
      return {
        color: '#61ba65',
        backgroundColor: '#15311e',
        borderRadius: '12px',
        padding: '5px 10px',
      };
    case 'Cancelled':
      return {
        color: '#f54e42',
        backgroundColor: '#3f0009',
        borderRadius: '12px',
        padding: '5px 10px',
      };
    case 'Pending':
      return {
        color: '#ffa21a',
        backgroundColor: '#462b00',
        borderRadius: '12px',
        padding: '5px 10px',
      };
    default:
      return {};
  }
};


function RecentOrders() {

  return (
    <Box mt={3} bgcolor={'#202028'} padding={2} borderRadius={2} height={560}>
      <Typography variant="h6">Recent Orders</Typography>
      <TableContainer sx={{ mt: 2 }} >
        <Table >
          <TableHead>
            <TableRow>
              <TableCell>Customer</TableCell>
              <TableCell>Order No.</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Stack direction="row" alignItems="center" spacing={2} >
                    <Avatar src={order.avatar} alt={order.customer} />
                    <Typography>{order.customer}</Typography>
                  </Stack>
                </TableCell>
                <TableCell>{order.orderNo}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>
                  <Box textAlign="center" sx={getStatusStyle(order.status)}>{order.status}</Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default RecentOrders;
