import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import { ApiContext } from "./Context/ApiContext";
import axios from "axios"

export default function App() {
  const [items, setItems] = useState([])
  const [filteredItems, setFilteredItems] = useState([])

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        res.data = (res.data.sort(() => Math.random() - 0.5))
        setItems(res.data)
        setFilteredItems(res.data)
      })
  }, [])

  return (
    <ApiContext.Provider value={{items, setItems, filteredItems, setFilteredItems}}>
      <div className="h-screen w-100">
        <Navbar />
        <div className="grid grid-cols-5 m-6 gap-6">
          <Products />
        </div>
      </div>
    </ApiContext.Provider>
  )
}