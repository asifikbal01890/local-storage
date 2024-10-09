import React, { useState } from 'react';

const ProductCard = ({ product, setAddProducts, addProducts }) => {
  

    const { title, description, image, price, id } = product;

    const handleCartButton = (id) =>{
        // let product = []

        setAddProducts([...addProducts, id])
        localStorage.setItem('productId', JSON.stringify(addProducts))
    }


    return (
        <div className="card bg-base-100 w-96 shadow-xl">
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
                    <button onClick={()=> {handleCartButton(id)}} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;