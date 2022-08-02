import React from "react";
import './product.css'

const Product = ({ imageSrc,productTitle, productDescription, productPrice}) => {
    return (
        <div className='product-container'>
            <img src={imageSrc} width="300" height="300" />
            <p className='product-title'>{productTitle}</p>
            <p className='product-description'>{productDescription}</p>
            <p className='product-price'> ${productPrice}</p>
        </div >
    )
}

export default Product;