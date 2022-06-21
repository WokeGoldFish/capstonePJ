
import { createTheme } from '@mui/system';
import { useState, useEffect } from 'react';
import { Navbar, Products } from './components';
import { commerce } from './lib/commerce'
import './App.css';
const theme = createTheme({});

const App = () => {
  const[products, setProducts] = useState([]);

  const fetchProducts = async() => {
    const { data } = await commerce.products.list();

    setProducts(data); 
  }

  useEffect(() => {
    fetchProducts();
  }, [])
  console.log(products)

  return (
    <div style={{ backgroundColor: "#EBECF0" }}>
      hello
      
        <Navbar/>
        <Products products ={products}/>

    </div>
  )
}

export default App

