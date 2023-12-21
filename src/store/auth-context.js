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
    const initailEmail = localStorage.getItem('email');
    const [email, setEmail] = useState(initailEmail);
    const userIsLoggedIn = !!token;
    
    const loginHandler = (token, email)=>{
        setToken(token);
        setEmail(email);
        localStorage.setItem('token', token);
        localStorage.setItem('email', email);
    }
    const logoutHandler = ()=>{
        setToken(null);
        setEmail('');
        localStorage.removeItem('token');
        localStorage.removeItem('email');
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