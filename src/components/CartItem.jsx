import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { Context } from "../Context/Context";

export default function CartItem({ item }) {
  const { addProduct, removeProduct, updateProduct } = useContext(Context)

  const { format: formatPrice } = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL"
  })

  return (
    <div className="text-black w-full relative flex nav:flex-col pr-8 mb-8 nav:pr-0 shadow">
      <div className="flex justify-center items-center">
        <img className="w-[40%] mb-4" src={item.image} />
      </div>
      <div className="max-w-[300px] text-center flex flex-col justify-center items-end nav:items-center nav:my-4 nav:max-w-full">
        <h1>{item.title}</h1>
        <div className="flex float-right">
          <div className="flex items-center">
            <p className="font-bold my-4 mr-2">{formatPrice(parseFloat(item.price * item.amount))}</p>
            <button>
              <MinusCircle size={32} color="#b278d9" weight="light" onClick={() => updateProduct(item.id, "-")} />
            </button>
            <p className="mx-2">{item.amount}</p>
            <button>
              <PlusCircle size={32} color="#b278d9" weight="light" onClick={() => updateProduct(item.id, "+")} />
            </button>
            <Trash
              size={25}
              color="#e83b3b"
              weight="duotone"
              className="cursor-pointer ml-2"
              onClick={() => removeProduct(item.id)} />
          </div>
        </div>
      </div>
    </div>
  )
}