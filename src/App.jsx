import { Box, createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import SideBar from './components/SideBar'
import Router from './components/Router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#141416',
      paper: '#202028',
    },
    text: {
      primary: '#EEEFF3',
      secondary: '#a1a1a1',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box display={{ sx: "block", md: "flex"}}>
        <SideBar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Router />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
