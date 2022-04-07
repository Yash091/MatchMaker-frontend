import React, { useEffect, useState } from 'react'
import { createContext } from "react";
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

const Context = ({children}) => {
    const history = useHistory();
    const [user,setUser] = useState({});
    useEffect(()=>{
        const data = JSON.parse(window.localStorage.getItem('userInfo'));
        setUser(data);
        if(!data)
            history.push("/login");
    },[history])    
    return (
        <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    )
}

export default Context;