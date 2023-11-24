import React, { useState } from 'react';
import'./Product.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
const Product = () => {
    const[selectedImg,setSelectedImg]=useState(0)
    const[quantity,setQuantity]=useState(0)
    const images=[
"https://images.pexels.com/photos/10026491/pexels-photo-10026491.png?auto=compress&cs=tinysrgb&w=1600&lazy=load",
"https://images.pexels.com/photos/10026487/pexels-photo-10026487.png?auto=compress&cs=tinysrgb&w=1600&lazy=load"
    ];
    return (
        <div className='product'>
            <div className='left'>
                <div className='images'>
                    <img src={images[0]} alt='' onClick={e=>setSelectedImg(0)}/>
                    <img src={images[1]} alt='' onClick={e=>setSelectedImg(1)}/>
                </div>
<div className='mainImg'>
<img src={images[selectedImg]} alt=''/>
</div>
            </div>
            <div className='right'>
                <h1>Title</h1>
                <span className='price'>$199</span>
                <p>Discover our stylish long sleeve graphic t-shirts, a perfect blend of comfort and trend. Express your unique style with our diverse collection of graphics, available in various sizes and designs

                </p>
                <div className='quantity'>
<button 
onClick={()=>setQuantity((prev)=>prev===1?1: prev-1)}>-</button>
{quantity}
<button onClick={()=>setQuantity((prev)=>prev+1)}>+</button>
                </div>
                <button className='add'>
<AddShoppingCartIcon/> ADD TO CART
                </button>
                <div className='links'>
<div className='item'>
<FavoriteBorderIcon/> ADD TO WISH LIST
</div>
<div className='item'>
<BalanceIcon /> ADD TO COMPARE
</div>
                </div>
                <div className='info'>
<span>Vendor: Polo</span>
<span>Product Type:T-Shirt</span>
<span>Tag: T-Shirt,Women,Top</span>
                </div>
                <hr />
<div className='info'>
<span>DESCRIPTION</span>
<hr />
<span>ADDITIONAL INFORMATION</span>
<hr />
<span>FAQ</span>
</div>
            </div>
        </div>
    );
};

export default Product;     