import React, { useEffect} from 'react';
import ProductCard from '../ProductCard/ProductCard';

const Products = ({setProductsInfo, productsInfo}) => {


useEffect(()=> {
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(data => setProductsInfo(data))
}, [])






    return (
        <div>
           <h1 className='text-xl font-semibold'>Happy Shopping</h1>
           <div className='grid grid-cols-3 gap-6'>
            {
                productsInfo.map(product => 
                <ProductCard 
                key={product.id} 
                product={product}
                ></ProductCard>)
            }
           </div>
        </div>
    );
};

export default Products;