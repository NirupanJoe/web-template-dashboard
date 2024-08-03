import { createTheme, ThemeProvider } from '@mui/material';
import './App.css'
import SideBar from './components/SideBar'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#202028',
      paper: '#2c2c34',
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
      <SideBar />
    </ThemeProvider>
  )
}

export default App
