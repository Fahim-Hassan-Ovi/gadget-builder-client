import { useState } from "react";
import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    const [activeButton, setActiveButton] = useState("cart");
    return (

        <div className="">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dashboard | Gadget Heaven</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <div className="md:px-[210px] pt-8 justify-center items-center text-center bg-[#9538E2]   ">
                <h1 className="text-5xl font-bold text-white">Dashboard</h1>
                <p className="py-6 text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                </p>
                <div className="flex justify-center items-center gap-5 pb-8">
                    {/* <NavLink to={'/dashboard/cart'}>
                        {({ isActive }) => (
                            <button className={`btn w-[170px]  h-[52px] border border-white rounded-full ${isActive ? 'bg-white text-[#9538E2] font-bold' : 'text-white bg-transparent'}`}>Cart</button>
                        )}
                    </NavLink>
                    <NavLink to={'/dashboard/wishlist'}>
                        {({ isActive }) => (
                            <button className={`btn w-[170px]  h-[52px] border border-white rounded-full ${isActive ? 'bg-white text-[#9538E2] font-bold' : 'text-white bg-transparent'}`}>Wishlist</button>
                        )}
                    </NavLink> */}
                    <NavLink
                        to={'/dashboard/cart'}
                        onClick={() => setActiveButton("cart")} // Set active button to cart
                    >
                        <button
                            className={`btn w-[170px] h-[52px] border border-white rounded-full ${activeButton === "cart" ? 'bg-white text-[#9538E2] font-bold' : 'text-white bg-transparent'}`}
                        >
                            Cart
                        </button>
                    </NavLink>
                    {/* <NavLink
                        to={'/dashboard/wishlist'}
                        onClick={() => setActiveButton("wishlist")} // Set active button to wishlist
                    >
                        <button
                            className={`btn w-[170px] h-[52px] border border-white rounded-full ${activeButton === "wishlist" ? 'bg-white text-[#9538E2] font-bold' : 'text-white bg-transparent'}`}
                        >
                            Wishlist
                        </button>
                    </NavLink> */}
                </div>
            </div>
            {/* dynamic product details */}
            <Outlet />
        </div>
    );
};

export default Dashboard;