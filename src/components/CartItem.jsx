import { MinusCircle, PlusCircle, Trash } from "phosphor-react";
import { useState } from "react";

export default function CartItem({ title, image, price }) {
  const [itemCount, setItemCount] = useState(1)

  return (
    <div className="text-black w-full mt-8 relative flex pr-8">
      <div className="h-28 w-fit flex  place-items-center">
        <img className="scale-[30%]" src={image} />
      </div>
      <div>
        <h1>{title}</h1>
        <div className="flex float-right">
          <div className="flex items-center">
            <p className="font-bold my-4 mr-2">R${price * itemCount}</p>
            <button>
              <MinusCircle size={32} color="#b278d9" weight="light" onClick={() => setItemCount(itemCount === 1 ? itemCount : itemCount - 1)} />
            </button>
            <p className="mx-2">{itemCount}</p>
            <button>
              <PlusCircle size={32} color="#b278d9" weight="light" onClick={() => setItemCount(itemCount + 1)} />
            </button>
            <Trash
              size={25}
              color="#e83b3b"
              weight="duotone"
              className="cursor-pointer ml-2"
              onClick={() => { }} />
          </div>
        </div>
      </div>
    </div>
  )
}