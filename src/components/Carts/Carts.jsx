import React, { useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';

const Carts = ({ productsInfo }) => {

    const getProductsId = JSON.parse(localStorage.getItem('productId')) || []

    let updatedProductDetails = []
    console.log(updatedProductDetails);


    for (const productId of getProductsId) {
        const cartProduct = productsInfo.find(productDetails => productDetails.id === productId)
        if (cartProduct) {
            updatedProductDetails.push(cartProduct);
        }

    }

    if (getProductsId.length === 0) {
        return <h2 className='text-2xl font-semibold mt-20'>Not added any products</h2>
    }

    const hanndleButton = (id) => {
        // Retrieve the current list of product IDs from localStorage
        let setProductId = JSON.parse(localStorage.getItem('productId')) || [];

        // Filter out the id you want to remove
        setProductId = setProductId.filter(productId => productId !== id);

        // Update localStorage with the new array
        localStorage.setItem('productId', JSON.stringify(setProductId));
    }


    return (
        <div>
            <h1 className='text-xl font-semibold'>Your Cart</h1>

            <div className='flex flex-col gap-4'>
                {
                    updatedProductDetails.map(productDetails => <div key={productDetails.id}>
                        <div className='flex items-center justify-between border p-2 rounded-md border-sky-500'>
                            <div>
                                <img src={productDetails.image} alt="" srcset="" className='w-10' />
                            </div>
                            <h2>{productDetails.title.slice(0, 20)}</h2>
                            <button onClick={() => hanndleButton(productDetails.id)} className='text-2xl text-red-500'><MdDeleteForever /></button>

                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default Carts;