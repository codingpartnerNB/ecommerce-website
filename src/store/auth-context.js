import React, { useState } from "react";

const AuthContext = React.createContext({
    email: '',
    token: '',
    isLoggedIn: false,
    login: (token, email)=>{},
    logout: ()=>{}
});

export const AuthContextProvider = (props)=>{
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);
    const [email, setEmail] = useState('');
    const userIsLoggedIn = !!token;
    
    const loginHandler = (token, email)=>{
        setToken(token);
        setEmail(email);
        localStorage.setItem('token', token);
    }
    const logoutHandler = ()=>{
        setToken(null);
        setEmail('');
        localStorage.removeItem('token');
    }
    // useEffect(()=>{
    //     if(userIsLoggedIn){
    //         const timer = setTimeout(()=>{
    //             logoutHandler();
    //         },5000);
    //         return ()=>{
    //             clearTimeout(timer);
    //         }
    //     }
    // },[userIsLoggedIn]);
    const contextValue = {
        email: email,
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }
    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

export default AuthContext;