import { useContext } from "react"
import { Context } from "../Context/Context"
import CartItem from "./CartItem"

export default function Cart() {
  const {cartItems, setCartItems} = useContext(Context)

  return (
      <aside className="w-[400px] max-h-[80%] bg-white fixed right-0  z-30 text-black rounded-md mt-6 drop-shadow-lg overflow-y-auto">
        <h1 className="font-bold text-lg mt-6 ml-6">Seu Carrinho de Compras</h1>
        
          {cartItems.map(item => 
            <div className="flex flex-col">
              <CartItem title={item.title} price={item.price} image={item.image}/> 
            </div>
          )}
        
        <button className="bottom-0 w-full py-2 bg-green-200 font-bold sticky">Finalizar compra</button>
      </aside>
  )
}