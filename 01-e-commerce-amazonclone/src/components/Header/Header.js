import React from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { useStateValue } from '../../StateProvider'
import { getTotalItems } from '../../reducer';

const Header = () => {
    const [{cart}] = useStateValue();
    

  return (
    <div className='header__container'>
        <div className="header">
            <div className="header__logo">
                <Link to='/'><i className="fa-solid fa-store header__logoImage"></i></Link>
                <Link to='/'><h2 className='header__logoTitle'>eShop</h2></Link>
            </div>
            <div className='header__search'>
                <input type="text" className='header__searchInput' onChange={(e) => { console.log(e.target.value)}}/>
                <i className="fa-solid fa-magnifying-glass header__searchIcon"></i>
            </div>
            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello Guest</span>
                    <Link to='/login'><span className="nav__itemLineTwo" aria-label='sign in' >Sign In</span></Link>
                </div>
                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLineTwo">Shop</span>
                </div>
                
                <div className="nav__itemCart">
                    <Link to="/checkout"><i className="fa-solid fa-cart-arrow-down"></i></Link>
                    <span className="nav__itemLineTwo nav__cartCount">{cart.length ? getTotalItems(cart) : 0}</span>
                </div>
            </div>
        </div>
    </div>                    
  )
}

export default Header
