/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

// eslint-disable-next-line no-unused-vars
const AdminRoute = ({ children }) => {
    const { user } = useAuthContext();
    if (!user) {
        return <Navigate to="/signin" />;
    }
    if(!user.roles.includes("ROLES_ADMIN")) return <Navigate to="/notallow" />;
    return children;
}
export default AdminRoute;