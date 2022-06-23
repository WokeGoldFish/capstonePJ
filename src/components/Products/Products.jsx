import React from "react";
import {
  Container,
  Grid,
  createTheme,
  CssBaseline,
  Toolbar,
} from "@mui/material";
import Product from "./Product(single)/Product";
import { useStyles } from "./ProductsStyle";
import { ThemeProvider } from "@mui/material/styles";

const Products = ({ products, onAddToCart }) => {
  const styles = useStyles(createTheme());
  return (
    <>
      <CssBaseline />
      <Container>
        <main sx={styles.content}>
          <Toolbar />
          <Grid container justify="center" spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product} onAddToCart={onAddToCart} />
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
    </>
  );
};

export default Products;
