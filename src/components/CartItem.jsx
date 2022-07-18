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
    <div className="text-black w-full mt-2 relative flex pr-8">
      <div className="h-28 w-fit flex  place-items-center nav:items-start">
        <img className="scale-[50%]" src={item.image} />
      </div>
      <div className="min-w-[210px] text-center">
        <h1>{item.title}</h1>
        <div className="flex float-right">
          <div className="flex items-center nav:mt-6">
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