import React from 'react';
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Divider,
  styled
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const feedback = [
  {
    customer: 'Jenny Wilson',
    rating: 5,
    comment: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies.',
    avatar: 'path/to/avatar1.jpg',
  },
  {
    customer: 'Dianne Russell',
    rating: 5,
    comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee.',
    avatar: 'path/to/avatar2.jpg',
  },
  {
    customer: 'Devon Lane',
    rating: 4,
    comment: 'Normally am wines, but theirs are lean meaty and tender with a dry finish.',
    avatar: 'path/to/avatar3.jpg',
  }
];

const CustomScrollbar = styled('div')({
  height: '500px',
  overflowY: 'scroll',
  '&::-webkit-scrollbar': {
    width: '6px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#202028',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '#3e3e46',
    borderRadius: '10px',
  },
});

function CustomerFeedback() {
  return (
    <Box mt={3} height={540} bgcolor={'#202028'} padding={2} borderRadius={2}>
      <Typography variant="h6" color="white">Customers Feedback</Typography>
      <CustomScrollbar>
        <List>
          {feedback.map((item, index) => (
            <Box key={index} py={1}>
              <ListItem sx={{ paddingX: 0.2 }}>
                <ListItemAvatar>
                  <Avatar src={item.avatar} alt={item.customer} />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box pb={1}>
                      <Typography variant="body1" color="white">{item.customer}</Typography>
                    </Box>
                  }
                />
              </ListItem>
              <Box pb={3}>
                <Rating
                  name="customer-rating"
                  readOnly value={item.rating}
                  emptyIcon={<StarIcon sx={{ color: '#fff' }} />}
                />
                <Typography variant="body1" color="white">{item.comment}</Typography>
              </Box>
              <Divider />
            </Box>
          ))}
        </List>
      </CustomScrollbar>
    </Box>
  );
}

export default CustomerFeedback;
