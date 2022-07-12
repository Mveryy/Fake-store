import { MinusCircle, PlusCircle } from "phosphor-react";

export default function CartItem({title, image, price}) {
  return (
    <div className="text-black w-full px-8 mt-8 relative">
        {/* <img src={image} className=""/> */}
        <h1>{title}</h1>
        <div className="flex float-right">
          <p className="font-bold my-4 mr-2">R${price}</p>
          <div className="flex items-center ">
            <button><MinusCircle size={32} color="#b278d9" weight="light" /></button>
            <p className="mx-2">3</p>
            <button><PlusCircle size={32} color="#b278d9" weight="light" /></button>
          </div>
        </div>
      <hr className="w-full"/>
      </div>
  )
}