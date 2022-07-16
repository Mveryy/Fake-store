import React, { useContext } from "react"
import { Context } from "../Context/Context"

export default function Products() {
  const { filteredItems, setModalIsOpen, setSelectedProduct, addProduct, modalIsOpen } = useContext(Context)

  return (filteredItems.map(item => (
    <div
      className={`h-fit bg-white flex flex-col rounded-md items-center shadow-md transition-all cursor-pointer text-center`}>
      <div onClick={() => {
        setSelectedProduct(item)
        setModalIsOpen(true)
      }}>
        <div className="w-full overflow-hidden rounded-t-md flex justify-center">
          <img className="h-32 my-8" src={item.image} />
        </div>
        <div className="flex flex-col h-auto w-auto min-h-[150px] justify-between">
          <h1 className="font-bold px-2 text-base">{item.title}</h1>
          <p className="font-bold text-xl">R${item.price}</p>
          <p className="">Clique para ver a descrição.</p>
        </div>
      </div>
      <button
        className="w-full py-2 rounded-b-md hover:bg-green-100 mt-4"
        style={{ boxShadow: "0px -6px 10px -1px rgb(0 0 0 / 0.1)" }}
        onClick={() => {
          addProduct(item)
        }}
      >
        Adicionar ao carrinho
      </button>
    </div>
  )
  ))
}