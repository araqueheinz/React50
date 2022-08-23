import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header__container'>
        <div className="header">
            <div className="header__logo">
                <i className="fa-solid fa-store header__logoImage"></i>
                <h2 className='header__logoTitle'>eShop</h2>
            </div>
            <div className='header__search'>
                <input type="text" className='header__searchInput' onChange={(e) => { console.log(e.target.value)}}/>
                <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <span className="nav__itemLineTwo" aria-label='sign in' >Sign In</span>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                
                <div className="nav__itemCart">
                    <i className="fa-solid fa-cart-arrow-down"></i>
                    <span className="nav__itemLineTwo nav__cartCount">0</span>
                </div>
            </div>
        </div>
    </div>                    
  )
}

export default Header
