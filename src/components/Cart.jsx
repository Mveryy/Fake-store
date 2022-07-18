import { useContext } from "react"
import { Context } from "../Context/Context"
import CartItem from "./CartItem"
import { X } from 'phosphor-react'

export default function Cart({ cartIsOpen }) {
  const { cartItems, totalPriceCart, setCartIsOpen } = useContext(Context)

  return (
    <aside className="w-[400px] max-h-[80%] bg-white fixed right-0 mr-8 text-black rounded-md mt-6 drop-shadow-lg overflow-y-auto z-20 nav:w-[80%]">
      <X
        size={25}
        color="#9353c7"
        onClick={() => setCartIsOpen(false)}
        className="cursor-pointer right-0 absolute mt-2 mr-4"
      />
      <h1 className="font-bold text-lg my-4 ml-6 nav:mt-8 nav:mb-6">Seu Carrinho de Compras</h1>
      {cartItems.length === 0 ? <p className="ml-6 mb-4">Seu carrinho está vazio.</p> : null}

      {cartItems.map(item =>
        <div className="flex flex-col">
          <CartItem key={item.id} item={item} />
        </div>
      )}

      {totalPriceCart ?
        <p className="font-bold text-xl float-right mr-6 my-2">Total: R${totalPriceCart.toFixed(2)}</p>
        : null}

      <button className="bottom-0 w-full py-2 bg-[#b278d9] font-bold sticky text-white">Finalizar compra</button>
    </aside>
  )
}