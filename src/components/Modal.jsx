import React, { useContext } from "react"
import { Context } from "../Context/Context"
import {X} from "phosphor-react"

export default function Modal() {
  const {selectedProduct, setModalIsOpen} = useContext(Context)
  const {title, description, price, image} = selectedProduct

  return (
      <div className="max-w-[40%] text-black bg-white rounded-md px-6 py-8 relative z-20 flex flex-col justify-between items-center text-center gap-6 ">
        {/* <img src={image} className="scale-50"/> */}
        <X size={20} color="#b278d9" weight="bold" className="absolute top-0 right-0 mt-4 mr-4 cursor-pointer" onClick={() => setModalIsOpen(false)}/>
        <h1 className="font-bold mt-8">{title}</h1>
        <p>{description}</p>
        <p className="font-bold text-xl ">${price}</p>
      </div>
      
    )
  
}