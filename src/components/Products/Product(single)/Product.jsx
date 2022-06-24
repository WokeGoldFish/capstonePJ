import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
  Borders,
} from "@mui/material";

import { AddShoppingCart } from "@mui/icons-material";

const styles = {
  root: {
    maxWidth: "100%",
    paddingTop: "5%",
    marginTop: '10%',
    borderColor: 'grey.500',
  },
  media: {
    height: 0,
    paddingTop: "100%",
    color: 'grey',
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cardButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
};

const Product = ({ product, onAddToCart }) => { 
  return (
    <Card className="root" sx={styles.root}>
      <CardMedia
        className="media"
        sx={styles.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <Box component="div" sx={styles.cardContent}>
          <Typography varient="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography varient="h5">{product.price.formatted_with_symbol}</Typography>
        </Box>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} varient="body2" color="textSecondary"/>
      </CardContent>
      <CardActions disableSpacing sx={styles.cardButton}>
        <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(product.id, 1)}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
