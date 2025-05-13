import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
    return (
        <div>
             <Toaster />
            {/* Navbar */}
            <Navbar />
            {/* Dynamic section */}
            <div className="min-h-[calc(100vh-481px)] md:mx-6">
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default MainLayout;