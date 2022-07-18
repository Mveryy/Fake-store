import { ShoppingCart, Storefront, List, X } from "phosphor-react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Context } from "../Context/Context";

export default function Navbar() {
  const { items, setFilteredItems, setCartIsOpen, cartCount, menuIsOpen, setMenuIsOpen } = useContext(Context)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let data = items.map(item => item.category)
    data = Array.from(new Set(data))
    setCategories(data)
  }, [items])

  return (
    <div className="bg-white w-full h-20 flex justify-between place-items-center px-8 shadow-lg">
      <Storefront size={32} color="#b278d9"
        onClick={() => setFilteredItems(items)}
        className="hover:scale-110 transition-all cursor-pointer" />

      <h1 className="font-bold text-4xl text-[#9353c7] hidden nav:block mx-auto">Fake Store</h1>

      <div className="hidden nav:inline">
        {menuIsOpen ?
          <div className="nav:inline hidden relative">
            <X
              size={32}
              color="#9353c7"
              onClick={() => setMenuIsOpen(!menuIsOpen)}
            />
            <div className="bg-[#9353c7] shadow-md rounded-md p-6 w-32 h-fit absolute right-0 flex flex-col justify-center items-center mt-4 gap-2 font-bold z-20">
              {categories.map(category =>
                <button
                  className="text-sm text-white"
                  key={category}
                  onClick={() => {
                    setFilteredItems(items.filter(item => item.category === category))
                  }}>
                  {category.toUpperCase()}
                </button>
              )}
            </div>
          </div>
          :
          <List
            size={32}
            color="#9353c7"
            onClick={() => setMenuIsOpen(!menuIsOpen)}
          />
        }
      </div>

      <div className="flex gap-8 font-bold md:gap-4 nav:hidden">
        {categories.map(category =>
          <button
            key={category}
            className="hover:scale-110 transition-all"
            onClick={() => {
              setFilteredItems(items.filter(item => item.category === category))
            }}>
            {category.toUpperCase()}
          </button>
        )}

      </div>
      <div className="cartIconMobile">
        <div className="relative nav:absolute">
          <ShoppingCart
            size={32}
            color="#b278d9"
            onClick={() => setCartIsOpen(true)}
            className="cursor-pointer hover:scale-110 transition-all" />

          {cartCount > 0 && <div className="bg-red-600 w-6 h-6 text-white font-bold rounded-full text-center absolute bottom-5 left-5">{cartCount}</div>}
        </div>
      </div>
    </div>
  )
}