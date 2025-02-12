import { useState } from 'react'
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import NavBar from './NavBar';
import { Outlet } from 'react-router';

function App() {

  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
      setDarkMode(!darkMode);
  }   

  // const addProduct = () => {
  //   setProducts(prevState => [...prevState, 
  //     {
  //       id: prevState.length+1, 
  //       name: 'Product '+(prevState.length+1), 
  //       price: (prevState.length * 100) + 100,
  //       description: 'Description',
  //       pictureUrl: 'https://via.placeholder.com/150',
  //       brand: 'Brand',
  //       type: 'Type',
  //       quantityInStock: 10
  //     }])
  // };

  const palleteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette:{
      mode: palleteType,
      background:{
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <NavBar darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
      <Box
        sx={{
          minHeight: '100vh',
          background: darkMode ? 'radial-gradient(circle,#1e3aBa, #11B27)' : 'radial-gradient(circle,#baecf9, #f0f9ff)',
          py: 6
        }}
      >
        <Container maxWidth="xl" sx={{marginTop: 8, marginBottom: 8}}>
          <Outlet />
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
