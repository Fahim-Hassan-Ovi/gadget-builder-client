import { NavLink, Outlet } from "react-router-dom";


const Categories = ({ categories }) => {
    return (
        <div className="md:mx-[130px] text-center my-16">
            <h2 className="text-4xl font-bold">Explore Cutting-Edge Gadgets</h2>
            <div className="flex flex-col md:flex-row gap-6 mt-16">
                <div className="md:w-1/6 border border-gray-200 rounded-2xl flex flex-col p-6 gap-6 h-fit">
                    <NavLink to={`/`}>{({ isActive }) => (
                        <button className={`btn w-full h-[52px] rounded-full ${isActive ? 'bg-[#9538E2] text-white font-bold' : ''}`}>All Product</button>
                    )}</NavLink>
                    {
                        
                        categories.map(category => (
                            <NavLink key
                                ={category} to={`category/${category.category}`} >
                                {({ isActive }) => (
                                    <button className={`btn w-full h-[52px] rounded-full ${isActive ? 'bg-[#9538E2] text-white font-bold' : ''}`}>{category.category}</button>
                                )}
                            </NavLink>
                        ))
                    }
                </div>
                <div className="md:w-5/6  ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Categories;