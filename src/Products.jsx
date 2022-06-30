import React from 'react';
import {productList} from './api'

const Products = () => {
    console.log(productList);
  return (
    <div className='products__wrapper'>
        
    {
        productList.map((product, index) => (
            <div key ={index} className = "product">
                <img className='product__img' src = {product.img} alt="" />

                <p className='product__description'>
                    {product.desc}
                </p>

                <hr />

                <div className='product__action'>
                    <span className='product__price'>&#8358; {product.price}</span>
                    <button type='submit'>Add to cart</button>
                </div>
            </div>
        )
        )
    }
        
    </div> 
  )
}

export default Products