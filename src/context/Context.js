import React, { useEffect,useState } from 'react'
import { createContext } from 'react'
import { useHistory } from 'react-router-dom';

export const UserContext = createContext();

const Context = ({children}) => {
    const initial = JSON.parse(window.localStorage.getItem("userInfo"));
    const [userData,setUserData] = useState(initial);
    const history = useHistory();
    useEffect(()=>{
        
        const data = JSON.parse(window.localStorage.getItem("userInfo"));
        if(!data)
            history.push("/login");
        else
        setUserData(data);
    },[history]);
    useEffect(()=>{
        if(userData!=={} || userData!==null || userData!== undefined)
          window.localStorage.setItem("userInfo",JSON.stringify(userData));
     },[userData]);
  return (
    <UserContext.Provider value ={{userData,setUserData}}>{children}</UserContext.Provider>
  )
}

export default Context