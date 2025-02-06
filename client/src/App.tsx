import { useEffect, useState } from 'react'

function App() {

  const [products, setProducts] = useState<{id:number, name:string, price:number}[]>([]);

  useEffect(() => {
    fetch('https://localhost:5010/api/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const addProduct = () => {
    setProducts(prevState => [...prevState, {id: 3, name: 'Product '+(prevState.length+1), price: (prevState.length * 100) + 100}])
  };

  return (
    <div>
      <h1>React Store</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <button onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default App
