import React, { useState } from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, createTheme, } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import logo from '../../assets/Logo.png'
import { useStyles } from './styles';


const Navbar = () => {
    const styles = useStyles(createTheme())
    return (
    <>

    <AppBar sx={styles.appBar} spacing= {4}>
        <Toolbar>
            <Typography sx={styles.title}>
                <img src={logo} alt='Commerce.js' sx={styles.image}height='60px' />
            </Typography>
            <Typography sx={styles.name} variant='h3'>
                Ecommerce Site
            </Typography>
            <div sx={styles.grow}/>
            <div sx={styles.button}>
                <IconButton aria-label = 'Show Cart Items' color= 'inherit'>
                    <Badge badgeContent={1} color='secondary'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>
            </div>
        </Toolbar>
    </AppBar>

    </>

  )
}

export default Navbar