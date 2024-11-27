import { useState } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme'
import Navbar from './components/common/Navbar';
import Home from './components/pages/home/Home';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
    <Navbar/>
    <Home/>
    </ThemeProvider>
    </>
  )
}

export default App
