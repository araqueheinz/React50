import React from 'react'
import './checkoutscreen.css';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
import dummyData from '../../dummyData/dummyData.json';

const CheckoutScreen = () => {
    const {products} = dummyData
  return (
    <div className='checkout'>
        <div className='checkout__left'>
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" className="checkout__ad" />
            <h2 className='checkout__title'>
                Your Shopping Carts
            </h2>
            <CheckoutProduct
                id={products[31].id}
                title={products[31].description}
                price={products[31].price}
                rating={products[31].rating}
                img={products[31].thumbnail}
            />
        </div>
        <div className='checkout__right'>
            <Subtotal />
        </div>
    </div>
  )
}

export default CheckoutScreen
