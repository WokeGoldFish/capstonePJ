import React from 'react';
import { Grid, createTheme, } from '@mui/material';
import Product from './Product(single)/Product';
import { useStyles } from './ProductsStyle'


const Products = ({ products }) => {
    const styles = useStyles(createTheme())
    return(
    <main sx = {styles.content}>
        <div sx= {styles.toolbar}/>

        <Grid container justify='center' spacing= {4}>
            {products.map((product) => (
                <Grid item key = {product.id} xs = {12} sm ={6} md={4} lg={3}>
                    <Product product={product} />

                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;