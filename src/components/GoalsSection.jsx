import React from 'react';
import { Box, IconButton, Avatar, Container, Stack } from '@mui/material';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';

const goals = [
  { text: 'Goals', icon: 'Goals' },
  { text: 'Popular Dishes', icon: 'Popular Dishes' },
  { text: 'Menus', icon: 'Menus' },
];

const GoalsSection = () => {
  return (
    <Box className="goals" mt={1} height={230} bgcolor={'#202028'} padding={2} borderRadius={2}>
      <Stack justifyContent={'space-between'} height={'100%'}>
        {goals.map((goal) => (
          <List dense key={goal.text}>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete"
                  sx={{ borderRadius: '50%', backgroundColor: "#47484D" }}>
                  <ChevronRightOutlinedIcon />
                </IconButton>
              }
            >
              <ListItemAvatar >
                <Avatar sx={{ width: 50, height: 50 }} alt={goal.text} >
                </Avatar>
              </ListItemAvatar>
              <Container>
                <ListItemText
                  primary={goal.text}
                />
              </Container>
            </ListItem>
          </List>
        ))}
      </Stack>
    </Box>
  );
}

export default GoalsSection;
