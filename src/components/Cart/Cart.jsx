import React from "react";
import {
  Typography,
  Button,
  Container,
  Grid,
  createTheme,
  Toolbar,
  
} from "@mui/material";
import { useStyles } from "./CartStyles";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";


const Cart = ({
  cart,
  handleUpdateCartQuantity,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const styles = useStyles(createTheme());

  const EmptyCart = () => (
    <>
      <div container style={{justifyContent:'center', display:'flex'}}>
        
        <Typography varient="h1">Cart Is Empty...</Typography>
        <Button component={Link} to="/products" variant="contained" type="button">
          Back to Shopping
        </Button>
      </div>
    </>
  );

  if (!cart.line_items) return "Loading";

  const UsedCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQuantity={handleUpdateCartQuantity}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div sx={styles.cardDetails}>
        <Typography variant="h4" sx={{ color:'white', marginTop: "5%" }}>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            sx={styles.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="error"
            onClick={handleEmptyCart}
          >
            Empty Your Cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            sx={styles.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <Toolbar />
      <Typography variant="h6" sx={styles.title}>
        
        This Is Your Cart
      </Typography>

      {!cart.line_items.length ? <EmptyCart /> : <UsedCart />}
    </Container>
  );
};

export default Cart;
