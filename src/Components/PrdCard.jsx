import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const PrdCard = ({ product, products, setProducts }) => {
    const {_id, product_title, price, rating, category, description, product_image } = product;

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

                fetch(`https://gadget-builder-server.vercel.app/product/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Product has been deleted.",
                                icon: "success"
                            });
                            const remaining = products.filter(cof => cof._id !== _id);
                            setProducts(remaining);
                        }
                    })

            }
        });

        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You won't be able to revert this!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, delete it!"
        // }).then((result) => {
        //     if (result.isConfirmed) {

        //         fetch(`https://gadget-builder-server.vercel.app/coffee/${_id}`, {
        //             method:"DELETE"
        //         })
        //             .then(res => res.json())
        //             .then(data => {
        //                 console.log(data);
        //                 if (data.deletedCount > 0) {
        //                     Swal.fire({
        //                         title: "Deleted!",
        //                         text: "Your coffee has been deleted.",
        //                         icon: "success"
        //                     });
        //                     const remaining = coffees.filter(cof => cof._id !== _id);
        //                     setCoffees(remaining);
        //                 }
        //             })
        //     }
        // });
    }
    return (
        <div className="bg-[#F5F4F1] shadow-lg rounded-lg p-4 flex items-center gap-4">
            {/* Coffee Image */}
            <img src={product_image} alt={product.product_title} className="w-24 h-24 object-cover rounded-md" />

            {/* Coffee Details */}
            <div className="flex-1">
                <h2 className="text-lg font-semibold">Product_title: {product_title}</h2>
                <p className="text-gray-600 font-semibold">Category: {category}</p>
                <p className="text-gray-600 font-semibold">Description: {description}</p>
                <p className="text-gray-700 font-semibold">Price: {price} </p>
                <p className="text-gray-700 font-semibold">Rating: {rating} </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-2">
                <button className="bg-[#D5BDAF] p-2 rounded-md text-white"><FaEye /></button>
                <Link to={`/updateProduct/${_id}`}>
                <button className="bg-[#5C5243] p-2 rounded-md text-white"><FaEdit /></button>
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="bg-red-500 p-2 rounded-md text-white"><FaTrash /></button>
            </div>
        </div>
    );
};

export default PrdCard;