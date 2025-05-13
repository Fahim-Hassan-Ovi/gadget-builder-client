import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Components/Card";

const ProductCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [products, setProducts] = useState([]);
    // console.log(products);
    useEffect(()=> {
        if(category){
            const filterByCategory = [...data].filter(product => product.category === category);
            setProducts(filterByCategory);
        }
        else{
            setProducts(data);
        }
    },[data, category]);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <Card key={product._id} product={product}/>)
            }
        </div>
    );
};

export default ProductCards;