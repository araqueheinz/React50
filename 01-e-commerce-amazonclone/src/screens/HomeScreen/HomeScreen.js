import React from 'react';
import './homescreen.css'
import Product from '../../components/Product/Product';
import dummyData from '../../dummyData/dummyData.json';

const HomeScreen = () => {
  const {products} = dummyData;

  return (
    <>
      <div className='home'>
        <div className='home__container'>
          <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" alt="hero" className="home__image" />
          <div className='home__row'>
            <Product 
              id={products[31].id}
              title={products[31].description}
              price={products[31].price}
              rating={products[31].rating}
              img={products[31].thumbnail}
            />
            <Product
              id={products[32].id}
              title={products[32].description}
              price={products[32].price}
              rating={products[32].rating}
              img={products[32].thumbnail}
            />
          </div>
          <div className="home__row">
            <Product
              id={products[33].id}
              title={products[33].description}
              price={products[33].price}
              rating={products[33].rating}
              img={products[33].thumbnail}
            />
            <Product
              id={products[34].id}
              title={products[34].description}
              price={products[34].price}
              rating={products[34].rating}
              img={products[34].thumbnail}
            />
            <Product
              id={products[35].id}
              title={products[35].description}
              price={products[35].price}
              rating={products[35].rating}
              img={products[35].thumbnail}
            />
          </div>
          <div className="home__row">
            <Product
              id={products[35].id}
              title={products[35].description}
              price={products[35].price}
              rating={products[35].rating}
              img={products[35].thumbnail}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeScreen
