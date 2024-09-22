import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const getData=async()=>{
    try {
     const res= await axios.get(`https://dummyjson.com/products/search?q=${search}`);
     console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getData();
  }, []);
  return (
    <div>Products</div>
  )
}

export default Products