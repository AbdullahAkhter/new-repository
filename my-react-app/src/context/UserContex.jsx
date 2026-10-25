import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const context_for_user=createContext();
export const useUserContext=()=>(useContext(context_for_user))
function User_context_provider({children}){
    const[userdata,setuser]=useState(null)
    const getCurrentUser=async()=>{
        try {
            const user=await axios.post("http://localhost:3000/api/user/getCurrentUser",{},{withCredentials:true})
        setuser(user.data.user);
        console.log("result is",user.data)
        } catch (error) {
             console.log("error is",error)
        }
        

    }
    useEffect(()=>{
        getCurrentUser();
    },[])
    let value={userdata,setuser,getCurrentUser}
    return(
        <context_for_user.Provider
        value={value}>
            {children}
        </context_for_user.Provider>
    )
    
}
export default User_context_provider