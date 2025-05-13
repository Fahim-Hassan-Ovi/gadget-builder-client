import React from 'react';
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData();
    const { _id, product_title, price, rating, category, description, product_image } = product;

    const handleUpdateProduct = event => {
        event.preventDefault();

        const form = event.target;
        const product_title = form.product_title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const description = form.description.value;
        const product_image = form.product_image.value;
        const updatedProduct = { product_title, price, rating, category, description, product_image };
        console.log(updatedProduct);

        // send data to the server
        fetch(`https://gadget-builder-server.vercel.app/product/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-[#374151]'>Update Coffee: {name}</h1>
            <form onSubmit={handleUpdateProduct} className='flex justify-center mt-5'>
                <fieldset className="fieldset bg-[#F4F3F0] border-base-300 rounded-box border p-4">
                    {/* form row name and quantity */}
                    <div className='md:flex mb-6'>

                        <div className='md:w-1/2'>
                            <label className="label">Product Name</label>
                            <input type="text" name='product_title' defaultValue={product_title} className="input" placeholder="Product Name" />
                        </div>

                        <div className='md:w-1/2'>
                            <label className="label mr-3">Photo URL</label>
                            <input type="text" name='product_image' defaultValue={product_image} className="input" placeholder="Photo URL" />
                        </div>

                    </div>

                    {/* form row Supplier and Taste*/}
                    <div className='md:flex mb-6'>

                        <div className='md:w-1/2'>
                            <label className="label">Price</label>
                            <input type="number" name='price' defaultValue={price} className="input" placeholder="Price" />
                        </div>

                        <div className='md:w-1/2 ml-4'>
                            <label className="label">Rating</label>
                            <input type="number" name='rating' defaultValue={rating} className="input" placeholder="Rating" />
                        </div>

                    </div>

                    {/* form row Category and Details*/}
                    <div className='md:flex mb-6'>

                        <div className='md:w-1/2'>
                            <label className="label">Category</label>
                            <input type="text" name='category' defaultValue={category} className="input" placeholder="Category" />
                        </div>

                        <div className='md:w-1/2 ml-4'>
                            <label className="label">Description</label>
                            <input type="text" name='description' defaultValue={description} className="input" placeholder="Description" />
                        </div>

                    </div>



                    <input type="submit" value="Update Product" className='btn btn-neutral bg-[#D2B48C] border-none shadow-none mt-4 text-white' />
                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProduct;