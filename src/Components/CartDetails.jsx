import { IoIosCloseCircleOutline } from "react-icons/io";
import Swal from "sweetalert2";

const CartDetails = ({cart, setCarts, carts}) => {
    const {product_title, product_image, price, description, _id} = cart || {};
    const handleDelete = _id => {
            console.log(_id);
    
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`https://gadget-builder-server.vercel.app/cart/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your Product has been deleted from the cart.",
                                    icon: "success"
                                });
                                const remaining = carts.filter(cart => cart._id !== _id);
                                setCarts(remaining);
                            }
                        })
    
                }
            });
        }
    return (
        <div className="flex flex-col md:flex-row gap-6 border border-gray-300 rounded-2xl p-6 mb-8">
            <div className="w-1/10">
                <img className="" src={product_image} alt={product_title} />
            </div>
            <div className="text-start space-y-6 items-start w-full">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">{product_title}</h1>
                    <button onClick={() => handleDelete(_id)}><IoIosCloseCircleOutline size={20}/></button>
                </div>
                <p className="text-lg text-gray-400">{description}</p>
                <p className="font-bold text-xl">Price: ${price}</p>
            </div>
        </div>
    );
};

export default CartDetails;