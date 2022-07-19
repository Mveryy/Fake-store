import { useContext } from "react"
import { Context } from "../Context/Context"

export default function ModalBg() {
  const { setModalIsOpen, setCartIsOpen } = useContext(Context)

  return (
    <div
      className="w-full min-h-full fixed bg-black opacity-10 z-10"
      onClick={() => {
        setModalIsOpen(false)
        setCartIsOpen(false)
      }}>
    </div>
  )
}