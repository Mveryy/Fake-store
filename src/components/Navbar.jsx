import { ShoppingCart, Storefront } from "phosphor-react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";

export default function Navbar() {
  const {items, setFilteredItems} = useContext(ApiContext)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let data = items.map(item => item.category)
    data = Array.from(new Set(data))
    setCategories(data)
  }, [items])

  return (
    <div className="bg-white w-100 h-20 flex justify-between place-items-center px-8 shadow-lg">
      <Storefront size={32} color="#b278d9" />
      <div className="flex gap-8 font-bold">
        <button onClick={() => setFilteredItems(items)}>HOME</button>
        {categories.map(category => 
        <button 
          className="hover:scale-110 transition-all"
          onClick={() => {
            setFilteredItems(items.filter(item => item.category === category))
          }}>
            {category.toUpperCase()}
        </button>
        )}
        
      </div>
      <ShoppingCart size={32} color="#b278d9" />
    </div>
  )
}