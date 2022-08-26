import React from 'react'
import Rating from '../Rating/Rating';
import './product.css';
import { useStateValue } from '../../StateProvider'

const Product = ({id, title, rating, img, color, text}) => {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    console.log("item")
    dispatch({
      type: "ADD_TO_CART",
      payload: { id, title, rating, img, color, text }
    })
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
