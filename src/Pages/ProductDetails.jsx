
import { useLoaderData, useParams } from "react-router-dom";
import StarRating from "../Components/StarRating";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import toast from "react-hot-toast";
const ProductDetails = () => {
    const product = useLoaderData();
    const { _id } = useParams();
    const { user } = useContext(AuthContext);


    const { product_title, price, rating, category, description, product_image } = product;



    // handle cart by click
    const handleCart = () => {
        const email = user?.email;
        const newCart = { email, product_title, price, description, product_image };
        console.log(newCart);
        // send data to the server
        fetch('https://gadget-builder-server.vercel.app/cart', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCart)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    toast.success('Successfully Added To The Cart');
                }
            })
        // addCart(product);
    }

    return (
        <div className="min-h-screen">
            <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2] md:h-[430px] rounded-b-2xl md:relative">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Product Details | Gadget Heaven</title>
                    <link rel="canonical" href="http://mysite.com/example" />
                </Helmet>
                <h1 className="text-5xl font-bold text-white">Product Details</h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                {/* dynamic product details */}
                <div className="rounded-2xl md:max-w-[1280px] h-fit md:absolute inset-0 m-auto top-[450px] flex flex-col md:flex-row gap-8 bg-[#FFFFFF] p-8 border-gray-200 border-2">
                    {/* image */}
                    <div className="w-1/3 ">
                        <img className="rounded-2xl h-full" src={product_image} alt={product_title} />
                    </div>
                    {/* details */}
                    <div className="w-2/3 flex flex-col items-start gap-4">
                        <h2 className="text-3xl font-semibold">{product_title}</h2>
                        <p className="font-semibold text-xl">Price: {price}k</p>
                        <button className="btn border-green-800 border-2 rounded-full w-[87px] h-[32px]">In Stock</button>
                        <p>{description}</p>
                        <p className="font-semibold text-xl">Category</p>
                        <p>{category}</p>
                        <p className="font-semibold text-xl">Rating</p>
                        <div className="flex justify-center items-center">
                            <StarRating rating={rating} />
                            <button className="btn-sm rounded-full font-bold">{rating}</button>
                        </div>
                        <div className="flex items-center gap-8">
                            <button onClick={() => handleCart()} className="btn w-full h-[52px] rounded-full bg-[#9538E2] text-white font-bold
                        "><div className="flex justify-between gap-6 items-center">
                                    <span>Add To Card</span>
                                    <MdOutlineShoppingCart size={20} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;