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

  const getProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const getCart = async () => {
    setCart(await commerce.cart.retrieve());
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
          <Route path="/checkout" element={<Checkout cart={cart} />}/>
        </Routes>

    </>
  );
};

export default App;
