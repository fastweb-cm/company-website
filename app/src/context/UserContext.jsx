import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function
UserProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    const isAuthenticated = !!user;
    const login = (userData) => {
    setLoading(true);
    setUser(userData);
    setLoading(false);
    //waiting for backend's implementaion
};

const logout = () =>{
    setUser(null);
};

return (
    <UserContext.Provider value={{user, login, logout, loading, isAuthenticated}}>{children} </UserContext.Provider>
);
};
export function useUser() {
    return useContext(UserContext);
}