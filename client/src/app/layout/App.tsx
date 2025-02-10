import { useEffect, useState } from 'react'
import { Product } from '../models/product';
import Catalog from '../../features/catalog/Catalog';
import { Container, Typography, Button, Box } from '@mui/material';

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://localhost:5010/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const addProduct = () => {
    setProducts(prevState => [...prevState, 
      {
        id: prevState.length+1, 
        name: 'Product '+(prevState.length+1), 
        price: (prevState.length * 100) + 100,
        description: 'Description',
        pictureUrl: 'https://via.placeholder.com/150',
        brand: 'Brand',
        type: 'Type',
        quantityInStock: 10
      }])
  };

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2
        }}
      >
        <Typography variant='h4'>React Store</Typography>
        <Button variant='contained' onClick={addProduct}>Add Product</Button>
      </Box>
      
      <Catalog products={products}/>
    </Container>
  )
}

export default App
