import React from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia, Grid, createTheme, ListItemSecondaryAction, } from '@mui/material'
import { useStyles } from './CartItemStyles'


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
                <Button type='button' onClick={() => onUpdateCartQuantity(item.id, item.quantity + 1)} size='small'>+</Button>
                <Typography sx={styles.text}>{item.quantity}</Typography>
                <Button type='button' onClick={() => onUpdateCartQuantity(item.id, item.quantity - 1)} size='small'>-</Button>
            </div>
            <Button variant='contained' type='button' color='secondary' onClick={() => onRemoveFromCart(item.id)}>Delete</Button>
        </CardActions>
    </Card>
  )
}

export default CartItem