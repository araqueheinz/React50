import React from 'react'
import Rating from '../Rating/Rating';
import './product.css';

const Product = ({id, title, rating, img, color, text}) => {

  const addToCart = () => {
    console.log('Hello Click here');
  }

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title || "soon"}</p>
            <p className='product__price'>
            <small>$</small><strong>30</strong></p>
            <Rating value={rating} color={color} text={`12 reviews`} />
        </div>
        <img src={img} alt={title || "soon"} />
        <button onClick={addToCart}><strong>Add to Cart</strong></button>
    </div>
  )
}

export default Product
