import React from 'react'
import './checkoutproduct.css'
import Rating from '../Rating/Rating';

const CheckoutProduct = ({id, title, rating, img, color, text, price}) => {
  const removeFromCart = () => {
    console.log("remove from cart");
  }
  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={img} alt={title || "soon"} />
        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title || "soon"}</p>
          <p className='checkoutProduct__price'><small>$</small><strong>{price}</strong></p>
          <Rating value={rating} color={color} text={`12 reviews`} />
          <button onClick={removeFromCart}><strong>Remove from Cart</strong></button>
        </div>
    </div>
  )
}

export default CheckoutProduct
