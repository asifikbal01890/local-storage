import React, { useState } from 'react';

const ProductCard = ({ product }) => {


    const { title, description, image, price, id } = product;

    const handleCartButton = (id) => {
        // 1st step:  Retrieve the current list of product IDs from localStorage
        let getProducts = JSON.parse(localStorage.getItem('productId')) || [];
        const alreadyIn = getProducts.find(product => product === id)

        if (alreadyIn === undefined) {
            // 2nd step: Add the new ID to the array
            getProducts = [...getProducts, id];

            // 3rd step: Save the updated array back to localStorage
            localStorage.setItem('productId', JSON.stringify(getProducts));
        }else{
            alert("already add to cart")
        }
       
    }


    return (
        <div className="card bg-base-100 w-[350px] shadow-xl">
            <figure className="px-10 pt-10 h-96">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-xl w-full h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title h-24">{title}</h2>
                <p>{description.slice(0, 100)}...</p>
                <small>Price: ${price}</small>
                <div className="card-actions">
                    <button onClick={() => { handleCartButton(id) }} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;