import React, { useContext, useEffect, useState } from "react"
import { ApiContext } from "../Context/ApiContext"
// import Modal from "./Modal"

export default function Products() {
  const { filteredItems, setModalIsOpen, selectedProduct, setSelectedProduct } = useContext(ApiContext)

  return (filteredItems.map((item, index) => (
      <div 
        onClick={() => {
          setSelectedProduct(item)
          setModalIsOpen(true)
        }}
        className="h-full bg-white flex flex-col rounded-md items-center shadow-xl hover:scale-105 transition-all justify-between ">
        <div className="w-full h-52 overflow-hidden rounded-t-md flex place-items-center ">
          <img className="scale-[30%] transition-all " src={item.image}/>
        </div>
        <div className="flex flex-col justify-between items-center flex-1 w-full">
          <h1 className="font-bold text-center px-3 mt-5">{item.title}</h1>
          <p className="font-bold text-xl mb-2 mt-2 ">${item.price}</p>
          <p className="mb-6 text-center">Clique para ver a descrição.</p>
        </div>
        <button className="bottom-0 w-full py-2 rounded-b-md " style={{boxShadow: "0px -6px 10px -1px rgb(0 0 0 / 0.1)"}}>
          Adicionar ao carrinho
        </button>
      </div>
  )
  ))
}