import React from 'react'
import { useContext } from 'react';
import { createContext } from 'react'
 const authContext=createContext();
 export const useAuth=()=>(
    useContext(authContext)
 )
function AuthContext({children}) {
   
    let value={
        serverUrl:''
    }
  return (
    <div>
        <authContext.Provider
        value={value}>
            {children}
        </authContext.Provider>
    </div>
  )
}

export default AuthContext