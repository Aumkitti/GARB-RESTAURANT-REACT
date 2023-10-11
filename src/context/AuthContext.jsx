/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState } from "react";
import AuthService from "../service/auth_service";
const AuthContext = createContext(null);
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const login = (user) =>setUser(user);
    const logout = () =>{
        AuthService.logout;
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
export const useAuthContext = () => useContext(AuthContext);