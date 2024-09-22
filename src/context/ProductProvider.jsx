import axios from 'axios'
import React, { createContext, useContext, useEffect, useState } from 'react'


export const ProductContext=createContext()
export const useProductContext=()=>{
    return useContext(ProductContext)
}

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
  
    const getData = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/search?q=${search}`
        );
        setProducts(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    useEffect(() => {
      getData();
    }, [search]);
  return (
    <div>
        <ProductContext.Provider value={{products,loading,search,setSearch}}>
{children}

        </ProductContext.Provider>
    </div>
  )
}

export default ProductProvider