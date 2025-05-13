import { FaSortAmountDown } from "react-icons/fa";
import CartDetails from "./CartDetails";
import { useContext, useEffect, useState } from "react";
import ModalImg from "../assets/Group.png";
import { NavLink, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import Success from "../Pages/Success";
const Cart = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext);
    const email = user?.email;
    const [carts, setCarts] = useState([]);
    const publishableKey = import.meta.env.VITE_publishable_key;
    const [paymentSuccess, setPaymentSuccess] = useState(false);

    const stripePromise = loadStripe(publishableKey);
    useEffect(() => {
        const filterByEmail = [...data].filter(cart => cart.email === email);
        setCarts(filterByEmail);
    }, [data, email]);

    // console.log(carts);


    // total cost count
    const [totalCost, setTotalCost] = useState(0);
    useEffect(() => {
        setTotalCost()
        const totalPrice = carts.reduce((acc, cart) => acc + parseInt(cart.price), 0);
        setTotalCost(totalPrice)
    }, [carts])

    // handle purchase by click

    // const handlePurchase = () =>{
    //     clearCart();

    //     setTotalCost(0);
    //     document.getElementById('my_modal_1').showModal();
    // }

    const handlePurchase = async () => {
        const stripe = await stripePromise;

           setPaymentSuccess(true);

        try {
            const response = await axios.post("https://gadget-builder-server.vercel.app/create-checkout-session", {
                carts
            });

            const result = await stripe.redirectToCheckout({
                sessionId: response.data.id,
            });

          
           
            if (result.error) {
                console.error(result.error.message);
            }
            
        } catch (error) {
            console.error("Stripe checkout error", error);
        }
    };




    // sort by price
    // const handleSort = (sortBy) => {
    //     if (sortBy === 'price') {
    //         const sortProduct = [...products].sort((a, b) => b.price - a.price);
    //         setProducts(sortProduct);
    //     }
    // }

    return (
        <>
            {/* <div className="md:px-[106px]">
                <div className="flex justify-between items-center py-8">
                    <div>
                        <p className="text-bold text-xl">Cart</p>
                    </div>
                    <div className="flex justify-center items-center gap-6">
                        <p className="text-bold text-xl">Total cost : {totalCost} $</p>
                        
                        <button onClick={() => { handlePurchase() }} className={`btn h-[52px] rounded-full bg-[#9538E2] text-white font-bold`}>Purchase</button>
                    </div>
                    
                    <dialog id="my_modal_1" className="modal">
                        <form method="dialog" className="modal-box px-5 py-10 flex flex-col justify-center items-center">
                            <img className="text-6xl" src={ModalImg} alt="" />
                            <h3 className="font-bold text-2xl my-5">Payment Successfully </h3>
                            <div className="text-center">
                                <p className="text-gray-400">Thanks for purchasing. </p>
                                <p className="text-gray-400 mb-4">Total: {totalCost} $</p>
                            </div>

                        </form>
                    </dialog>
                </div>
               
                <div className="flex flex-col gap-6">
                    {
                        carts.map(cart => <CartDetails key={cart._id} cart={cart} setCarts={setCarts} carts={carts} />)
                    }
                </div>
            </div> */}

            <div className="md:px-[106px]">
                {
                    !paymentSuccess ? (
                        <>
                            <div className="flex justify-between items-center py-8">
                                <div>
                                    <p className="text-bold text-xl">Cart</p>
                                </div>
                                <div className="flex justify-center items-center gap-6">
                                    <p className="text-bold text-xl">Total cost : {totalCost} $</p>
                                    <button onClick={handlePurchase} className="btn h-[52px] rounded-full bg-[#9538E2] text-white font-bold">
                                        Purchase
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-6">
                                {carts.map(cart => (
                                    <CartDetails key={cart._id} cart={cart} setCarts={setCarts} carts={carts} />
                                ))}
                            </div>
                        </>
                    ) : (
                        <Success carts={carts} />
                    )
                }
            </div>
        </>
    );
};

export default Cart;