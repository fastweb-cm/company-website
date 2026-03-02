import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function
UserProvider({children}) {
    const [user, setUser] = useState(null);


const isAuthenticated = !!user;

const login = (userData) => {
    setUser(userData);
    //waiting for backend's implementaion
};

const logout = () =>{
    setUser(null);
};

return (
    <UserContext.Provider value={{user, login, logout, isAuthenticated}}>{children} </UserContext.Provider>
);
};
export function useUser() {
    return useContext(UserContext);
}