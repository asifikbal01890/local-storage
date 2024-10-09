import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({setProductsInfo, productsInfo}) => {

const [addProducts, setAddProducts] = useState([])
// console.log(addProducts);

// console.log(productsInfo);


useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => setProductsInfo(data))
}, [])


localStorage.setItem('productId', JSON.stringify(addProducts))



    return (
        <div>
           <h1 className='text-xl font-semibold'>Happy Shopping</h1>
           <div className='grid grid-cols-3 gap-6'>
            {
                productsInfo.map(product => 
                <ProductCard 
                key={product.id} 
                product={product}
                addProducts={addProducts}
                setAddProducts={setAddProducts}
                ></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Products;