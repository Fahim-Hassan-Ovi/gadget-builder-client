import { useContext, useEffect } from "react";
import SuccessImg from ".././assets/success.png"
import { AuthContext } from "../provider/AuthProvider";

const Success = ({ carts }) => {
    const { user, loading } = useContext(AuthContext);
    // console.log(user.email);
    console.log(carts);

    useEffect(() => {
    if (!loading && user?.email && carts?.length) {
        carts.forEach(cart => {
            fetch(`https://gadget-builder-server.vercel.app/cart/${cart._id}`, {
                method: "DELETE",
            })
                .then(res => {
                    if (!res.ok) {
                        throw new Error(`Failed to delete cart item with ID: ${cart._id}`);
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(`Deleted cart item with ID: ${cart._id}`, data);
                })
                .catch(err => {
                    console.error(`Error deleting cart item with ID: ${cart._id}`, err);
                });
        });
    }
}, [user, loading, carts]);

    return (
        <>
            <div className="text-center my-5 flex flex-col items-center">
                <div className="mb-5">
                    <img src={SuccessImg} alt="" />
                </div>
                <div>
                    <h2 className="text-3xl font-bold text-green-600">Payment Successful!  </h2>
                    <p className="text-gray-600 mt-4">Thank you for your purchase.</p>
                </div>
            </div>
        </>
    );
};

export default Success;