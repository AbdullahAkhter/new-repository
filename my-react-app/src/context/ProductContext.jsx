import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
const Context_on_product=createContext();
export const useProductContext=()=>(useContext(Context_on_product))
function ProductContext({children}){
    const[products,setproduct]=useState([])
    const getProduct=async()=>{
        try {
             const result=await axios.get("http://localhost:3000/api/product/list_of_products")
             setproduct(result.data)
             console.log("result is",result.data)
        } catch (error) {
            console.log("The error",error)
        }
       

    }
    useEffect(()=>{
        getProduct();
    },[])
    let value={products,setproduct,getProduct}
     return(
        <Context_on_product.Provider value={value}>
            {children}
        </Context_on_product.Provider>
     )
}
export default ProductContext