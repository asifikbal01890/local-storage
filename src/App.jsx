import { useState } from 'react'
import './App.css'
import Carts from './components/Carts/Carts'
import Products from './components/Products/Products'

function App() {
  const [productsInfo, setProductsInfo] = useState([])

  return (
    <>
    <Products
    productsInfo={productsInfo}
    setProductsInfo={setProductsInfo}
    ></Products>
    <Carts
    productsInfo={productsInfo}
    ></Carts>
    </>
  )
}

export default App
