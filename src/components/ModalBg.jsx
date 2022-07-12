import { useContext } from "react"
import { ApiContext } from "../Context/ApiContext"

export default function ModalBg() {
  const {setModalIsOpen} = useContext(ApiContext)

  return (
    <div className="w-full h-screen fixed bg-black opacity-10 z-10" onClick={() => setModalIsOpen(false)}>

    </div>
  )
}