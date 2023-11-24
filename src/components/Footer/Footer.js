import React from 'react';
import "./Footer.css"
const Footer = () => {
    return (
        <div className='footer'>
          <div className='top'>
            <div className='item'>
                <h1>Categories</h1>
                <span>Women</span>
                <span>Men</span>
                <span>Shoes</span>
                <span>Accessories</span>
                <span>New Arrivals</span>
            </div>
            <div className='item'>
            <h1>Links</h1>
                <span>FAQ</span>
                <span>Pages</span>
                <span>Stories</span>
                <span>Compare</span>
                <span>Cookies</span>
            </div>
            <div className='item'>
                <h1>About</h1>
                <span>
                Stylish Threads Boutique offers a curated collection of fashion-forward clothing for men and women. From casual to formal wear, our store provides quality and trendy apparel to suit various tastes and occasions, making every shopping experience a stylish one.
                </span>
            </div>
            <div className='item'>
            <h1>Contact</h1>
                <span>
                You can reach Zara Store Boutique at Zindabazar. Our store is located at Zindabazar,Sylhet, where our friendly staff is ready to assist you with any clothing inquiries, appointments, or orders. We look forward to serving you! </span>
            </div>
          </div>
          <div className='bottom'>
            <div className='left'>
                <span className='logo'>Zara Store</span>
                <span className='copyright'>©Copyrights 2023,All rights reserved</span>
            </div>
            <div className='right'>
            <img className='flag' src='/img/paymentt.png' alt=''></img>
            </div>
          </div>
        </div>
    );
};

export default Footer;