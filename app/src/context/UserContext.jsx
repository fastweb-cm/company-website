import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function
UserProvider({children}) {
    const [user, setUser] = useState(null);
    const loading = false
const login = (userData) => {
    loading = true;
    setUser(userData);
    loading = false;
    //waiting for backend's implementaion
};

const logout = () =>{
    setUser(null);
};

return (
    <UserContext.Provider value={{user, login, logout, loading}}>{children} </UserContext.Provider>
);
};
export function useUser() {
    return useContext(UserContext);
}