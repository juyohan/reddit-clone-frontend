import {createContext, useState} from "react";

const UserContext = createContext(null);

function UserProvider({children}) {
    const [isLogin, setIsLogin] = useState({
        username : '',
        email : '',
        authKey : ''
    });
    return (
        <UserContext.Provider value={isLogin}>
            {children}
        </UserContext.Provider>
    );
}