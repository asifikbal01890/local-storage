import React from 'react';

const Carts = ({productsInfo}) => {

    const cartItemString = localStorage.getItem('productId');
    const cartItem = JSON.parse(cartItemString)
    // console.log(cartItem.includes(product.id));
    console.log(productsInfo);
    

    const addToCartItem = productsInfo.filter(product => cartItem.includes(product.id)) 
    console.log(addToCartItem);
    

    return (
        <div>
            <h1 className='text-xl font-semibold'>Your Cart</h1>
        </div>
    );
};

export default Carts;