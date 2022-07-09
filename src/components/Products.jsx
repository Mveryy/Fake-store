import { useContext } from "react"
import { ApiContext } from "../Context/ApiContext"

export default function Products() {
  const { filteredItems } = useContext(ApiContext)

  return (filteredItems.map((item, index) => (
    
  <div 
    onClick={() => console.log(item)}
    className="h-full bg-white flex flex-col rounded-md items-center shadow-xl hover:scale-110 transition-all justify-between">
    <div className="w-full h-52 overflow-hidden rounded-t-md flex place-items-center ">
      <img className="scale-[30%] transition-all " src={item.image}/>
    </div>
    <div className="flex flex-col justify-between items-center flex-1 w-full">
      <h1 className="font-bold px-8 mt-5">{item.title}</h1>
      {/* <p className="text-sm mb-4">{item.description}</p> */}
      <p className="font-bold text-xl">${item.price}</p>
      <p className="mb-6">Clique para ver a descrição.</p>
    </div>
    <button className="bottom-0 w-full py-2 rounded-b-md " style={{boxShadow: "0px -6px 10px -1px rgb(0 0 0 / 0.1)"}}>Adicionar ao carrinho</button>
  </div>
  
  )
  ))
}