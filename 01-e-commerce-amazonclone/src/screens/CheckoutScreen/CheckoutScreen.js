import React from 'react'
import './checkoutscreen.css';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider'
import { getCartToal } from '../../reducer';

const CheckoutScreen = () => {
    const [state, dispatch] = useStateValue();
    let count = 0
    

    return (
        <div className='checkout'>
            <div className='checkout__left'>
            <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
                <h2 className='checkout__title'>
                    Your Shopping Carts
                </h2>
                {state.cart.map(item => {
                    count++
                    return (
                        <CheckoutProduct
                            key={count}
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            img={item.img}
                        />
                    )
                })}
            </div>
            <div className='checkout__right'>
                <Subtotal />
            </div>
        </div>
    )
}

export default CheckoutScreen
