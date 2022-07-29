import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Product from './components/product'
import Cart from './components/cart'
function App() {
  const [products, setProducts] = useState([])
  const fetchProduct = async function() {
    const data = await(await fetch('http://localhost:3000/products')).json()
    setProducts(data)
  }
  useEffect(() => {
    fetchProduct()
  }, [])
  return (
    <div>
      <Product product={products}/>
      <Cart/>
    </div>
  )
}

export default App
