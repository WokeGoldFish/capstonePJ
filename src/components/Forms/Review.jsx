import React from 'react'

import { Typography, List, ListItem, ListItemText } from '@mui/material'


const Review = ({ receipt }) => {
  return (
    <>
        <Typography variant='h6' gutterBottom>Order Summary</Typography>
        <List disablePadding>
            {receipt.live.line_items.map((product) =>
                <ListItem sx={{padding: '15px 0'}} key={product.name}>
                    <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                    <Typography variant='body2'>
                        {product.line_total.formatted_with_symbol}
                    </Typography>
                </ListItem>
            )}
            <ListItem sx={{padding: '15px 0'}}>
                <ListItemText primary='Total'/>
                <Typography varient='subtitle2' sx={{fontWeight: 700}}>
                    {receipt.live.subtotal.formatted_with_symbol}
                </Typography>
            </ListItem>
        </List>
    </>
  )
}

export default Review