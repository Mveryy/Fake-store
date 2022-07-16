import { ShoppingCart, Storefront } from "phosphor-react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Navbar() {
  const { items, setFilteredItems, setCartIsOpen, cartCount } = useContext(Context)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let data = items.map(item => item.category)
    data = Array.from(new Set(data))
    setCategories(data)
  }, [items])

  return (
    <div className="bg-white w-full h-20 flex justify-between place-items-center px-8 shadow-lg z-0">
      <Storefront size={32} color="#b278d9"
        onClick={() => setFilteredItems(items)}
        className="hover:scale-110 transition-all cursor-pointer" />

      <h1 className="font-bold text-4xl text-[#9353c7] hidden nav:block mx-auto">Fake Store</h1>

      <div className="flex gap-8 font-bold md:gap-4 nav:hidden">
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
      <div className="relative">
        <ShoppingCart
          size={32}
          color="#b278d9"
          onClick={() => setCartIsOpen(true)}
          className="cursor-pointer hover:scale-110 transition-all" />

        {cartCount > 0 && <div className="bg-red-600 w-6 h-6 text-white font-bold rounded-full text-center absolute bottom-5 left-5">{cartCount}</div>}
      </div>
    </div>
  )
}