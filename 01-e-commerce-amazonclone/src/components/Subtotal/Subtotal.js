import React from 'react';
import './subtotal.css';

const Subtotal = () => {
  return (
    <div className='subtotal'>   
        <p>Subtotal (0 items): <strong>$0</strong></p>
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
