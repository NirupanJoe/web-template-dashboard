import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import NavBar from './NavBar';
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link, useLocation } from 'react-router-dom';

const drawerWidth = 240;


const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
  border: 'none',
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
  backgroundImage: 'none',
  zIndex: theme.zIndex.drawer + 1,
  boxShadow: 'none',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
);

var items = [
  { key: 'Home', icon: HomeIcon, to: '/dashboard' },
  { key: 'Assignment', icon: AssignmentTurnedInOutlinedIcon, to: '/assignment' },
  { key: 'Inventory', icon: InventoryOutlinedIcon, to: '/inventory' },
  { key: 'Orders', icon: LocalMallOutlinedIcon, to: '/orders' },
]

export default function SideBar() {
  const theme = useTheme();
  const primaryColor = theme.palette.primary.main;
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));
  const { pathname } = useLocation();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (isMediumScreen) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isMediumScreen]);

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <NavBar open={open} setOpen={setOpen} />
      </AppBar>
      <Drawer variant="permanent" style={{ display: !open ? 'none' : 'block' }}>
        <DrawerHeader />
        <List>
          {items.map(({ key, icon: Icon, to }) => (
            <ListItem key={key} disablePadding sx={{ display: 'block' }}>
              <Link to={to}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: 'center',
                    px: 2.5,
                    borderLeft: pathname === to ? `4px solid ${primaryColor}` : 'none',
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon sx={{ color: pathname === to ? primaryColor : '#A0A0A2' }} />
                  </ListItemIcon>
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </React.Fragment>
  );
}