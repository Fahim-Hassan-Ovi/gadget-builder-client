import { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
    const { pathname } = useLocation();
    const isNotHome = pathname !== "/";
    const { user, logOut } = useContext(AuthContext);
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;

    return (
        <div className="md:mx-6 md:mt-6 ">
            <div className={`navbar md:px-[106px] ${isNotHome ? " bg-white" : " bg-[#9538E2]  rounded-t-2xl"} `}>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/'>Home</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/statistics'>Statistics</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/dashboard'>Dashboard</NavLink>
                            <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/review'>Reviews</NavLink>
                            {user && user.email === adminEmail && (
                            <>
                                <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/manageProduct'>Manage Product</NavLink>

                            </>
                        )}

                        </ul>
                    </div>
                    <a className={`btn btn-ghost text-xl ${isNotHome ? "text-black" : " text-violet-300"}`}>Gadget Builder</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-8">
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/'>Home</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/statistics'>Statistics</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/dashboard'>Dashboard</NavLink>
                        <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/review'>Reviews</NavLink>
                        {user && user.email === adminEmail && (
                            <>
                                <NavLink className={({ isActive }) => `font-bold ${isActive ? 'text-black' : 'hover:text-warning text-violet-300'}`} to='/manageProduct'>Manage Product</NavLink>

                            </>
                        )}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ? (
                            <button onClick={logOut} className="font-bold text-black hover:text-violet-300 btn rounded-full">Log Out</button>
                        ) :
                            (
                                <Link to="/login" className="font-bold text-black hover:text-violet-300 btn rounded-full">Log In</Link>
                            )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;