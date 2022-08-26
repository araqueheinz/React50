import React from 'react'
import './checkoutproduct.css'
import Rating from '../Rating/Rating';
import { useStateValue } from '../../StateProvider'
import { CART_REMOVE_ALL_ITEMS, CART_REMOVE_ONE_ITEM } from '../../constants/cartConstants';

const CheckoutProduct = ({id, title, rating, img, color, text, price, quantity}) => {
  const [state, dispatch] = useStateValue();

  const removeAllFromCart = () => {
    dispatch({
      type: CART_REMOVE_ALL_ITEMS,
      payload: {id}
    })
  }

  const removeOneFromCart = () => {
    dispatch({
      type: CART_REMOVE_ONE_ITEM,
      payload: {id}
    })
  }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={img} alt={title || "soon"} />
        <div className='checkoutProduct__info'>
          <p className='checkoutProduct__title'>{title || "soon"}</p>
          <p>Quantity: <strong>{quantity}</strong></p>
          <p className='checkoutProduct__price'><small>$</small><strong>{price}</strong></p>
          <Rating value={rating} color={color} text={`12 reviews`} />
          <button onClick={removeAllFromCart}><strong>Remove from Cart</strong></button>
        </div>
    </div>
  )
}

export default CheckoutProduct
