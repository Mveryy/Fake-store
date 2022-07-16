import { useContext } from "react"
import { Context } from "../Context/Context"
import CartItem from "./CartItem"

export default function Cart({ cartIsOpen }) {
  const { cartItems, totalPriceCart } = useContext(Context)

  return (
    <aside className="w-[400px] max-h-[80%] bg-white fixed right-0 mr-8 text-black rounded-md mt-6 drop-shadow-lg overflow-y-auto z-20">
      <h1 className="font-bold text-lg mt-6 ml-6 ">Seu Carrinho de Compras</h1>
      {cartItems.length === 0 ? <p className="ml-6 mt-4">Seu carrinho está vazio.</p> : null}

      {cartItems.map(item =>
        <div className="flex flex-col">
          <CartItem key={item.id} item={item} />
        </div>
      )}

      {totalPriceCart ?
        <p className="font-bold text-xl float-right mr-6">Total: R${totalPriceCart.toFixed(2)}</p>
        : null}

      <button className="bottom-0 w-full py-2 bg-[#b278d9] font-bold sticky mt-2 text-white">Finalizar compra</button>
    </aside>
  )
}