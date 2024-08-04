import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '../assets/menuIcon.png';
import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import MoreIcon from '@mui/icons-material/MoreVert';
import Avatar from '@mui/material/Avatar';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const icons = [
  { name: 'Messages', icon: EmailOutlinedIcon, badgeContent: 4 },
  { name: 'Settings', icon: SettingsOutlined, badgeContent: null },
  { name: 'Notifications', icon: NotificationsOutlinedIcon, badgeContent: 17 }
];

const NavBar = ({ open, setOpen }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawer = () => {
    setOpen(!open);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {icons.map(({ name, icon: Icon, badgeContent }) => (
        <MenuItem key={name}>
          <IconButton
            sx={{
              backgroundColor: "#47484D",
              alignSelf: 'center',
              justifyContent: 'center',
              mx: 0.5
            }}
            size="small"
            color="inherit"
          >
            <Badge badgeContent={badgeContent} color="primary">
              <Icon fontSize="small" />
            </Badge>
          </IconButton>
          <p style={{ marginLeft: '5px'}}>{name}</p>
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Toolbar>
        <IconButton
          onClick={handleDrawer}
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
        >
          <img width={20} height={20} src={MenuIcon} alt="logo" />
        </IconButton>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
        <Box sx={{ flexGrow: 1 }} />
        <Box mx={2} sx={{ display: { xs: 'none', md: 'flex' } }}>
          {icons.map(({ name, icon: Icon, badgeContent }) => (
            <IconButton
              key={name}
              sx={{
                backgroundColor: "#47484D",
                alignSelf: 'center',
                justifyContent: 'center',
                mx: 0.5
              }}
              size="small"
              color="inherit"
            >
              <Badge badgeContent={badgeContent} color="primary">
                <Icon fontSize="small" />
              </Badge>
            </IconButton>
          ))}
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Joe" src="/assets/joe.png" />
          </IconButton>
        </Box>
      </Toolbar>
      {renderMobileMenu}
    </Box>
  );
}

export default NavBar;
