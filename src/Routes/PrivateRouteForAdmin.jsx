import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../pages/Loading";

const PrivateRouteForAdmin = ({ children }) => {
    const adminEmail = import.meta.env.VITE_ADMIN_EMAIL;
    const { user, loading } = useContext(AuthContext);

    if (loading) return <Loading />;

    if (user && user.email === adminEmail) {
        return children;
    }

    return <Navigate to="/" replace />;
};

export default PrivateRouteForAdmin;
