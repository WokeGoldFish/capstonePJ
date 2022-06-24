import { createTheme } from "@mui/system";
import { useState, useEffect } from "react";
import { Navbar, Products, Cart, SignUp, Checkout} from "./components";
import { commerce } from "./lib/commerce";
import "./App.css";
import { Routes, Route } from "react-router-dom";

const theme = createTheme({});

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('')

  const getProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const getCart = async () => {
    const something = await commerce.cart.retrieve();
    setCart(something)
  };
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQuantity = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  const refreshCart = async() => {
    const newCart = await commerce.cart.refresh();
    setCart(newCart)
  }
  const getCaptureCheckout = async(addyToken, newOrder) =>{
    try{
      const quedOrder = await commerce.checkout.capture(addyToken, newOrder)
      setOrder(quedOrder);
      refreshCart();
    } catch(error) {
      setErrorMessage(error.data.error.message)
    }
  }



  useEffect(() => {
    getProducts();
    getCart();
  }, []);
  document.body.style.backgroundImage = `url('https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')`
  return (
    <>
     
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route
            path="/"
            element={
              <Products products={products} onAddToCart={handleAddToCart} />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                handleUpdateCartQuantity={handleUpdateCartQuantity}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            }
          />
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/checkout" element={<Checkout 
            cart={cart} 
            order={order} 
            onCaptureCheckout={getCaptureCheckout} 
            error={errorMessage}/>
          }/>
        </Routes>

    </>
  );
};

export default App;
