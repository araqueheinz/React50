import React from 'react';
import Rating from '../Rating/Rating';
import './product.css';
import { useStateValue } from '../../StateProvider';
import { CART_ADD_ITEM } from '../../constants/cartConstants';

const Product = ({id, title, rating, img, color, text, price}) => {
  const [state, dispatch] = useStateValue();

  const addToCart = (e) => {
    dispatch({
      type: CART_ADD_ITEM,
      payload: { id, title, rating, img, color, text, price }
    });
  }

  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title || "soon"}</p>
            <p className='product__price'>
            <small>$</small><strong>{price}</strong></p>
            <Rating value={rating} color={color} text={`12 reviews`} />
        </div>
        <img src={img} alt={title || "soon"} />
        <button onClick={addToCart}><strong>Add to Cart</strong></button>
    </div>
  )
}

export default Product
