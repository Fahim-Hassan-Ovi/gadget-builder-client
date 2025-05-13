import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { product_title, product_image, _id, price } = product;
    return (
        <div className="card bg-base-100 border  border-gray-200 flex flex-col w-[327px] md:w-full h-[380px]">
            <div className='flex items-center justify-center'>
                <figure className="px-2 pt-2 w-3/4">
                <img
                    src={product_image}
                    alt={product_title}
                    className="rounded-xl w-[282px] h-[182px] flex-grow " />
            </figure>
            </div>
            <div className="card-body items-start text-start">
                <h2 className="card-title">{product_title}</h2>
                <p className='font-bold'>Price: {price}K</p>
                <div className="card-actions ">
                    <Link to={`/product/${_id}`}>
                    <button className="btn w-[160px] border-[#9538E2] text-[#9538E2] rounded-full">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Card;