import React from 'react';
import './subtotal.css';
import { useStateValue } from '../../StateProvider'
import { getCartToal } from '../../reducer';

const Subtotal = () => {
  const [state] = useStateValue();

  return (
    <div className='subtotal'>   
        <p>Subtotal ({state.cart.length} items): <strong>${getCartToal(state.cart)}</strong></p>
        <small className='subtotal__gift'>
            <label>
                This order is a gift
                <input name="gift" type="checkbox" />
            </label>
        </small>
        <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
