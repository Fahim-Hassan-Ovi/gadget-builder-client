import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PrdCard from './PrdCard';

const ManageProduct = () => {
    const loadedProduct = useLoaderData();
    const [products, setProducts] = useState(loadedProduct);
    return (<>
    <div className='flex justify-center items-center '>
        <Link to="/addProduct"><button className='btn rounded-full bg-violet-300 hover:bg-white'>Add Product</button></Link>
    </div>
        <div className='grid grid-cols-1 md:grid-cols-2  gap-5 mt-8'>
            {
                products.map(product =>
                    <PrdCard
                        key={product._id}
                        product={product}
                        products={products}
                        setProducts={setProducts}
                    >
                    </PrdCard>
                )
            }
        </div>
    </>
    );
};

export default ManageProduct;