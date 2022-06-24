import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, createTheme, ListItemSecondaryAction, IconButton, } from '@mui/material'
import { useStyles } from './CartItemStyles'
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


const CartItem = ({ item, onUpdateCartQuantity, onRemoveFromCart}) => {
    const styles = useStyles()
  return (
    <Card>
        <CardMedia image={item.image.url} alt={item.name} sx={styles.media} />
        <CardContent sx={styles.cardContent}>
            <Typography variant='h4'>{item.name}</Typography>
            <Typography variant='h5'>{item.line_total.formatted_with_symbol}</Typography>
        </CardContent>
        <CardActions sx={styles.cartActions}>
            <div sx={styles.buttons}>
                <IconButton type='button' onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)} size='lg'><AddIcon/></IconButton>
                <Typography sx={styles.text}>{item.quantity}</Typography>
                <IconButton type='button' onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)} size='lg'><RemoveIcon/></IconButton>
            </div>
            <IconButton variant='contained' type='button' color='error' onClick={() => onRemoveFromCart(item.id)}><DeleteIcon/></IconButton>
        </CardActions>
    </Card>
  )
}

export default CartItem