import React, { useState } from 'react';
import './Navbar.css'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';    
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';

const Navbar = () => {
    const[open,setOpen]=useState(false)
    return (    
        <div className='navbar'>
        <div className='wrapper'>
        <div className='left'>
        <div className='item'>
        <img className='flag' src='/img/enn.png' alt=''></img>
        <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
            </div> 
            <div className='icon'>
<span>USD</span>
<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
</div>
<div className='item'>
<Link className='link' to='/products/1'>Women</Link>
</div>
<div className='item'>
<Link className='link' to='/products/2'>Men</Link>
</div>
<div className='item'>
<Link className='link' to='/products/3'>Children</Link>
</div>
         </div>
 <div className='center'>
            <Link className='link' to='/'>Zara Store</Link>
            </div>    
            <div className='right'>
        <div className='item'>
            <Link className='link' to='/'>Homepage</Link>
            </div>      
        <div className='item'>
            <Link className='link' to='/'>About</Link>
            </div>      
            
            
        <div className='item'>
   
            <Link className='link' to='/'>Contact</Link>
            </div>      
        <div className='item'>
            <Link className='link' to='/'>Stores</Link>
        
        </div>
        <div className='icons'>
<SearchIcon></SearchIcon>
<PersonOutlineIcon></PersonOutlineIcon>
<FavoriteBorderIcon></FavoriteBorderIcon>
<div className='cartIcon' onClick={()=>setOpen(!open)}>
<ShoppingCartIcon></ShoppingCartIcon>
<span>0</span>
        </div>   
       </div>
        </div>
        </div>
        {open && <Cart></Cart>}
        </div>

    );
};

export default Navbar;
