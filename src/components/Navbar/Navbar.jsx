import React, { useState } from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, createTheme, } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import logo from '../../assets/Logo.png'
import { useStyles } from './NavbarStyles';
import { Link } from 'react-router-dom'
import BasicMenu from './Dropdown';

const Navbar = ({ totalItems }) => {
    const styles = useStyles(createTheme())

    return (
    <>

    <AppBar sx={styles.appBar} spacing= {4}>
        <Toolbar>
            <Link to={'/'}>
            <Typography sx={styles.title}>
                <img src={logo} alt='Commerce.js' sx={styles.image}height='60px' />
                
            </Typography>
            </Link>
            
            <Typography sx={styles.name} variant='h5'>
                Acme Inc.
            </Typography>
            <div sx={styles.grow}/>
            <div sx={styles.button}>
                <IconButton component={Link} to="/cart">
                    <Badge badgeContent={totalItems} color='error'>
                        <ShoppingCart />
                    </Badge>
                </IconButton>   
            </div>
            <BasicMenu/>
        </Toolbar>
    </AppBar>

    </>

  )
}

export default Navbar