import React, { useContext } from "react"
import { ApiContext } from "../Context/ApiContext"
import {X} from "phosphor-react"

export default function Modal() {
  const {selectedProduct, setModalIsOpen} = useContext(ApiContext)
  const {title, description, price} = selectedProduct

  return (
      <div className="max-w-[40%] text-black bg-white rounded-md px-6 py-8 relative z-20 flex flex-col justify-between items-center text-center gap-6">
        <X size={20} color="#b278d9" weight="bold" className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" onClick={() => setModalIsOpen(false)}/>
        <h1 className="font-bold">{title}</h1>
        <p>{description}</p>
        <p className="font-bold text-xl">${price}</p>
      </div>
      
    )
  
}