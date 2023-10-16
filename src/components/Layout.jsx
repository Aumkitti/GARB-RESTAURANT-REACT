/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
const Layout = () => {
    return (
        <AuthProvider>
            <NavBar />
            <div className="App">
                <Outlet />
            </div>
        </AuthProvider>
    )
}

export default Layout;
