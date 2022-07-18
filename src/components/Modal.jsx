import React, { useContext } from "react"
import { Context } from "../Context/Context"
import { X } from "phosphor-react"

export default function Modal() {
  const { selectedProduct, setModalIsOpen, addProduct, cartItems, setCartItems } = useContext(Context)
  const { title, description, price, image } = selectedProduct

  return (
    <div className="max-w-[40%] text-black bg-white rounded-md px-6 py-8 relative flex flex-col justify-between items-center text-center gap-6 z-30 sm:max-w-[80%] ">
      <div className="w-full h-52 rounded-t-md flex items-center justify-center sm:h-24">
        <img className="h-48 sm:h-24" src={image} />
      </div>
      <X size={20} color="#b278d9" weight="bold" className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" onClick={() => setModalIsOpen(false)} />
      <h1 className="font-bold mt-8">{title}</h1>
      <p className="sm:text-sm">{description.slice(0, 200) + "..."}</p>
      <p className="font-bold text-xl mb-8">R${price}</p>
      <button
        className="bottom-0 w-full py-2 rounded-b-md hover:bg-green-100 absolute"
        style={{ boxShadow: "0px -1px 8px 0px rgb(0 0 0 / 0.2)" }}
        onClick={() => addProduct(selectedProduct)}
      >
        Adicionar ao carrinho
      </button>
    </div>

  )

}